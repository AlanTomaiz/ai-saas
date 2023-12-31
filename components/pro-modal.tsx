'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useProModal } from '@/hooks/use-pro-modal';
import { api } from '@/lib/api';
import { cn } from '@/lib/utils';
import { Check, Code, ImageIcon, MessageSquare, Zap } from 'lucide-react';
import { toast } from 'react-hot-toast';

const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-green-700',
    bgColor: 'bg-green-700/10',
  },
];

export function ProModal() {
  const { isOpen, onClose } = useProModal();

  async function handleSubscription() {
    try {
      const response = await api.get('/api/stripe');
      window.location.href = response.data.url;
    } catch (error) {
      console.log('STRIPE_CLIENT_ERROR', error);
      toast.error('Something went wrong');
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 text-xl font-bold">
              Upgrade to Genius
              <Badge variant="premium" className="py-1 text-sm uppercase">
                pro
              </Badge>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-2 pt-2 text-center font-medium text-zinc-900">
          {tools.map(tool => (
            <Card
              key={tool.label}
              className="flex items-center justify-between border-black/5 p-3"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn('w-fit rounded-md p-2', tool.bgColor)}>
                  <tool.icon className={cn('h-6 w-6', tool.color)} />
                </div>
                <div className="text-sm font-semibold">{tool.label}</div>
              </div>
              <Check className="h-5 w-5 text-primary" />
            </Card>
          ))}
        </div>
        <DialogFooter>
          <Button
            size="lg"
            variant="premium"
            className="w-full"
            onClick={handleSubscription}
          >
            Upgrade
            <Zap className="ml-2 h-4 w-4 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
