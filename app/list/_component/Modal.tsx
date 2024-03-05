"use client";
import { Modal, message } from "antd";
import useListTodoStore from "../store";

export default function ModalConfirm() {
  const openModalState = useListTodoStore(
    (state) => state?.app_store.openModal
  );
  const setStatusModal = useListTodoStore((state) => state?.setStatusModal);

  const removeTodoAction = useListTodoStore((state) => state?.removeTodo);

  const handleOk = () => {
    removeTodoAction(openModalState?.id);
    message.success("Delete successfully");
    setStatusModal(false, openModalState?.id);
  };

  const handleCancel = () => {
    message.error("Delete cancel");
    setStatusModal(false, openModalState?.id);
  };

  return (
    <>
      <Modal
        title="Xác nhận xóa todo"
        open={openModalState?.status}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
