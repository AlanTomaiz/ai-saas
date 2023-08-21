import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';
import { getApiLimitCount } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';

async function PrivateLayout({ children }: { children: React.ReactNode }) {
  const apiLimitCount = await getApiLimitCount();
  const userPremium = await checkSubscription();

  return (
    <div className="relative h-full">
      <div className="hidden h-full bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <Sidebar userPremium={userPremium} apiLimitCount={apiLimitCount!} />
      </div>
      <div className="md:pl-64">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default PrivateLayout;
