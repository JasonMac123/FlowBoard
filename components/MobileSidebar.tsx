"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useMobileSideBar } from "@/hooks/useMobileSideBar";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent } from "./ui/sheet";
import { SideBar } from "./Sidebar";

export const MobileSideBar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const onOpen = useMobileSideBar((state) => state.onOpen);
  const onClose = useMobileSideBar((state) => state.onClose);
  const isOpen = useMobileSideBar((state) => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden mr-2"
        variant="ghost"
        size="sm"
      >
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-10">
          <SideBar storageKey="t-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  );
};
