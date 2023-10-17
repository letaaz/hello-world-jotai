import { atom } from "jotai";

// COUNT :
export const countAtom = atom(0);

// TASK :
export type TaskAtom = {
  id: string;
  label: string;
  isComplete: boolean;
};

export const taskAtom = atom<TaskAtom>({} as TaskAtom);
export const taskListAtom = atom<TaskAtom[]>([]);
