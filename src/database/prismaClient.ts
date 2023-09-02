import { PrismaClient } from "@prisma/client";

const primaClient = new PrismaClient({log: ["error", "info", "query", "warn"]});

export {primaClient};