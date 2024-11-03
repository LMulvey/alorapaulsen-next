'use server';

import { ContactFormSchema } from '@/schema/contact-form';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormInput = z.infer<typeof ContactFormSchema>;

export const submitContactForm = async (formData: ContactFormInput) => {
  try {
    // Validate the input
    const validatedData = ContactFormSchema.parse(formData);

    // Check if submission is too quick (likely a bot)
    const submissionTime = Date.now();
    const minSubmissionTime = 3_000; // 3 seconds
    if (submissionTime - formData.startTime.getTime() < minSubmissionTime) {
      throw new Error('Submission too quick. Please try again.');
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'Contact Form <hello@alorapaulsen.com>',
      subject: `New Contact Form Submission from ${validatedData.name}`,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        
        Message:
        ${validatedData.message}
      `,
      to: 'hello@alorapaulsen.com',
    });

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        error: 'Invalid form data. Please check your inputs.',
        success: false,
      };
    }

    return {
      error: 'Failed to send message. Please try again later.',
      success: false,
    };
  }
};
