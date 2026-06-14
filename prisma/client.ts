import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const PrismaClientSingleton = () => {
  const pool = new Pool({ connectionString: process.env.POSTGRES_URL });

  const adapter = new PrismaPg(pool);

  return new PrismaClient({ adapter });
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof PrismaClientSingleton>;
}

export const prisma = globalThis.prismaGlobal ?? PrismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
