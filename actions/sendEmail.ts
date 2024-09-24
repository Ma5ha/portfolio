"use server";
import React from "react";
import { Resend } from "resend";
import ContactFormEmail from '@/email/contact-form-email'
import {validateString,getErrorMessage} from '@/components/lib/utils'

const resend=new Resend("re_b9Koff8K_PtqMoNtW7DLrDvcqMvMZvfgU")
export const senderEmail=async(formaData:FormData)=>{
  const senderName=formaData.get("senderName")
  const senderEmail=formaData.get("senderEmail")
  const subject=formaData.get("subject")
  const message=formaData.get("message")

  if(!validateString(senderName,500)){
    return {
      error:"Invalid name"
    }
  }

  if(!validateString(senderEmail,500)){
    return {
      error:"Invalid sender email"
    }
  }

  if(!validateString(subject,500)){
    return {
      error:"Invalid subject"
    }
  }

  if(!validateString(message,5000)){
    return {
      error:"Invalid message"
    }
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "My Portfolio Contact <mariam@assiagroupe.tech>",
      to: "mariamdemo@gmail.com" as string,
      subject: subject as string,
      reply_to:senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
        senderName: senderName as string,
        subject:subject as string
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



}