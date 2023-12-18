"use client";

import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import toast from "react-hot-toast";

import { useAction } from "@/hooks/useAction";
import { updateListOrder } from "@/functions/update-list-order/";

import { ListWithCards } from "@/types";
import { ListForm } from "../form/list-form";
import { ListItem } from "./ListItem";

interface ListContainerProps {
  boardId: string;
  data: ListWithCards[];
}

function reOrder<T>(list: T[], startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}
export const ListContainer = ({ boardId, data }: ListContainerProps) => {
  const [orderedData, setOrderedData] = useState(data);

  const { execute: executeUpdateListOrder } = useAction(updateListOrder, {
    onSuccess: () => {
      toast.success("Moved list");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  const onDragEnd = (result: any) => {
    const { destination, source, type } = result;

    if (!destination) {
      return;
    }

    // dropped in same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // User moves list
    if (type === "list") {
      const items = reOrder(orderedData, source.index, destination.index).map(
        (item, index) => ({ ...item, order: index })
      );

      setOrderedData(items);
      executeUpdateListOrder({ items, boardId });
    }

    if (type === "card") {
      let newOrderedData = [...orderedData];

      const sourceList = newOrderedData.find(
        (list) => list.id === source.droppableId
      );
      const destinationList = newOrderedData.find(
        (list) => list.id === destination.droppableId
      );

      if (!sourceList || !destinationList) {
        return;
      }

      // if cards exist on source

      if (!sourceList.cards) {
        sourceList.cards = [];
      }

      if (!destinationList.cards) {
        destinationList.cards = [];
      }

      if (source.droppableId === destination.droppableId) {
        const reorderedCards = reOrder(
          sourceList.cards,
          source.index,
          destination.index
        );

        reorderedCards.forEach((card, i) => {
          card.order = i;
        });

        setOrderedData(newOrderedData);
      } else {
        // Remove from source list and move to destination list
        const [movedCard] = sourceList.cards.splice(source.index, 1);
        movedCard.listId = destination.droppableId;
        destinationList.cards.splice(destination.index, 0, movedCard);

        // update card ordering
        sourceList.cards.forEach((card, i) => {
          card.order = i;
        });

        destinationList.cards.forEach((card, i) => {
          card.order = i;
        });

        setOrderedData(newOrderedData);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="lists" type="list" direction="horizontal">
        {(provided) => (
          <ol
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex gap-x-3 h-full"
          >
            {orderedData.map((list, index) => {
              return <ListItem key={list.id} index={index} data={list} />;
            })}
            {provided.placeholder}
            <ListForm />
            <div className="flex-shrink-0 w-1"></div>
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  );
};
