import React from "react";
import style from "./style/index.module.scss";

export const NavigationBar:React.FC = () => {
  return (
    <div className={style.container}>
      <div>
        <i className="fas fa-democrat"></i>
      </div>
      <div>
        <i className="fas fa-palette"></i>
      </div>
      <div>
        <i className="fas fa-dice"></i>
      </div>
      <div>
        <i className="fas fa-gem"></i>
      </div>
      <div>
        <i className="fas fa-ellipsis-v"></i>
      </div>
    </div>
  );
};
