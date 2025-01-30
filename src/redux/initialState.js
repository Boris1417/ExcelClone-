import { defaultTitle, defaultStyles } from "../constants";
import { clone } from "../core/utils";

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  currentText: "",
  currentStyles: defaultStyles,
  stylesState: {},
};

const normalize = (state) => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: "",
});

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState)
}
