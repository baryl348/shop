import React from "react";
import style from "./style/index.module.scss";

export const NavigationBar = () => {
  return (
    <div className={style.container}>
      <div>
        <i class="fas fa-democrat"></i>
      </div>
      <div>
        <i class="fas fa-palette"></i>
      </div>
      <div>
        <i class="fas fa-dice"></i>
      </div>
      <div>
        <i class="fas fa-gem"></i>
      </div>
      <div>
        <i class="fas fa-ellipsis-v"></i>
      </div>
    </div>
  );
};
