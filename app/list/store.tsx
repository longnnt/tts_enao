import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { APP_TODO_STATE } from "./constant";

const useListTodoStore = create<APP_TODO_STATE>()(
  devtools(
    persist(
      (set) => ({
        app_store: {
          listTodo: [],
          openModal: {
            status: false,
            id: 0,
          },
          isOkConfirm: false,
        },
        addTodo: (payload) =>
          set((state) => {
            return {
              app_store: {
                ...state?.app_store,
                listTodo: [...state?.app_store?.listTodo, payload],
              },
            };
          }),

        removeTodo: (id) =>
          set((state) => ({
            app_store: {
              ...state.app_store,
              listTodo: [...state.app_store.listTodo].filter(
                (item) => item?.id !== id
              ),
            },
          })),

        setStatusModal: (payload, id) =>
          set((state) => ({
            app_store: {
              ...state?.app_store,
              openModal: {
                status: payload,
                id,
              },
            },
          })),

        setIsConfirm: (payload) =>
          set((state) => ({
            app_store: {
              ...state?.app_store,
              isOkConfirm: payload,
            },
          })),
      }),
      { name: "app_store" }
    )
  )
);

export default useListTodoStore;
