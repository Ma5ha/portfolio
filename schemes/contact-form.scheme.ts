import { z } from "zod";

export const contactFormScheme = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter valid email address!"),
  subject: z.string().min(1, "Enter some subject please!"),
  message: z.string().min(1, "Enter Message please!"),
});

export type ContactForm = z.infer<typeof contactFormScheme>;
