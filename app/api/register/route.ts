import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { prisma } from "../../libs/prismadb";
export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, phone, email, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);
  try {
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        phone,
        email,
        hashedPassword,
      },
    });

    // Create a new object that omits the hashedPassword property from the user object
    const { hashedPassword: password, ...userWithoutHashedPassword } = user;

    return NextResponse.json({message:"user created"});
  } catch (error) {
    // Handle errors
  }
}
