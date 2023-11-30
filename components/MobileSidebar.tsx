"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useMobileSideBar } from "@/hooks/useMobileSideBar";

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

  return <div></div>;
};
