import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../utils/firebaseApp";
import { GET_TAFSIR_SUCCESS, SET_TAFSIR_LOADING } from "../constants/constant";

export const getTafsir = (surahNumber, ayahNumber) => (dispatch) => {
  const storageRef = ref(
    storage,
    `tafsir/${surahNumber}/[${surahNumber}-${ayahNumber}].json`
  );
  dispatch({ type: SET_TAFSIR_LOADING });
  getDownloadURL(storageRef).then((url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_TAFSIR_SUCCESS,
          payload: `${data[`${surahNumber}:${ayahNumber}`]}`,
        });
      });
  });
};
