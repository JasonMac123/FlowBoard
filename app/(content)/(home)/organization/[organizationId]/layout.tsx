import { startCase } from "lodash";
import { auth } from "@clerk/nextjs";

import { OrganizationControl } from "@/components/OrganizationControl";

export async function generateMetaData() {
  const { orgSlug } = auth();
  return {
    title: startCase(orgSlug || "organization"),
  };
}

const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrganizationControl />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
