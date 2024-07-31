'use client';
import {post} from '../../../prisma/index';
import  { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
   
    post(req);

    return NextResponse.json({ message: 'Hello - POST' });4
}