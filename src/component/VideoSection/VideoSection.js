import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Video from "../Video/Video";
import "./VideoSection.css";
import InfiniteScroll from "react-infinite-scroll-component";
function VideoSection() {
  //https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=programming&key={{API_KEY

  const [pageToken, setPageToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [totalResult, setTotalResult] = useState([]);
  const [data, setData] = useState();
  let value;
  let flag = 0;
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let url =
      "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&pageToken=" +
      pageToken +
      "&maxResults=50&q=programming&key=" +
      process.env.REACT_APP_YT_API_KEY;
    console.log(url);
    let youtubeData = await fetch(url);
    let parsedData = await youtubeData.json();

    if (pageToken === "") {
      value = parsedData.items;
      flag++;
    } else {
      value = parsedData.items.concat(data);
    }
    console.log(value);
    setPageToken(parsedData.nextPageToken);
    setData(value);
    setLoading(false);
    setTotalResult(parsedData.pageInfo.totalResults);
  }
  async function fetchMoreData() {
    getData();
  }
  console.log(totalResult);
  return (
    <div className="videosection">
      {loading ? (
        <div> loading....</div>
      ) : (
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={totalResult !== data.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="videosection__inner">
            {data.map((elemant) => {
              return (
                <Video
                  key={elemant.etag}
                  title={elemant.snippet.title}
                  views=" 707.7M views"
                  timestamp={elemant.snippet.publishedAt}
                  channelImage={elemant.snippet.thumbnails.default.url}
                  channel={elemant.snippet.channelTitle}
                  image={elemant.snippet.thumbnails.default.url}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}

export default VideoSection;
