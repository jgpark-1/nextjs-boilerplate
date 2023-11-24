"use client";

import features from "@/data/features";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";

import Image from "next/image";

import { motion, useInView } from "framer-motion";

import { useAtomValue } from "jotai";
import { loadingAtom } from "@/state/atom/loading";

import ScrollContainer from "@/components/containers/ScrollContainer";
import ScrollDown from "@/components/arrows/ScrollDown";

import Loading from "./_components/Loading";

export default function Home() {
  const { isStarted } = useAtomValue(loadingAtom);

  const [isCompleted, setIsCompleted] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

  const defaultAnimations = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  const handleTitleAnimationComplete = (animation: string | string[]) => {
    if (animation === "visible") {
      setIsCompleted(true);
    }
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

  const title = "JG's Next.js Boilerplate";

  return (
    <Fragment>
      <ScrollContainer>
        <main>
          <section>
            <article>
              <div className="px-4 mx-auto h-screen-dvh max-w-8xl sm:px-6 md:px-8">
                <div className="relative flex flex-col items-center justify-center h-full">
                  <motion.h1 className="sr-only">{title}</motion.h1>
                  <motion.div
                    className="mb-4 text-xl font-medium tracking-wider text-center sm:text-2xl"
                    initial="hidden"
                    animate={isStarted ? "visible" : "hidden"}
                    transition={{ staggerChildren: 0.1 }}
                    onAnimationComplete={handleTitleAnimationComplete}
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
                    className="text-sm text-center text-zinc-400 mb-14 sm:text-xl"
                    initial="hidden"
                    animate={isCompleted ? "visible" : "hidden"}
                  >
                    <motion.p variants={defaultAnimations}>Start front-end development with feature-packed, Next.js boilerplate.</motion.p>
                  </motion.div>
                  <motion.div
                    className="absolute bottom-24"
                    initial="hidden"
                    animate={isCompleted ? "visible" : "hidden"}
                    transition={{ delayChildren: 0.1 }}
                    onAnimationComplete={handleScrollDownLoad}
                  >
                    <motion.div variants={defaultAnimations}>
                      <ScrollDown />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </article>
            <article>
              <div className="px-4 mx-auto sm:h-screen-dvh max-w-8xl sm:px-6 md:px-8">
                <div className="relative flex flex-col items-center justify-center h-auto sm:h-full">
                  <motion.div
                    className="grid w-full grid-cols-1 grid-rows-3 gap-x-6 gap-y-8 sm:grid-cols-3"
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ staggerChildren: 0.25 }}
                  >
                    {features.map((feature, i) => (
                      <motion.div
                        className="flex flex-col items-center justify-center gap-6 p-6 overflow-hidden"
                        key={`${feature}_${i}`}
                        variants={defaultAnimations}
                        transition={{ duration: 1.25 }}
                      >
                        <div className="flex items-center justify-center w-16 h-16 rounded-md bg-primary">
                          <Image src={feature.imgSrc} alt={feature.imgAlt} width={36} height={36} />
                        </div>
                        <div className="text-xl">
                          <p>{feature.key}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </article>
          </section>
        </main>
      </ScrollContainer>
    </Fragment>
  );
}
