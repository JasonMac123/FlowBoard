"use client";

import { KeyboardEventHandler, forwardRef } from "react";

interface FormTextAreaProps {
  id: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[] | undefined>;
  classname?: string;
  onBlur?: () => void;
  onClick: () => void;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement> | undefined;
  defaultValue?: string;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({
    id,
    label,
    placeholder,
    required,
    disabled,
    errors,
    onBlur,
    onClick,
    onKeyDown,
    classname,
    defaultValue,
  }) => {
    return <div></div>;
  }
);

FormTextarea.displayName = "FormTextarea";
