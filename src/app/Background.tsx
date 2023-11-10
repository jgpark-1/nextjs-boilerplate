"use client";

import { useEffect, useState } from "react";

import ReactPlayer from "react-player";

import styles from "./Background.module.scss";

type Props = {
  isTriggered: boolean;
};

export default function Background({ isTriggered }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [playbackRate, setPlaybackRate] = useState(1);

  useEffect(() => {
    if (isTriggered) {
      setPlaybackRate(5);
    }

    const reset = setTimeout(() => {
      setPlaybackRate(1);
    }, 1500);

    return function cleaning() {
      if (isTriggered) {
        reset;
      }

      if (!isTriggered) {
        clearTimeout(reset);
      }
    };
  }, [isTriggered]);

  if (isMounted) {
    return (
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className={styles.videoWrapper}>
            <ReactPlayer
              url={["/intro/space.webp", "/intro/space.mp4"]}
              width="100%"
              height="100%"
              playing
              muted
              loop
              playsinline
              playbackRate={playbackRate}
              style={{ backgroundImage: "url(/intro/space.png)" }}
            />
          </div>
        </div>
      </div>
    );
  }

  return <div className="absolute inset-0 w-full h-full" style={{ backgroundImage: "url(/intro/space.png)" }} />;
}
