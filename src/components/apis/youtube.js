import axios from "axios";

const KEY = "AIzaSyDe9j2GJhVopFGPSKq-LcpAXU9Y4HfluAk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 20,
    key: KEY,
  },
});
