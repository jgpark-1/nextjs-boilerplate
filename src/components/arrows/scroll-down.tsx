import clsx from "clsx";

import styles from "./scroll-down.module.scss";

export default function ScrollDown() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.circle1} />
      <div className={clsx(styles.circle1, styles.circle2)} />
      <div className={styles.arrow}>
        <div className={styles.arrowLine} />
        <div className={styles.arrowTipWrapper}>
          <div className={clsx(styles.arrowTip, styles.left)} />
          <div className={clsx(styles.arrowTip, styles.right)} />
        </div>
      </div>
    </div>
  );
}
