"use client";
import { Button, Flex, Input, InputProps } from "antd";
import { useState } from "react";
import useListTodoStore from "../store";

export default function FormInput() {
  const [input, setInput] = useState("");
  const { addTodo } = useListTodoStore((state) => state);

  const onAddData = () => {
    if (input?.trim()) {
      addTodo({
        id: Math.random(),
        value: input.trim(),
        isChecked: false,
        isCompleted: false,
      });
    }
    setInput("");
  };

  const onChange: InputProps["onChange"] = (e) => {
    const valueInput = e?.target?.value;
    setInput(valueInput);
  };

  return (
    <Flex className="mt-[20px]">
      <Input onChange={onChange} allowClear={true} value={input} />
      <Button type="primary" onClick={onAddData}>
        Add Todo
      </Button>
    </Flex>
  );
}
