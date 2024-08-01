
import { redirect } from 'next/dist/server/api-utils';
import {post} from '../../../prisma/index';
import  { NextRequest, NextResponse } from 'next/server';
import { stat } from 'fs';


export async function POST(req: NextRequest) {
   
    await post(req);

    return NextResponse.json({ message: 'Hello - POST', status: 200 });
}