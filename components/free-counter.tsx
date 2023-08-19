'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useProModal } from '@/hooks/use-pro-modal';
import { MAX_FREE_COUNTS } from '@/state/constants';
import { Zap } from 'lucide-react';

interface FreeCounterProps {
  apiLimitCount: number;
}

export function FreeCounter({ apiLimitCount }: FreeCounterProps) {
  const { onOpen } = useProModal();

  return (
    <div className="px-3">
      <Card className="border-0 bg-white/10">
        <CardContent className="py-6">
          <div className="mb-4 space-y-2 text-center text-sm text-white">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress
              className="h-3"
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <Button className="w-full" variant="premium" onClick={onOpen}>
            Upgrade
            <Zap className="ml-2 h-4 w-4 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
