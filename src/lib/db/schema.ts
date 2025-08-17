import {
  mysqlTable,
  varchar,
  int,
  timestamp,
  text,
} from 'drizzle-orm/mysql-core';
import { InferInsertModel, InferSelectModel } from 'drizzle-orm';

// Example table - replace with your actual schema
export const users = mysqlTable('users', {
  id: int('id').primaryKey().autoincrement(),
  createdAt: timestamp('created_at').defaultNow(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  avatar: varchar('avatar', { length: 255 }),
  bio: text('bio'),
});

// TypeScript types for type safety
export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;
