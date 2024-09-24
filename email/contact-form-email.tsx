import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  subject:string,
  senderName:string
};

export default function ContactFormEmail({
  message,
  senderEmail,
  subject,
  senderName
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your Portfolio Site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white  my-10 px-10 py-4 rounded-md">
              <Text className="text-2xl font-bold  text-capitalize">{subject}</Text>
              <Text>Email from:{senderName}</Text>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
