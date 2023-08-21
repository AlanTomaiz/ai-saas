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
    const { prompt, amount, resolution } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!prompt) {
      return new NextResponse('Prompt is required', { status: 400 });
    }

    if (!amount) {
      return new NextResponse('Amount is required', { status: 400 });
    }

    if (!resolution) {
      return new NextResponse('Resolution is required', { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPremiumUser = await checkSubscription();
    if (!freeTrial && !isPremiumUser) {
      return new NextResponse('Free trial has expired', { status: 403 });
    }

    const response = await openai.createImage({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    if (!isPremiumUser) {
      await increasedApiLimit();
    }

    const data = await response.json();
    return NextResponse.json(data.data);
  } catch (error) {
    console.log('[CODE_ERROR]', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
