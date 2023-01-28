import {
  SET_SHORT_SURAH_LOADING,
  SHORT_SURAH_LIST_GET_SUCCESS,
} from "../constants/constant";

export const getShortSurahList = () => (dispatch) => {
  dispatch({ type: SET_SHORT_SURAH_LOADING });
  setTimeout(() => {
    import("../../data/allSurah").then((data) => {
      dispatch({
        type: SHORT_SURAH_LIST_GET_SUCCESS,
        payload: data.allSurahList,
      });
    });
  }, 1000);
};
