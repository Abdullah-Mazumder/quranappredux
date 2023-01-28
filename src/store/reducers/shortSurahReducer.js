import {
  SET_SHORT_SURAH_LOADING,
  SHORT_SURAH_LIST_GET_SUCCESS,
} from "../constants/constant";

const initialState = {
  loading: false,
  shortSurahList: "",
};

export const shortSurahReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SHORT_SURAH_LOADING:
      return {
        loading: true,
        shortSurahList: "",
      };

    case SHORT_SURAH_LIST_GET_SUCCESS:
      return {
        loading: false,
        shortSurahList: payload,
      };
    default:
      return state;
  }
};
