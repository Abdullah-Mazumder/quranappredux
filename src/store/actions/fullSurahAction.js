import {
  FULL_SURAH_GET_SUCCESS,
  SET_FULL_SURAH_LOADING,
} from "../constants/constant";

export const fullSurahGet = (currentSurahNumber) => (dispatch) => {
  dispatch({ type: SET_FULL_SURAH_LOADING });
  setTimeout(() => {
    import(`../../data/allSurah/${currentSurahNumber}.json`).then((data) => {
      dispatch({ type: FULL_SURAH_GET_SUCCESS, payload: data.default });
    });
  }, 500);
};
