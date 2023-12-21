"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { CardWithList } from "@/types";

interface CardActionsProps {
  data: CardWithList;
}

export const CardActions = ({ data }: CardActionsProps) => {
  return (
    <div>
      <p>Actions</p>
    </div>
  );
};

CardActions.skeleton = function ActionSkeleton() {
  return (
    <div className="space-y-2 mt-2">
      <Skeleton className="w-20 h-4 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
    </div>
  );
};
