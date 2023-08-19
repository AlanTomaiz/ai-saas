import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';

function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full">
      <div className="z-[80] hidden h-full bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <Sidebar />
      </div>
      <div className="md:pl-64">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default PrivateLayout;