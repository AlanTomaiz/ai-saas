'use client';

import { api } from '@/lib/api';
import { Zap } from 'lucide-react';
import { Button } from './ui/button';

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
