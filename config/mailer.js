import nodemailer from 'nodemailer';

const emailUser = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // Crea el transporter de nodemailer utilizando las credenciales de las variables de entorno
    user: emailUser,
    pass: emailPassword
  }
});

transporter.verify().then(() => {
  console.log("Ready for send emails");
});
