import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://saltiest-hacker-news-troll-dev.herokuapp.com/api/",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("salty_token")
    }
  });
};
