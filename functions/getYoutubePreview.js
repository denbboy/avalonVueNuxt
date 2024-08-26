export const getYoutubePreview = () => {
  "use strict";

  var video, results;

  var getThumb = function (url, size) {
    if (url === null) {
      return "";
    }
    size = size === null ? "big" : size;
    results = url.match("[\\?&]v=([^&#]*)");
    video = results === null ? url : results[1];

    if (size === "small") {
      return "https://img.youtube.com/vi/" + video + "/2.jpg";
    }
    return "https://img.youtube.com/vi/" + video + "/0.jpg";
  };  

  return {
    thumb: getThumb,
  };
};
