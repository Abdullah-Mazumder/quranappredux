import {
  SAVE_TO_READ_LATER,
  SET_ARABIC_TEXT_SIZE,
  SET_BANGLA_TEXT_SIZE,
  SET_ENGLISH_TEXT_SIZE,
  SET_HAFEZI_FONT,
  SET_LAST_READ_AYAH,
  SET_LAST_READ_SURAH,
  SET_TAZWEED,
} from "../constants/constant";

const initialState = {
  readLater: "",
  lastReadSurah: "",
  lastReadedAyah: "",
  arabicTextSize: null,
  banglaTextSize: null,
  englishTextSize: null,
  enableTazweed: true,
  hafeziFont: true,
};

export const nobleQuranReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_TO_READ_LATER:
      return {
        ...state,
        readLater: payload,
      };

    case SET_LAST_READ_SURAH:
      return {
        ...state,
        lastReadSurah: payload,
      };

    case SET_LAST_READ_AYAH:
      return {
        ...state,
        lastReadedAyah: payload,
      };

    case SET_ARABIC_TEXT_SIZE:
      return {
        ...state,
        arabicTextSize: payload,
      };

    case SET_BANGLA_TEXT_SIZE:
      return {
        ...state,
        banglaTextSize: payload,
      };

    case SET_ENGLISH_TEXT_SIZE:
      return {
        ...state,
        englishTextSize: payload,
      };

    case SET_TAZWEED:
      return {
        ...state,
        enableTazweed: payload,
      };

    case SET_HAFEZI_FONT:
      return {
        ...state,
        hafeziFont: payload,
      };

    default:
      return state;
  }
};
