"use client";

import { ReactNode, Fragment } from "react";

import { useAtomValue } from "jotai";
import { loadingAtom } from "@/state/atom/loading";

import Background from "./_components/Background";
import Loading from "./_components/Loading";

export default function Template({ children }: { children: ReactNode }) {
  const { isStarted } = useAtomValue(loadingAtom);

  if (!isStarted) {
    return (
      <Fragment>
        <Loading />
        <Background />
      </Fragment>
    );
  }

  return (
    <Fragment>
      {children}
      <Background />
    </Fragment>
  );
}
