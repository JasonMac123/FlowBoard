"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { AccordionItem, AccordionTrigger } from "./ui/accordion";

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  isActive,
  isExpanded,
  organization,
  onExpand,
}) => {
  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
          isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image
              fill
              src={organization.imageUrl}
              alt="Organization Image"
              className="rounded-sm object-cover"
            />
          </div>
          <span className="font-medium">{organization.name}</span>
        </div>
      </AccordionTrigger>
    </AccordionItem>
  );
};
