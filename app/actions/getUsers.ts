import { prisma } from '../libs/prismadb';

export interface IUsersParams {
	userId?: string;
	firstName?: string;
	lastName?: string;
}

export default async function getUsers(params: IUsersParams) {
	try {
		const { userId, firstName, lastName } = params;
		let query: any = {};

		if (userId) {
			query.userId = userId;
		}

		if (firstName) {
			query.firstName = firstName;
		}

		if (lastName) {
			query.userId = lastName;
		}

		const users = await prisma.user.findMany({
			where: query,
			orderBy: {
				createdAt: 'desc',
			},
		});

		const safeUsers = users.map((user: any) => ({
			...user,
			createdAt: user.createdAt.toISOString(),
		}));

		return safeUsers;
	} catch (error: any) {
		throw new Error(error);
	}
}
