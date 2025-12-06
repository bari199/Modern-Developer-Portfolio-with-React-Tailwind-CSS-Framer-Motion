import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to:  process.env.MAIL_USER,
      subject: `Portfolio Contact Form - ${name}`,
      text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
                `,
    };

    await transporter.sendMail(mailOptions);

    return res.json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: "Failed to send email." });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
