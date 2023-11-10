const ytApikey = process.env.REACT_APP_YTAPIKEY;
export const ytLink = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${ytApikey}`;

export const ytSearchLink =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const LIVE_CHAT_COUNT = 200;
