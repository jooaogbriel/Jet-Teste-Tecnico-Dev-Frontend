"use client"

import Hero from "@/app/ui/dashboard/hero";
export default function RootLayout({ children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Hero />
      <div>{children}</div>
    </div>
  );
}