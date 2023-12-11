import { BoardList } from "@/components/organization/BoardList";
import { Info } from "@/components/organization/Info";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";

const OrganizationIdPage = async () => {
  return (
    <div className="w-full mb-20">
      <Info />
      <Separator />
      <div className="px-2 md:px-4">
        <Suspense fallback={<BoardList.skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationIdPage;
