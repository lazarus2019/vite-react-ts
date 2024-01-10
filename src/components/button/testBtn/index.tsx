import classNames from "./styles.module.scss";

import HatIcon from "@/assets/hat.svg?react";

export const TestButton = () => {
  return (
    <div className={classNames.btn}>
      Button
      <HatIcon />
    </div>
  );
};
