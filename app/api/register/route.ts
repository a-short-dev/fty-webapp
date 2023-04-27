import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

import { prisma } from '../../libs/prismadb';

export async function POST(request: Request) {
	const body = await request.json();
	const { firstName, lastName, phone, email, password } = body;

	const hashedPassword = await bcrypt.hash(password, 12);

	try {
		const nUser = await prisma.user.create({
			data: {
				firstName,
				lastName,
				phone,
				email,
				hashedPassword,
			},
		});
		// Create a new object that omits the hashedPassword property from the user object
		const { hashedPassword: password, ...userWithoutHashedPassword } = nUser;
		return NextResponse.json({ user: userWithoutHashedPassword });
	} catch (error: any) {
		const e = error?.Message || error;
		return NextResponse.json({ error: e });
	}
}

function generateAccountNumber() {
	const min = 1000000000; // 10-digit number starts at 1 billion
	const max = 9999999999; // 10-digit number ends at 9.999999999 billion
	const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	return randomNumber.toString(); // convert number to string
}
