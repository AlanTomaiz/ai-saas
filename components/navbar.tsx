import { MobileSidebar } from '@/components/mobile-sidebar';
import { getApiLimitCount } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';
import { UserButton } from '@clerk/nextjs';

export async function Navbar() {
  const apiLimitCount = await getApiLimitCount();
  const userPremium = await checkSubscription();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar userPremium={userPremium} apiLimitCount={apiLimitCount!} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
