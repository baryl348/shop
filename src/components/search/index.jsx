import React from "react";
import { Field, reduxForm } from "redux-form";
import style from "./style/index.module.scss";

const Search = () => {
  return (
    <div className={style.app}>
      <Field component="input" name="search" />
      <Field component="select" name="category">
        <option />
        <option></option>
      </Field>
      <Field component="button">
        <i class="fas fa-search"></i>
      </Field>
    </div>
  );
};

export default reduxForm({ form: "Search" })(Search);
