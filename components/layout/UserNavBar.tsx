import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Logo } from "./Logo";
import { OrganizationSwitcher } from "@clerk/nextjs";

const UserNavBar = () => {
  return (
    <nav className="fixed z-50 top-0 w-full px-4 h-14 border-b shadow-sm bg-white flex items-center">
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button
          size="sm"
          className="rounded-sm hidden md:block h-auto py-1.5 px-2"
        >
          create
        </Button>
        <Button size="sm" className="rounded-sm block md:hidden">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
        />
      </div>
    </nav>
  );
};

export default UserNavBar;
