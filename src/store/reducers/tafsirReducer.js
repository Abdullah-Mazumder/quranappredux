import { GET_TAFSIR_SUCCESS, SET_TAFSIR_LOADING } from "../constants/constant";

const initialState = {
  loadingTafsir: true,
  tafsir: "",
};

export const tafsirReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TAFSIR_LOADING:
      return {
        loadingTafsir: true,
        tafsir: "",
      };

    case GET_TAFSIR_SUCCESS:
      return {
        loadingTafsir: false,
        tafsir: payload,
      };

    default:
      return state;
  }
};
