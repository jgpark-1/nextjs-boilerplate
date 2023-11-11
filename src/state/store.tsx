"use client"

import { ReactNode } from "react";

import { Provider, createStore } from "jotai";

import { introAtom } from "./atom/intro";

const store = createStore();
store.set(introAtom, { isStarted: false });

export const CustomProvider = ({ children }: { children: ReactNode }) => {
  return <Provider>{children}</Provider>;
};
