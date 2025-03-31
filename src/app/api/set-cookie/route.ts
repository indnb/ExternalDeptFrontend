'use server'
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { error: 'Token is required' },
        { status: 400 }
      );
    }
    const cookieStore = await cookies()


    cookieStore.set({
      name: 'token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 1,
      path: '/',
      sameSite: 'lax',
    });

    return NextResponse.json(
      { success: true, message: 'Cookie set successfully' },
      { status: 200 }
    );
  } catch (e) {
    console.log(e)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
