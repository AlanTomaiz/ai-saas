'use client';

import { Sidebar } from '@/components/sidebar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

interface SidebarProps {
  apiLimitCount: number;
  userPremium: boolean;
}

export function MobileSidebar({ apiLimitCount, userPremium }: SidebarProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar userPremium={userPremium} apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
}
