import { Medal } from "lucide-react";

export default function Home() {
  return (
    <div className="h-full bg-slate-100">
      <main className="pt-40 pb-20 bg-slate-100">
        <div className="flex items-center justify-center flex-col">
          <div className="flex items-center justify-center flex-col">
            <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
              <Medal className="h-6 w-6 mr-2" />
              Best task management service!
            </div>
          </div>
          <h1 className="text-3xl md:text-6xl text-center text-neutral-800">
            FlowBoard manages your tasks efficiently
          </h1>
          <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 mt-4 rounded-md pb-4 w-fit">
            Work efficiently
          </div>
        </div>
        <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
          Collaborate, manage projects, and increase your productivity!
          Accomplish it with FlowBoard
        </div>
      </main>
    </div>
  );
}
