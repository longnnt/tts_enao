"use client";
import { Button, ButtonProps, Checkbox, CheckboxProps, Flex } from "antd";
import { LIST_ITEM } from "../constant";
import ModalConfirm from "./Modal";
import useListTodoStore from "../store";

export default function ListItem({ listItem }: { listItem: LIST_ITEM }) {
  const { id, isChecked, value, isCompleted } = listItem;
  const setStatusModal = useListTodoStore((state) => state?.setStatusModal);

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(e, id);
  };

  const onHandleDelete: ButtonProps["onClick"] = () => {
    setStatusModal(true, id);
    // setStatusModal(true);
  };
  return (
    <Flex
      className={`gap-[10px] items-center hover:bg-gray-100 border-b-[1px] p-[8px] ${
        isCompleted ? "line-through" : "no-underline"
      }`}
    >
      <div className="flex-1">{value}</div>
      <Button danger type="primary" onClick={onHandleDelete}>
        Delete
      </Button>
      {/* <Button
        type="default"
        className="bg-lime-200 hover:bg-lime-300 hover:text-black hover:border-transparent"
      >
        Edit
      </Button> */}
      <ModalConfirm />
    </Flex>
  );
}
