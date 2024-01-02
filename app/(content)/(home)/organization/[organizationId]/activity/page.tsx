import { Suspense } from "react";

import { ActivityList } from "@/components/organization/ActivityList";
import { Info } from "@/components/organization/Info";
import { Separator } from "@/components/ui/separator";

const ActivityPage = () => {
  return (
    <div className="w-full">
      <Info />
      <Separator className="my-2" />
      <Suspense>
        <ActivityList />
      </Suspense>
    </div>
  );
};

export default ActivityPage;
