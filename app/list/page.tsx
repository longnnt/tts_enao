"use client";

import { Flex } from "antd";
import FormInput from "./_component/FormInput";
import ListItem from "./_component/ListItem";
import useListTodoStore from "./store";

export default function ListTodo() {
  const listTodo = useListTodoStore((state) => state.app_store?.listTodo);

  return (
    <div className="w-[500px] my-0 mx-auto">
      <FormInput />
      <Flex className="flex-col gap-[10px] mt-[10px] ">
        {listTodo?.map((listItem) => (
          <ListItem listItem={listItem} key={listItem?.id} />
        ))}
      </Flex>
    </div>
  );
}
