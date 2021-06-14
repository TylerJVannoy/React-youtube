import axios from "axios";

const KEY = "AIzaSyDr4v7Mwku1jtwCSLAOYyqbiKnWmQ_gyb4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 20,
    key: KEY,
  },
});
