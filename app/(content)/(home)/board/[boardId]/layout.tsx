const BoardIdLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { boardId: string };
}) => {
  return (
    <div>
      <main className="relative pt-28 h-full">{children}</main>
    </div>
  );
};

export default BoardIdLayout;
