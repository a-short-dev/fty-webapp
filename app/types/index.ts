import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "hashedPassword" | "createdAt" | "updatedAt"
> & {
  hashedPassword: string;
  createdAt: string;
  updatedAt: string;
};
