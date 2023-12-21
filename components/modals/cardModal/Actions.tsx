"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const Actions = () => {
  return (
    <div>
      <p>Actions</p>
    </div>
  );
};

Actions.skeleton = function ActionSkeleton() {
  return (
    <div className="space-y-2 mt-2">
      <Skeleton className="w-20 h-4 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
    </div>
  );
};
