import React from "react";
import style from "./style/index.module.scss";

export const Header:React.FC = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>logo</div>
      <div>
        <i className="far fa-user-circle"></i>
      </div>
      <div>
        <i className="fas fa-headset"></i>
      </div>
      <div>
        <i className="fas fa-info"></i>
      </div>
    </div>
  );
};
