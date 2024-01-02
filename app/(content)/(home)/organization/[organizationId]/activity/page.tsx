import { Info } from "@/components/organization/Info";
import { Separator } from "@/components/ui/separator";

const ActivityPage = () => {
  return (
    <div className="w-full">
      <Info />
      <Separator className="my-2" />
      <ActivityList />
    </div>
  );
};

export default ActivityPage;
