import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

import { ModalProvider } from "@/components/modals/ModalProvider";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <Toaster />
      <ModalProvider />
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
