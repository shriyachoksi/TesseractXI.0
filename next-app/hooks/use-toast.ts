import * as React from "react";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000;

type ToasterToast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
};

type ToasterState = { toasts: ToasterToast[] };

const listeners: Array<(state: ToasterState) => void> = [];
let memoryState: ToasterState = { toasts: [] };

function genId() { return Math.random().toString(36).slice(2, 9); }

function addToToast(toast: ToasterToast) {
  memoryState = { toasts: [toast, ...memoryState.toasts].slice(0, TOAST_LIMIT) };
  listeners.forEach((l) => l(memoryState));
}

function dismiss(id?: string) {
  memoryState = { toasts: memoryState.toasts.filter((t) => t.id !== id) };
  listeners.forEach((l) => l(memoryState));
}

export function toast(opts: Omit<ToasterToast, "id">) {
  const id = genId();
  addToToast({ id, ...opts });
  setTimeout(() => dismiss(id), TOAST_REMOVE_DELAY);
}

export function useToast() {
  const [state, setState] = React.useState<ToasterState>(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const i = listeners.indexOf(setState);
      if (i > -1) listeners.splice(i, 1);
    };
  }, []);
  return state;
}
