import React, { useState } from "react";
import { PostContext } from "../pages/user/[id]";
import { InputType } from "../types/main";

export type PropType = {
  handleSubmit: (value: InputType) => void;
};

export default function PostCreateForm({
  handleSubmit,
}: PropType): JSX.Element {
  const { disable, setDisable } = React.useContext(PostContext);
  const [inputValue, setInputValue] = useState<InputType>({
    title: "",
    body: "",
  });

  function onClickCreateButton(): void {
    handleSubmit(inputValue);
    setDisable(true);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        onChange={(e) =>
          setInputValue({
            ...inputValue,
            title: e.target.value,
          })
        }
        type="text"
        value={inputValue.title}
      />
      <label htmlFor="body">Body</label>
      <input
        id="body"
        onChange={(e) =>
          setInputValue({
            ...inputValue,
            body: e.target.value,
          })
        }
        type="text"
        value={inputValue.body}
      />
      <button onClick={onClickCreateButton} disabled={disable}>
        Submit
      </button>
    </form>
  );
}
