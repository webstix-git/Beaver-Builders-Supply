import { NextResponse } from 'next/server';
import { turnstileKey } from '../../../lib/turnstile';

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export async function POST(request) {
  const secret = turnstileKey(process.env.TURNSTILE_SECRET_KEY);
  if (!secret) {
    return NextResponse.json({ success: false, error: 'Turnstile is not configured.' }, { status: 500 });
  }

  let token = '';
  try {
    const body = await request.json();
    token = typeof body?.token === 'string' ? body.token.trim() : '';
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request.' }, { status: 400 });
  }

  if (!token) {
    return NextResponse.json({ success: false, error: 'Missing verification token.' }, { status: 400 });
  }

  const form = new URLSearchParams();
  form.set('secret', secret);
  form.set('response', token);

  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim();
  if (ip) form.set('remoteip', ip);

  try {
    const res = await fetch(VERIFY_URL, {
      method: 'POST',
      body: form,
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    });
    const data = await res.json();
    if (!data.success) {
      return NextResponse.json(
        { success: false, error: 'Verification failed. Please try again.' },
        { status: 400 }
      );
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: 'Verification unavailable.' }, { status: 502 });
  }
}
