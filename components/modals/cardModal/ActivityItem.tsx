import { AuditLog } from "@prisma/client";

import { createLogMessage } from "@/lib/create-log-message";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface ActivityItemProps {
  data: AuditLog;
}

export const ActivityItem = ({ data }: ActivityItemProps) => {
  return (
    <li className="flex items-cetner gap-x-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src={data.userImage} />
      </Avatar>
      <div className="flex flex-col space-y-0.5">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold lowercase text-neutral-700">
            {data.userName}
          </span>{" "}
          {createLogMessage(data)}
        </p>
      </div>
    </li>
  );
};
