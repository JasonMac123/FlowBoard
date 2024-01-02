"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/prisma/db";
import { createAction } from "@/lib/create-action";
import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { createAuditLog } from "@/lib/create-audit-log";

import { InputType, ReturnType } from "./types";
import { DeleteList } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { id, boardId } = data;

  let list;

  try {
    list = await db.list.delete({
      where: {
        id,
        boardId,
        board: {
          orgId,
        },
      },
    });

    await createAuditLog({
      entityId: list.id,
      entityTitle: list.title,
      entityType: ENTITY_TYPE.BOARD,
      action: ACTION.UPDATE,
    });
  } catch (error) {
    return {
      error: "Failed to delete",
    };
  }
  revalidatePath(`/board/${boardId}`);
  return { data: list };
};

export const deleteList = createAction(DeleteList, handler);
