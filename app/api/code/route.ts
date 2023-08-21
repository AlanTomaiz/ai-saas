import { checkApiLimit, increasedApiLimit } from '@/lib/api-limit';
import { openai } from '@/lib/openai';
import { checkSubscription } from '@/lib/subscription';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { ChatCompletionRequestMessage } from 'openai-edge';

const instructionMessage: ChatCompletionRequestMessage = {
  role: 'system',
  content:
    'You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.',
};

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

    const freeTrial = await checkApiLimit();
    const isPremiumUser = await checkSubscription();
    if (!freeTrial && !isPremiumUser) {
      return new NextResponse('Free trial has expired', { status: 403 });
    }

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo-16k',
      temperature: 0,
      messages: [instructionMessage, ...messages],
    });

    if (!isPremiumUser) {
      await increasedApiLimit();
    }

    const data = await response.json();
    return NextResponse.json(data.choices[0].message);
  } catch (error) {
    console.log('[CODE_ERROR]', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
