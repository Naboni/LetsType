import { setTimerId, timerDecrement } from "store/action";
import { store } from "store/store";

export const startTimer = () => {
  const { dispatch } = store;
  const timerId = setInterval(() => {
    dispatch(timerDecrement());
  }, 1000);
  dispatch(setTimerId(timerId));
};
