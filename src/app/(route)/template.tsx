"use client";

import { ReactNode, Fragment } from "react";

import Background from "./_components/Background";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      {children}
      <Background />
    </Fragment>
  )
}
