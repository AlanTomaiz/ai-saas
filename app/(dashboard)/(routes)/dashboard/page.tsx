'use client';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    href: '/image',
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    href: '/video',
    color: 'text-orange-700',
    bgColor: 'bg-orange-700/10',
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    label: 'Code Generation',
    icon: Code,
    href: '/code',
    color: 'text-green-700',
    bgColor: 'bg-green-700/10',
  },
];

function DashboardPage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          Expore the power of AI
        </h2>
        <p className="text-center text-sm font-light text-muted-foreground md:text-lg">
          Chat with the smartest AI - experience the power of AI
        </p>
        <div className="space-y-4 px-4 md:px-20 lg:px-32">
          {tools.map(tool => (
            <Card
              key={tool.href}
              onClick={() => router.push(tool.href)}
              className="flex cursor-pointer items-center justify-between border-black/5 p-4 transition hover:shadow-md"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn('w-fit rounded-md p-2', tool.bgColor)}>
                  <tool.icon className={cn('h-8 w-8', tool.color)} />
                </div>
                <div className="font-semibold">{tool.label}</div>
              </div>
              <ArrowRight />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
