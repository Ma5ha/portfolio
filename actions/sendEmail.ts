"use server";
import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import { validateString, getErrorMessage } from "@/components/lib/utils";
import { ContactForm } from "@/schemes/contact-form.scheme";

const resend = new Resend("re_SSxyPs1v_EhqCYM1iX3C6kyMcvh48ncBj");
export const senderEmail = async (form: ContactForm) => {
  const { subject, name, message, email } = form;

  let data;
  try {
    data = await resend.emails.send({
      from: "My Portfolio Contact <onboarding@resend.dev>",
      to: "blagmash@gmail.com" as string,
      subject: subject as string,
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: email as string,
        senderName: name as string,
        subject: subject as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
