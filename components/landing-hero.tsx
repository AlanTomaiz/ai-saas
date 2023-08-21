'use client';

import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import { Button } from './ui/button';

interface LandingHeroProps {}

export function LandingHero() {
  const { isSignedIn } = useAuth();

  return (
    <div className="space-y-5 py-36 text-center font-bold text-white">
      <div className="space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
        <h1>The Best AI Tool for</h1>
        <div className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: ['Chatbot.', 'Photo Generation.', 'Code Generation.'],
            }}
          />
        </div>
      </div>
      <div className="text-sm font-light text-zinc-400 md:text-xl">
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? '/dashboard' : '/sign-in'}>
          <Button
            variant="premium"
            className="rounded-full font-semibold md:p-6 md:text-lg"
          >
            Start Generation For Free
          </Button>
        </Link>
      </div>
      <div className="text-xs font-normal text-zinc-400 md:text-sm">
        No credit card required.
      </div>
    </div>
  );
}
