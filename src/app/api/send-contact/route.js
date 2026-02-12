import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const CONTACT_TO_EMAIL = 'LondonHandymanHub@gmail.com';

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Please fill in name, email, and message.' },
        { status: 400 }
      );
    }

    const user = process.env.SMTP_USER || CONTACT_TO_EMAIL;
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
      `New contact form message from London Handyman Hub`,
      ``,
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || '(not provided)'}`,
      ``,
      `Message:`,
      message,
    ].join('\n');

    const html = `
      <h2>New contact form message</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> ${phone || '(not provided)'}</p>
      <h3>Message</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    await transporter.sendMail({
      from: `"London Handyman Hub" <${user}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Contact from ${fullName} – London Handyman Hub`,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Send contact error:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Failed to send message' },
      { status: 500 }
    );
  }
}
