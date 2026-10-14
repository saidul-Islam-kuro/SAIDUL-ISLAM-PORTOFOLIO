const RECIPIENT = 'saidulkuro@gmail.com';
const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

function respond(res, status, body) {
  return res.status(status).json(body);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return respond(res, 405, { error: 'Method not allowed.' });
  }

  const origin = req.headers.origin;
  const host = req.headers.host;
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return respond(res, 403, { error: 'Request origin is not allowed.' });
      }
    } catch {
      return respond(res, 403, { error: 'Request origin is not allowed.' });
    }
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  if (typeof body.website === 'string' && body.website.trim()) {
    return respond(res, 200, { success: true });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (
    !name ||
    name.length > MAX_NAME_LENGTH ||
    !email ||
    email.length > 254 ||
    !EMAIL_PATTERN.test(email) ||
    !message ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return respond(res, 400, { error: 'Enter a valid name, email, and message (up to 5,000 characters).' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error('Contact email is not configured: set RESEND_API_KEY and RESEND_FROM_EMAIL.');
    return respond(res, 503, { error: 'The message service is temporarily unavailable. Please try again later.' });
  }

  const safeName = name.replace(/[\r\n]+/g, ' ');
  const safeReplyTo = email.replace(/[\r\n]+/g, '');
  const text = `Name: ${safeName}\nEmail: ${safeReplyTo}\n\n${message}`;
  const html = [
    `<p><strong>Name:</strong> ${escapeHtml(safeName)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(safeReplyTo)}</p>`,
    `<p><strong>Message:</strong></p>`,
    `<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
  ].join('');

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [RECIPIENT],
        reply_to: safeReplyTo,
        subject: `Portfolio message from ${safeName}`,
        text,
        html,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      console.error(`Resend rejected a contact message with status ${response.status}.`);
      return respond(res, 502, { error: 'Your message could not be delivered. Please try again later.' });
    }

    return respond(res, 200, { success: true });
  } catch (error) {
    console.error('Contact email request failed.', error);
    return respond(res, 502, { error: 'Your message could not be delivered. Please try again later.' });
  } finally {
    clearTimeout(timeout);
  }
}
