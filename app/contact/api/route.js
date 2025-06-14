import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.formData();

    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const captcha = formData.get('g-recaptcha-response');

    if (!captcha) {
      return NextResponse.json({ error: 'Captcha no resuelto' }, { status: 400 });
    }

    // ✅ Verificar CAPTCHA con Google
    const verifyRes = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,//clave secreta del reCAPTCHA
    });

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return NextResponse.json({ error: 'Captcha inválido' }, { status: 400 });
    }

    // Configura el transporte
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO,
      subject: `Nuevo mensaje de contacto: ${subject}`,
      text: `Este mensaje fue enviado por: ${name}\nCorreo: ${email}\nAsunto: ${subject}\nMensaje:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Mensaje recibido correctamente' });
  } catch (error) {
    console.error('Error al procesar el formulario:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
