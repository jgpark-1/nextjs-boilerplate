"use client";

import { Fragment, ReactNode, useEffect, useRef, useState } from "react";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import useWindowSize from "@/hooks/useWindowSize";

import styles from "./ScrollContainer.module.scss";

export default function ScrollContainer({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { height } = useWindowSize();
  const [contentHeight, setContentHeight] = useState(height);

  useEffect(() => {
    if (containerRef.current) {
      setContentHeight(containerRef.current.scrollHeight);
    }
  }, [children, containerRef]);

  const { scrollY } = useScroll();

  const smoothProgress = useSpring(scrollY, { mass: 0.1 });

  const y = useTransform(smoothProgress, (value) => {
    return -value;
  });

  return (
    <Fragment>
      <div style={{ height: contentHeight }} />
      <motion.div className={styles.wrapper} style={{ y }} ref={containerRef}>
        {children}
      </motion.div>
    </Fragment>
  );
}
