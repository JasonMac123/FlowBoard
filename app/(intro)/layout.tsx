import { Footer } from "@/components/layout/Footer";
import { NavBar } from "@/components/layout/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen bg-slate-100">
      <NavBar />
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
