"use client";

import { ReactNode, Fragment } from "react";

import { useAtom } from "jotai";

import { introAtom } from "@/state/atom/intro";

import Background from "./Background";

export default function Template({ children }: { children: ReactNode }) {
  const [introValue] = useAtom(introAtom);
  const { isStarted } = introValue;

  return (
    <Fragment>
      {children}
      <Background isTriggered={isStarted} />
    </Fragment>
  );
}
