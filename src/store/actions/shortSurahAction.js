import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../utils/firebaseApp";

import {
  SET_SHORT_SURAH_LOADING,
  SHORT_SURAH_LIST_GET_SUCCESS,
} from "../constants/constant";

export const getShortSurahList = () => (dispatch) => {
  const storageRef = ref(storage, "allSurah.json");
  dispatch({ type: SET_SHORT_SURAH_LOADING });
  getDownloadURL(storageRef).then((url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: SHORT_SURAH_LIST_GET_SUCCESS,
          payload: data,
        });
      });
  });
};
