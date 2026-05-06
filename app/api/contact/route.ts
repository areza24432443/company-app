import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();

  console.log(data); // بعداً ایمیل یا DB

  return NextResponse.json({ message: 'OK' });
}