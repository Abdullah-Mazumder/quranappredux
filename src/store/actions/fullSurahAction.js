import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../utils/firebaseApp";
import {
  FULL_SURAH_GET_SUCCESS,
  SET_FULL_SURAH_LOADING,
} from "../constants/constant";

export const fullSurahGet = (currentSurahNumber) => (dispatch) => {
  const storageRef = ref(storage, `allSurah/${currentSurahNumber}.json`);
  dispatch({ type: SET_FULL_SURAH_LOADING });
  getDownloadURL(storageRef).then((url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: FULL_SURAH_GET_SUCCESS, payload: data });
      });
  });
};
