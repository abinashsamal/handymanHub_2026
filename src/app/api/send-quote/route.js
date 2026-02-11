import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const QUOTE_TO_EMAIL = 'londonhandymanhub@gmail.com';

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, serviceType, address, preferredDate, details } = body;

    if (!fullName || !email || !phone || !serviceType || !details) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const user = process.env.SMTP_USER || QUOTE_TO_EMAIL;
    const pass = (process.env.SMTP_APP_PASSWORD || '').trim();
    const isPlaceholder = /replace-with|your-16-char|placeholder/i.test(pass);

    if (!pass || isPlaceholder) {
      console.error('SMTP_APP_PASSWORD is not set. Add it to .env.local for Gmail.');
      return NextResponse.json(
        { success: false, error: 'Email is not configured. Set SMTP_APP_PASSWORD in .env.local (see env.example).' },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: { user, pass },
    });

    const text = [
      `New quote request from London Handyman Hub`,
      ``,
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${serviceType}`,
      `Address/Location: ${address || '(not provided)'}`,
      `Preferred date: ${preferredDate || '(not provided)'}`,
      ``,
      `Project details:`,
      details,
    ].join('\n');

    const html = `
      <h2>New quote request</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${serviceType}</p>
      <p><strong>Address/Location:</strong> ${address || '(not provided)'}</p>
      <p><strong>Preferred date:</strong> ${preferredDate || '(not provided)'}</p>
      <h3>Project details</h3>
      <p>${details.replace(/\n/g, '<br>')}</p>
    `;

    await transporter.sendMail({
      from: `"London Handyman Hub" <${user}>`,
      to: QUOTE_TO_EMAIL,
      replyTo: email,
      subject: `Quote request from ${fullName} – ${serviceType}`,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Send quote error:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
