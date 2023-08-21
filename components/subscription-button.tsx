'use client';

import { Button } from '@/components/ui/button';
import { api } from '@/lib/api';
import { Zap } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface SubscriptionButtonProps {
  isPro: boolean;
}

export function SubscriptionButton({ isPro }: SubscriptionButtonProps) {
  async function handleSubscription() {
    try {
      const response = await api.get('/api/stripe');
      window.location.href = response.data.url;
    } catch (error) {
      console.log('BILLING_ERROR', error);
      toast.error('Something went wrong');
    }
  }

  return (
    <Button
      variant={isPro ? 'default' : 'premium'}
      onClick={handleSubscription}
    >
      {isPro ? 'Manage Subscription' : 'Upgrade'}
      {!isPro && <Zap className="ml-4 h-4 w-4 fill-white" />}
    </Button>
  );
}
