import url from 'url'

export const getYoutubePreview = () => {
  "use strict";

  var video, results;

  var getThumb = function (urlVideo, size) {
    if (urlVideo === null) {
      return "";
    }
    size = size === null ? "big" : size;
    const params = url.parse(urlVideo, true);
    
    results = params?.query?.v ?? params?.pathname?.replace('/embed', '')?.replace('/', '')

    if (size === "small") {
      return "https://img.youtube.com/vi/" + results + "/2.jpg";
    }
    return "https://img.youtube.com/vi/" + results + "/0.jpg";
  };  

  return {
    thumb: getThumb,
  };
};
