import UserNavBar from "@/components/layout/UserNavBar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <UserNavBar />
      {children}
    </div>
  );
};

export default HomeLayout;
