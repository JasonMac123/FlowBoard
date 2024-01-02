import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/prisma/db";
import { ActivityItem } from "../modals/cardModal/ActivityItem";
import { Skeleton } from "../ui/skeleton";
import { log } from "console";

export const ActivityList = async () => {
  const { orgId } = auth();

  if (!orgId) {
    redirect("/select-org");
  }

  const auditLogs = await db.auditLog.findMany({
    where: {
      orgId,
    },
  });

  return (
    <ol className="space-y-4 mt-4">
      <p className="hidden last:block text-xs text-cetner text-muted-foreground">
        No Activity found within this organization
      </p>
      {auditLogs.map((log) => (
        <ActivityItem key={log.id} data={log} />
      ))}
    </ol>
  );
};
