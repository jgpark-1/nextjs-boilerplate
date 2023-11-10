"use client";

import environments from "@/data/environments";

import { Fragment, useEffect, useRef, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { motion, useInView } from "framer-motion";

import clsx from "clsx";

import Background from "./Background";

import styles from "./page.module.scss";

export default function Home() {
  const [isTriggered, setIsTriggered] = useState(false);

  const onStartClick = () => {
    setIsTriggered(true);
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
  const isInView = useInView(ref, { amount: 0.2, once: true });

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <Fragment>
      <div className={styles.container}>
        <section className="w-full h-full">
          {!isTriggered && (
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <div className="w-full h-full mx-auto max-w-7xl">
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <button className={styles.button} onClick={onStartClick} type="button">
                    start
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className={clsx("w-full", "h-full", { ["hidden"]: !isTriggered, ["block"]: isTriggered })}>
            <article className="w-full, h-full">
              <div className="relative z-10 flex items-center justify-center w-full h-full">
                <div className="w-full h-full mx-auto max-w-7xl">
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <Fragment>
                      <motion.h1 className="sr-only">{title}</motion.h1>
                      <motion.div
                        className="mb-6 text-2xl font-medium tracking-wider text-center"
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.1, delayChildren: 2.5 }}
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
                    </Fragment>
                  </div>
                </div>
              </div>
            </article>
            <article className="w-full h-full">
              <div className="w-full mx-auto max-w-8xl h-3/4">
                <div className="w-full h-full">
                  <motion.div className="text-xl text-center mb-14 text-neutral-300">
                    <p>Boilerplate for front-end development. The following environments is configured.</p>
                  </motion.div>
                  <motion.div
                    className="grid w-full h-full grid-cols-3 grid-rows-3 gap-6"
                    ref={ref}
                    initial="hidden"
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
            </article>
          </div>
        </section>
      </div>
      <Background isTriggered={isTriggered} />
    </Fragment>
  );
}
