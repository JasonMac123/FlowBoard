import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/prisma/db";
import { ActivityItem } from "../modals/cardModal/ActivityItem";
import { Skeleton } from "../ui/skeleton";

export const ActivityList = async () => {
  const { orgId } = auth();

  if (!orgId) {
    redirect("/select-org");
  }
};
