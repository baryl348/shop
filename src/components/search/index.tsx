import React from "react";
import { Field, reduxForm } from "redux-form";
import style from "./style/index.module.scss";


const Search: React.FC = () => {
  return (
    <div className={style.app}>
      <Field component="input" name="search" />
      <Field component="select" name="category">
        <option />
        <option></option>
      </Field>
      <button> <i className="fas fa-search"></i></button>
    </div>
  );
};

export default reduxForm({ form: "Search" })(Search);
