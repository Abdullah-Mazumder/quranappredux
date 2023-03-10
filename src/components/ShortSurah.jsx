/* eslint-disable eqeqeq */
import { Box } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { useSelector } from "react-redux";

const ShortSurah = ({
  surah,
  currentSurahNumber,
  setCurrentSurahNumber,
  toggleSidebar,
}) => {
  const { readLater } = useSelector((state) => state.nobleQuran);
  const {
    arabicName,
    banglaName,
    englishName,
    arLocation,
    enLocation,
    enTranslatedName,
    id,
    totalAyah,
  } = surah;
  return (
    <div
      className={`bgColor2 hoverBg p-2 cursor-pointer rounded-md w-full mr-1 ${
        currentSurahNumber == id ? "active" : ""
      } short-surah`}
      onClick={() => {
        setCurrentSurahNumber(id);
        toggleSidebar();
      }}
    >
      <div className="flex items-center justify-evenly md:justify-between gap-3">
        <div className="surahLogo w-[45px] h-[45px] flex items-center justify-center">
          <span className="text-sm">{id}</span>
        </div>
        <div className="w-[70%] md:w-[80%] details flex items-center justify-between">
          <div>
            <div className="name flex flex-col gap-0 text-md md:text-lg">
              <div className="my-1">
                <Box component="div" className="">
                  <span className="arabicTxt text-lg md:text-xl">
                    {arabicName}{" "}
                  </span>
                  <span className="text-sm bnTxt">( {banglaName} )</span>
                </Box>
              </div>
              <Box style={{ marginTop: "-5px" }} className="enTxt">
                <span>{enTranslatedName} </span>
                <span className="text-sm">( {englishName} )</span>
              </Box>
            </div>
            <div className="bottom flex gap-3 mt-1 text-xs md:text-sm">
              <Box component="span" className="">
                <span className="arabicTxt">{arLocation} </span>
                <span className="text-sm enTxt">( {enLocation} )</span>
              </Box>
              <Box component="span" className="enTxt">
                Ayah: {totalAyah}
              </Box>
            </div>
          </div>
          {readLater && readLater[id] && <RestoreIcon />}
        </div>
      </div>
    </div>
  );
};

export default ShortSurah;
