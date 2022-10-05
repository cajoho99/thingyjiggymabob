import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();
export const prismaToken = Symbol.for('prisma');
// eslint-disable-next-line @typescript-eslint/naming-convention
export type prismaType = typeof prisma;
