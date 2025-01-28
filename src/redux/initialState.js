import { defaultTitle, defaultStyles } from "../constants";
import { storage } from "../core/utils";

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  currentText: "",
  currentStyles: defaultStyles ,
  stylesState: {},
};

export const initialState = storage("excel-state")
  ? storage("excel-state")
  : defaultState;
