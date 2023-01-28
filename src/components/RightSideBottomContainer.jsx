/* eslint-disable eqeqeq */
import { useEffect, useRef } from "react";
import Ayah from "./Ayah";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_TO_READ_LATER } from "../store/constants/constant";

const RightSideBottomContainer = ({ handleTafsirModal }) => {
  const {
    lastReadedAyah,
    arabicTextSize,
    banglaTextSize,
    englishTextSize,
    enableTazweed,
  } = useSelector((state) => state.nobleQuran);
  const { fullSurah } = useSelector((state) => state.fullSurahDetails);
  const { surah } = fullSurah;
  const ayahRef = useRef();
  const dispatch = useDispatch();
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );

  const saveToReadLater = (surah, ayah) => {
    if (!localStorage.getItem("holyQuran")) {
      localStorage.setItem("holyQuran", JSON.stringify({}));
    }
    const holyQuranLocal = JSON.parse(localStorage.getItem("holyQuran"));
    if (
      holyQuranLocal.readLater &&
      holyQuranLocal.readLater[surah] &&
      holyQuranLocal.readLater &&
      holyQuranLocal.readLater[surah] == ayah
    ) {
      delete holyQuranLocal.readLater[surah];
      holyQuranLocal.lastRead =
        Object.keys(holyQuranLocal.readLater)[
          Object.keys(holyQuranLocal.readLater).length - 1
        ] || null;
    } else {
      holyQuranLocal.readLater = { ...holyQuranLocal.readLater, [surah]: ayah };
      holyQuranLocal.lastRead = surah;
    }
    localStorage.setItem("holyQuran", JSON.stringify(holyQuranLocal));
    dispatch({
      type: SAVE_TO_READ_LATER,
      payload: { ...holyQuranLocal.readLater },
    });
  };

  useEffect(() => {
    if (ayahRef.current) {
      ayahRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <div
        className={`h-full ${enableTazweed ? "colorTxt" : ""} ${
          surah.verses.length > 15 ? "" : "space-y-2 overflow-y-auto"
        }`}
      >
        {surah.verses.length > 15 ? (
          <AutoSizer>
            {({ width, height }) => (
              <List
                width={width}
                height={height}
                scrollToAlignment="start"
                rowHeight={cache.current.rowHeight}
                deferredMeasurementCache={cache.current}
                rowCount={surah.verses.length}
                data={surah.verses}
                scrollToIndex={lastReadedAyah - 1}
                rowRenderer={({ key, index, style, parent }) => {
                  const ayah = surah.verses[index];
                  return (
                    <CellMeasurer
                      key={key}
                      cache={cache.current}
                      parent={parent}
                      columnIndex={0}
                      rowIndex={index}
                    >
                      <div style={{ ...style, paddingBottom: "7px" }}>
                        <Ayah
                          ayah={ayah}
                          surahNumber={surah.id}
                          lastReadedAyah={lastReadedAyah}
                          ayahRef={ayahRef}
                          arabicTextSize={arabicTextSize}
                          banglaTextSize={banglaTextSize}
                          englishTextSize={englishTextSize}
                          handleTafsirModal={handleTafsirModal}
                          saveToReadLater={saveToReadLater}
                        />
                      </div>
                    </CellMeasurer>
                  );
                }}
              />
            )}
          </AutoSizer>
        ) : (
          <>
            {surah.verses.map((vers) => (
              <Ayah
                key={vers.id}
                ayah={vers}
                surahNumber={surah.id}
                lastReadedAyah={lastReadedAyah}
                ayahRef={ayahRef}
                arabicTextSize={arabicTextSize}
                banglaTextSize={banglaTextSize}
                englishTextSize={englishTextSize}
                handleTafsirModal={handleTafsirModal}
                saveToReadLater={saveToReadLater}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default RightSideBottomContainer;
