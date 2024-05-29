import axios from "axios";

const backendApi = axios.create({
  baseURL: "https://sports-activities-be.onrender.com/api",
});

export const fetchUsers = () => {
  return backendApi.get('/users').then((res) => {
    return res.data.users;
  });
};

export const fetchEvents = () => {
  return backendApi.get('/events').then((res) => {
    return res.data.events;
  });
};