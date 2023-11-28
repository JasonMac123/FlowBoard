import { NavBar } from "@/components/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <NavBar />
      {children}
    </div>
  );
};

export default HomeLayout;
