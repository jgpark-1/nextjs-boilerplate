"use client";

import { Fragment, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import clsx from "clsx";

import Background from "./Background";

import styles from './page.module.scss'

export default function Home() {
  const [isTriggered, setIsTriggered] = useState(false);

  const onStartClick = () => {
    setIsTriggered(true);
  };

  return (
    <Fragment>
      <section className="w-full h-full">
        <article className="w-full h-full">
          <div className="w-full h-full">
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <div className="w-full h-full mx-auto max-w-7xl">
                <div className="flex items-center justify-center w-full h-full">
                  {!isTriggered && (
                    <button className={styles.button} onClick={onStartClick} type="button">
                      start
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <Background isTriggered={isTriggered} />
    </Fragment>
  );
}
