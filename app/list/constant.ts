export type LIST_ITEM = {
  id: number;
  value: string;
  isChecked: boolean;
  isCompleted: boolean;
};

export interface APP_TODO_STATE {
  app_store: {
    openModal: {
      status: boolean;
      id: number;
    };
    listTodo: LIST_ITEM[];
    isOkConfirm: boolean;
  };
  addTodo: (payload: LIST_ITEM) => void;
  removeTodo: (id: number) => void;
  setCheckTodo?: (id: number) => void;
  setCompletedTodo?: (id: number) => void;
  setStatusModal: (payload: boolean, id: number) => void;
  setIsConfirm: (payload: boolean) => void;
}
