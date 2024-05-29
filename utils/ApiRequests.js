import axios from "axios";

const backendApi = axios.create({
  baseURL: "https://sports-activities-be.onrender.com/api",
});

export const fetchUsers = () => {
  return backendApi.get("/users").then((res) => {
    return res.data.users;
  });
};

export const fetchEvents = () => {
  return backendApi.get("/events").then((res) => {
    return res.data.events;
  });
};

export const postUser = (
  username,
  first_name,
  last_name,
  age,
  avatar_url,
  interests
) => {
  return backendApi
    .post("/users", {
      username,
      first_name,
      last_name,
      age,
      avatar_url,
      interests,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {});
};
