import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "react-hot-toast";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <Toaster />
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
