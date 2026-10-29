import { NextResponse } from 'next/server';
import { SITE_URL } from '../../../lib/site';
import { turnstileKey } from '../../../lib/turnstile';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TO = (process.env.CONTACT_FORM_TO || 'keren@webstix.com').trim();
const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${encodeURIComponent(TO)}`;

function bad(message, status = 400) {
  return NextResponse.json({ success: false, error: message }, { status });
}

async function verifyTurnstile(token, ip) {
  const secret = turnstileKey(process.env.TURNSTILE_SECRET_KEY);
  if (!secret) return true;
  if (!token) return false;
  const form = new URLSearchParams();
  form.set('secret', secret);
  form.set('response', token);
  if (ip) form.set('remoteip', ip);
  const res = await fetch(VERIFY_URL, {
    method: 'POST',
    body: form,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  });
  const data = await res.json().catch(() => ({}));
  return Boolean(data.success);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return bad('Invalid request body.');
  }

  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const phone = String(body.phone || '').trim();
  const type = String(body.type || '').trim();
  const message = String(body.message || '').trim();
  const token = String(body.turnstileToken || body.token || '').trim();

  if (!name || !email || !phone || !type || !message) {
    return bad('Please fill in all required fields before sending your message.');
  }
  if (!EMAIL_RE.test(email)) {
    return bad('Please enter a valid email address.');
  }

  const ip = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  try {
    if (!token && turnstileKey(process.env.TURNSTILE_SECRET_KEY)) {
      return bad('Please complete the verification check before sending.', 403);
    }
    const ok = await verifyTurnstile(token, ip);
    if (!ok) return bad('Verification expired or failed. Please wait for Success and try again.', 403);
  } catch {
    return bad('Verification unavailable. Please try again in a moment.', 503);
  }

  const payload = {
    name,
    email,
    phone,
    _replyto: email,
    _subject: `Quote request: ${type}`,
    'Project type': type,
    message,
    _template: 'table',
    _honey: ''
  };

  try {
    const res = await fetch(FORMSUBMIT_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.success === 'false' || data.success === false) {
      return bad(data.message || 'Unable to send your message. Please try again.', 502);
    }
  } catch {
    return bad('Unable to send your message. Please try again in a moment.', 502);
  }

  return NextResponse.json({
    success: true,
    redirect: `${SITE_URL}/thank-you`
  });
}
