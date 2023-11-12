"use client";

import environments from "@/data/environments";

import { Fragment, useEffect, useRef, useState } from "react";

import Image from "next/image";

import { motion, useInView } from "framer-motion";

import { useAtom } from "jotai";
import { introAtom } from "@/state/atom/intro";

import ScrollContainer from "@/components/containers/ScrollContainer";
import ScrollDown from "@/components/arrows/ScrollDown";

import styles from "./page.module.scss";

export default function Home() {
  const [introValue, setIntroValue] = useAtom(introAtom);

  const [isCompleted, setIsCompleted] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

  const { isStarted } = introValue;

  const onStartClick = () => {
    setIntroValue({
      isStarted: true,
    });
  };

  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const title = "JG's Next.js Boilerplate";

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  const handleAnimationComplete = (animation: string | string[]) => {
    if (animation === "visible") {
      setIsCompleted(true);
    }
  };

  const defaultArrowAnimations = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const handleScrollDownLoad = (animation: string | string[]) => {
    if (animation === "visible") {
      setIsScrollable(true);
    }
  };

  useEffect(() => {
    const body = document.getElementById("body");
    if (isScrollable) {
      if (body) {
        body.classList.add("scroll");
      }
    }
  }, [isScrollable]);

  return (
    <Fragment>
      {!isStarted && (
        <div className="relative z-10 flex items-center justify-center w-full h-full min-h-screen">
          <div className="w-full h-full mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <button className={styles.button} onClick={onStartClick} type="button">
                start
              </button>
            </div>
          </div>
        </div>
      )}
      <ScrollContainer>
        <section>
          <article className="w-full h-full">
            <div className="w-full h-screen">
              <div className="w-full h-full mx-auto max-w-8xl">
                <div className="relative flex flex-col items-center justify-center w-full h-full">
                  <motion.h1 className="sr-only">{title}</motion.h1>
                  <motion.div
                    className="mb-6 text-2xl font-medium tracking-wider text-center"
                    initial="hidden"
                    animate={isStarted ? "visible" : "hidden"}
                    transition={{ staggerChildren: 0.1 }}
                    onAnimationComplete={handleAnimationComplete}
                    aria-hidden
                  >
                    {title.split("").map((char, i) =>
                      char === " " ? (
                        <Fragment key={`${char}_${i}`}>&nbsp;</Fragment>
                      ) : (
                        <motion.span className="inline-block" key={`${char}_${i}`} variants={defaultAnimations}>
                          {char}
                        </motion.span>
                      )
                    )}
                  </motion.div>
                  <motion.div
                    className="absolute bottom-24"
                    initial="hidden"
                    animate={isCompleted ? "visible" : "hidden"}
                    transition={{ delayChildren: 0.25 }}
                    onAnimationComplete={handleScrollDownLoad}
                  >
                    <motion.div variants={defaultArrowAnimations}>
                      <ScrollDown />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </article>
          <article className="w-full h-full">
            <div className="w-full h-screen">
              <div className="w-full py-12 mx-auto max-w-8xl h-3/4">
                <div className="w-full h-full">
                  <div className="text-xl text-center mb-14 text-neutral-300">
                    <p>Boilerplate for front-end development. The following environments is configured.</p>
                  </div>
                  <motion.div
                    className="grid w-full h-full grid-cols-3 grid-rows-3 gap-6"
                    ref={ref}
                    initial="hidden"
                    // whileInView="visible"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ staggerChildren: 0.25 }}
                  >
                    {environments.map((env, i) => (
                      <motion.div
                        className="flex flex-col items-center justify-center gap-4 overflow-hidden"
                        key={`${env}_${i}`}
                        variants={defaultAnimations}
                        transition={{ duration: 1.25 }}
                      >
                        <div className="flex items-center justify-center w-16 h-16 rounded-md bg-primary">
                          <Image src={env.imgSrc} alt={env.imgAlt} width={36} height={36} />
                        </div>
                        <div className="text-xl">
                          <p>{env.key}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </ScrollContainer>
    </Fragment>
  );
}
