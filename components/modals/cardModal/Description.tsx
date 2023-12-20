"use client";

import { CardWithList } from "@/types";

import { Skeleton } from "@/components/ui/skeleton";
import { AlignLeft } from "lucide-react";

interface DescriptionProps {
  data: CardWithList;
}

export const Description = ({ data }: DescriptionProps) => {
  return (
    <div className="flex items-start gap-x-3 w-full">
      <AlignLeft className="h-5 w-5 mt-0.5 text-neutral-700" />
      <div className="w-full">
        <p className="font-semibold text-neutral-700 mb-2">Description</p>
        <div
          role="button"
          className="min-h-[78px] bg-neutral-200 text-sm font-medium py-3 px-3.5 rounded-md"
        >
          {data.description || "Add a description"}
        </div>
      </div>
    </div>
  );
};

Description.skeleton = function DescriptionSkeleton() {
  return (
    <div className="flex items-start gap-x-3 w-full">
      <Skeleton className="h-6 w-6 bg-neutral-200" />
      <div className="w-full">
        <Skeleton className="h-6 w-24 mb-2 bg-neutral-200" />
        <Skeleton className="h-6 w-24 mb-2 bg-neutral-200" />
      </div>
    </div>
  );
};
