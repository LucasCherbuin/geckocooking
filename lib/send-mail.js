'use server';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { to, subject, text } = req.body;

        //création du mailer
        const transporter = nodemailer.createTransport({
            service: '', //choisir un mail
            auth: {
                username: process.env.MAIL_USERNAME,
                password: process.env.MAIL_PASSWORD,
            }
        })

        // envoye d'un email
    try {
        const info = await transporter.sendMail({
            from: process.env.MAIL_USERNAME,
            to: to,
            subject: subject,
            text: text,
        });

            console.log('Message envoyé: %s', info.messageId);
            res.status(200).json({ success: true });
        }   catch (error) {
            console.error('Erreur lors de l\'envoie', error);
            res.statuts(500).json({ message: false, error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }  
}
    