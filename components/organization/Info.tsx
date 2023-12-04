"use client";

import Image from "next/image";
import { useOrganization } from "@clerk/nextjs";

interface InfoProps {}

export const Info = () => {
  const { organization, isLoaded } = useOrganization();

  if (!isLoaded) {
    return <p>Loading!</p>;
  }

  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[60px] h-[60px] relative">
        <Image
          fill
          src={organization?.imageUrl!}
          alt="organization photo"
          className="rounded-md object-cover"
        />
      </div>
    </div>
  );
};
