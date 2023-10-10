"use strict";
import nodemailer from "nodemailer";
import { host_port, host_url, password, user_name } from "../../secret.js";

export const sendmail = async (email, subject, text, code) => {

    const transporter = nodemailer.createTransport({
      host: host_url,
      port: 465,
      secure: true,
      auth: {
        user: user_name,
        pass: password,
      },
    });
    
    async function main() {

      const info = await transporter.sendMail({
        from: user_name,
        to: email,
        subject: subject,
        text: text, // plain text body
        html: `
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
          <header style="background-color: #3498db; color: #fff; text-align: center; padding: 20px;">
            <h1>Email Verification</h1>
          </header>
          <div style="padding: 20px;">
          <h1 style="padding: 5px; font-size: 20px;">Welcome to YourJini</h1>
            <p>Hello, ${email}</p>
            <p>Your verification code is: <strong>${code}</strong></p>
            <p>Please use this code to verify your email address. If you did not request this verification, please ignore this email.</p>
            <p>Thank you for using our service!</p>
          </div>
          <footer style="background-color: #3498db; color: #fff; text-align: center; padding: 10px;">
            &copy; 2023 Your Company Name. All rights reserved.
          </footer>
        </body>
      `,
      });
    }
    
    main().catch(console.error);
  return true;
};
