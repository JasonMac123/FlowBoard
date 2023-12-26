"use client";

import { Trash } from "lucide-react";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";

import { CardWithList } from "@/types";
import { useAction } from "@/hooks/useAction";
import { useCardModal } from "@/hooks/useCardModal";
import { deleteCard } from "@/functions/delete-card";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface CardActionsProps {
  data: CardWithList;
}

export const CardActions = ({ data }: CardActionsProps) => {
  const params = useParams();
  const cardModal = useCardModal();

  const { execute, isLoading } = useAction(deleteCard, {
    onSuccess: (data) => {
      toast.success(`Card "${data.title}" deleted`);
      cardModal.onClose();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onDelete = () => {
    const boardId = params.boardId as string;

    execute({ id: data.id, boardId });
  };

  return (
    <div className="space-y-2 mt-2">
      <p className="text-xs font-semibold">Actions</p>
      <Button
        variant="gray"
        className="w-full justify-start"
        size="inline"
        onClick={onDelete}
        disabled={isLoading}
      >
        <Trash /> Delete this card
      </Button>
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
