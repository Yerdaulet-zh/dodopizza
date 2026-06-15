import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
    const data = await prisma.ingredient.findMany({ select: { name: true } })
    return NextResponse.json(data);
}
