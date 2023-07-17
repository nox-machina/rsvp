import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const sendEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  await transporter.verify();

  const mail = {
    from: "RSVP Louise & Aaron contact@comethouse.dev",
    to: email,
    subject: "One-time password",
    text: `Your one-time password is:`,
    html: `<p>Your one-time password is:\n<h2>${otp}</h2>`,
  };

  const info = await transporter.sendMail(mail);
  return info;
};

module.exports = sendEmail;