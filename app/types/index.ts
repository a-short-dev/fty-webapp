import { Transaction, User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "hashedPassword" | "createdAt" | "updatedAt"
> & {
  hashedPassword: string;
  createdAt: string;
  updatedAt: string;
};

export type SafeTransaction = Omit<Transaction, "createdAt"> & {
  createdAt: String;
};
