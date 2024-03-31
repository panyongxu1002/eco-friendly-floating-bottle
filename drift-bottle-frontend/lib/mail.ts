import nodemailer from "nodemailer";
import { verificationTokenTemplate } from "./template/verificationToken";


const { SMTP_EMAIL, SMTP_PASSWORD, SMTP_FROM } = process.env

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_PASSWORD
  }
})

export const sendVerificationEmail = async (
  email: string, 
  token: string
): Promise<{
  success?: string;
  error?: string;
}> => {
  try {
    const isValid = await transport.verify()
    if (!isValid) return { error: "Email transport error, please contact us"}
    await transport.sendMail({
      from: SMTP_FROM,
      to: email,
      subject: "Verify your email",
      html: verificationTokenTemplate(token)
    })
    return {
      success: "Confirmation email sent!"
    }
  } catch (error:any) {
    return { error: error.message}
  }
};


// export const sendTwoFactorTokenEmail = async (
//   email: string,
//   token: string
// ) => {
// };

// export const sendPasswordResetEmail = async (
//   email: string,
//   token: string,
// ) => {
//   const resetLink = `${domain}/auth/new-password?token=${token}`

// };
