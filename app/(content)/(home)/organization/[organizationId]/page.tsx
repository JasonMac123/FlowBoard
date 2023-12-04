import { db } from "@/prisma/db";

import { Button } from "@/components/ui/button";
import { create } from "@/app/functions/create-board";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();

  return (
    <div>
      <form action={create}>
        <input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="bborder-black border p-1"
        />
        <Button type="submit">Submit</Button>
      </form>
      <div className="space-y-2">
        {boards.map((board) => (
          <div key={board.id}>{board.title}</div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
