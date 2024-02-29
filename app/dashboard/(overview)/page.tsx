import Hero from "@/app/ui/dashboard/hero";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div >
        <Hero />
      <div >{children}</div>
    </div>
  );
}