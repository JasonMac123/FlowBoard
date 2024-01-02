"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/prisma/db";
import { createAction } from "@/lib/create-action";
import { createAuditLog } from "@/lib/create-audit-log";
import { ACTION, ENTITY_TYPE } from "@prisma/client";

import { InputType, ReturnType } from "./types";
import { UpdateCard } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { id, boardId, ...values } = data;

  let card;

  try {
    card = await db.card.update({
      where: {
        id,
        list: {
          board: {
            orgId,
          },
        },
      },
      data: {
        ...values,
      },
    });

    await createAuditLog({
      entityId: card.id,
      entityTitle: card.title,
      entityType: ENTITY_TYPE.CARD,
      action: ACTION.UPDATE,
    });
  } catch (error) {
    return {
      error: "Failed to Update",
    };
  }
  revalidatePath(`/board/${boardId}`);
  return { data: card };
};

export const updateCard = createAction(UpdateCard, handler);
