"use client";

import { MoreHorizontal } from "lucide-react";

import { Button } from "../ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";

import { List } from "@prisma/client";

interface ListOptionsProps {
  onAddCard: () => void;
  data: List;
}

export const ListOptions = ({ onAddCard, data }: ListOptionsProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-auto w-auto p-2" variant="ghost">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
    </Popover>
  );
};
