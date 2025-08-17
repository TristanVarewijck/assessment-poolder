import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Name too long'),
  email: z.string().email('Invalid email address'),
  bio: z.string().optional(),
});

export type UserFormData = z.infer<typeof userSchema>;
