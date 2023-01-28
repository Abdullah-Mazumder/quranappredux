/* eslint-disable no-unused-vars */
import RightSideBottomContainer from "./RightSideBottomContainer";
import RightSideTop from "./RightSideTop";
import RightSideTopSkeleton from "./RightSideTopSkeleton";
import RightSideBottomSkeleton from "./RightSideBottomSkeleton";
import { useState } from "react";
import { Box, Button, CircularProgress, Tooltip, Zoom } from "@mui/material";
import { useSelector } from "react-redux";

const RenderHtml = ({ htmlString }) => {
  return <span dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

const RightSideContainer = () => {
  const { loading, fullSurah } = useSelector((state) => state.fullSurahDetails);
  const { surahDetails } = fullSurah;
  const [tafsirModarIsOpen, setTafsirModalIsOpen] = useState(false);
  const [tafsir, setTafsir] = useState({
    loading: true,
    tafsir: "",
  });

  const handleTafsirModal = (surahNumber, ayahNumber) => {
    setTafsirModalIsOpen(true);
    setTafsir({
      loading: true,
      tafsir: "",
    });

    setTimeout(() => {
      import(
        `../data/tafsir/${surahNumber}/[${surahNumber}-${ayahNumber}].json`
      ).then((data) => {
        setTafsir({
          loading: false,
          tafsir: data[`${surahNumber}:${ayahNumber}`],
        });
      });
    }, 0);
  };

  return (
    <div className="mx-1 md:mx-0 h-[calc(100vh-70px)] md:w-full overflow-hidden">
      <div className="rightSideTop h-[90px]">
        {loading ? (
          <RightSideTopSkeleton />
        ) : (
          <>
            <RightSideTop surahDetails={surahDetails} />
          </>
        )}
      </div>
      <div className="h-[calc(100vh-230px)] md:h-[calc(100vh-170px)] bgColor1 rounded-lg overflow-hidden mt-2 p-2 lg:p-3">
        <div className="h-[100%] w-[inherit]">
          {loading && <RightSideBottomSkeleton />}
          {!loading && (
            <RightSideBottomContainer handleTafsirModal={handleTafsirModal} />
          )}
        </div>
      </div>

      {tafsirModarIsOpen && (
        <div
          className="modal absolute w-screen h-screen flex items-center justify-center top-0 left-0 !z-[99999]"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="dialog bgColor2 txtColor w-[280px] md:w-[500px] lg:w-[800px] min-h-[70vh] p-5 rounded-sm m-2 md:m-0">
            <div className="title divider mb-4">
              <Box component={"p"} className="text-xl mb-1 font-semibold">
                তাফসীর ইবনে কাছীর
              </Box>
            </div>
            <div className="content my-1 mb-2 !h-[60vh] !w-full overflow-y-auto">
              {tafsir.loading ? (
                <>
                  <div className="w-full h-full flex items-center justify-center">
                    <Tooltip
                      TransitionComponent={Zoom}
                      title="Loading..."
                      arrow={true}
                      placement="right"
                      classes={{
                        tooltip: "darkBgColor1",
                        tooltipArrow: "darkBgColor1",
                      }}
                    >
                      <CircularProgress
                        classes={{
                          circle: "txtColor",
                        }}
                        size="2rem"
                      />
                    </Tooltip>
                  </div>
                </>
              ) : (
                <>
                  <p className="leading-7">
                    <RenderHtml htmlString={tafsir.tafsir} />
                  </p>
                </>
              )}
            </div>
            <div className="bottom flex justify-center mt-3">
              <Button
                size="small"
                variant="contained"
                onClick={() => setTafsirModalIsOpen(false)}
                classes={{
                  root: "bgColor1 txtColor hoverBg",
                }}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSideContainer;
