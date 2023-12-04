"use server";

import { createBoard } from "@/functions/create-board";

import { useAction } from "@/hooks/useAction";
import { FormInput } from "./form/form-input";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "success");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={fieldErrors} id="title" />
      </div>
    </form>
  );
};
