import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

import { ModalProvider } from "@/components/modals/ModalProvider";
import { QueryProvider } from "@/components/QueryProvider";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
