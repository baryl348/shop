import React from "react";
import style from "./style/index.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>logo</div>
      <div>
        <i class="far fa-user-circle"></i>
      </div>
      <div>
        <i class="fas fa-headset"></i>
      </div>
      <div>
        <i class="fas fa-info"></i>
      </div>
    </div>
  );
};
