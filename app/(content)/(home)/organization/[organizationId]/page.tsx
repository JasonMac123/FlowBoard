import { db } from "@/prisma/db";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();

  return <div></div>;
};

export default OrganizationIdPage;
