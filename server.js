import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, 
    secure: false, 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post("/send-email", async (req, res) => {
    console.log("Request diterima:", req.body);
    const { name, email, phone, company, message } = req.body;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "mlutvburdah@gmail.com",
        subject: "Pesan Baru dari Formulir Kontak",
        text: `Nama: ${name}\nEmail: ${email}\nNo WhatsApp: ${phone}\nPerusahaan: ${company}\nPesan: ${message}`,
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email berhasil dikirim:", info.response);
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Gagal mengirim email:", error);
        res.status(500).json({ success: false, message: "Failed to send email", error });
    }
});

app.listen(5173, () => {
    console.log("Server running on port 5173");
});
