import { z } from 'zod';

// Validation schema
export const ContactFormSchema = z.object({
  email: z.string().email('A valid email address is required'),
  honeypot: z.string().max(0), // Anti-spam honeypot field
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters in length!')
    .max(1_000, 'Message cannot be more than 1,000 characters.'),
  name: z
    .string()
    .min(2, 'Name must be a minimum of 2 characters')
    .max(100, 'Name cannot exceed 100 characters'),
  startTime: z.date(),
});
