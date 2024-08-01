import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { NextRequest, NextResponse } from 'next/server'


export async function post(request: NextRequest) {
    const details = await request.json();
    const detailedform = details.newdata;
    const pr = prisma.user.create({
        data: { ...detailedform }
    })
    return NextResponse.json({ message: 'Hello - POST' });
}
