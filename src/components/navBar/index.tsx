import React from "react";
import BoardGames from "./boardGames";
import Decoration from "./decoration";
import Games from "./games";
import Other from "./other";
import Picture from "./picture";
import style from "./style/index.module.scss";


export const NavigationBar:React.FC = () => {
  return (
   <div> 
    <div className={style.container}>
      <div>
       <Games/>
      </div>
      <div>
       <Picture />
      </div>
      <div>
        <BoardGames/>
      </div>
      <div>
       <Decoration/>
      </div>
      <div>
        <Other/>
      </div>
    </div></div>
  );
};
