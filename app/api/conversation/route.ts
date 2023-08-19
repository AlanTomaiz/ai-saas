import { openai } from '@/lib/openai';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId } = auth();
    const { messages } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 });
    }

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo-16k',
      temperature: 0,
      messages,
    });

    const data = await response.json();

    return NextResponse.json(data.choices[0].message);
  } catch (error) {
    console.log('[CONVERSATION]', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
