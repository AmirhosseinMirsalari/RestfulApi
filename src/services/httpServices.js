import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

const API = axios.create({
  baseURL:"http://localhost:3001",
    // process.env.NODE_ENV === "development" ? "http://localhost:3001/api" : "https://domain.com/api",
  withCredentials: true, // HttpOnly Cookie
});

// interceptors
API.interceptors.request.use(
  (request) => {
    // console.log(request);
    return request;
  },
  (error) => {
    // console.log(error);
    return Promise.reject();
  }
);

API.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response;
  },
  (error) => {
    // console.log(error);
    return Promise.reject();
  }
);

// http

export const http = {
  get: API.get,
  post: API.post,
  put: API.put,
  delete: API.delete,
};

// get
export function getComments() {
  return http.get("/comments");
}

// get one
export function getOneComments(id) {
  return http.get(`/comments/${id}`);
}

// post
export function postComments(data, token) {
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return http.post("/comments", data, header);
}

// put
export function putComments(id, data) {
  return http.put(`/comments/${id}`, data);
}

// delete
export function deleteComments(id) {
  return http.delete(`/comments/${id}`);
}
