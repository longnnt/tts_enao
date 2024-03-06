"use client";
import { Modal, message } from "antd";
import useListTodoStore from "../store";
import { useShallow } from "zustand/react/shallow";

export default function ModalConfirm() {
  const { setStatusModal, removeTodoAction, openModalState } = useListTodoStore(
    useShallow((state) => ({
      setStatusModal: state?.setStatusModal,
      removeTodoAction: state?.removeTodo,
      openModalState: state?.app_store?.openModal,
    }))
  );

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
