interface LandingLayoutProps {
  children: React.ReactNode;
}

function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <main className="h-full overflow-auto bg-[#111827]">
      <div className="mx-auto h-full max-w-screen-xl">{children}</div>
    </main>
  );
}

export default LandingLayout;
