import axios from "axios";
const apiUrl = import.meta.env.VITE_APP_API_URL + "/api/v1";

// axios helper
const apiProcessor = async ({ method, data, url, isPrivate }) => {
  try {
    let response = await axios({
      method: method,
      url: url,
      data: data,
      headers: isPrivate
        ? {
            Authorization: localStorage.getItem("accessToken"),
          }
        : {},
    });

    return response.data;
  } catch (err) {
    return {
      status: false,
      message: err?.response?.data?.message || err.message,
    };
  }
};

// create user
export const postUser = async (obj) => {
  // let response = await axios.post(`${apiUrl}/auth`, obj);
  // return response.data;

  return apiProcessor({
    method: "post",
    url: `${apiUrl}/auth`,
    data: obj,
  });
};

// login user
export const loginUser = async (obj) => {
  // let response = await axios.post(`${apiUrl}/auth/login`, obj);
  // return response.data;

  return apiProcessor({
    method: "post",
    url: `${apiUrl}/auth/login`,
    data: obj,
  });
};

// get transaction
export const getTransation = async () => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/transactions`,
    isPrivate: true,
  });
};

// create transaction
export const createTransaction = async (obj) => {
  return apiProcessor({
    method: "post",
    url: `${apiUrl}/transactions`,
    data: obj,
    isPrivate: true,
  });
};

// update transaction
export const updateTransaction = async (obj, id) => {
  return apiProcessor({
    method: "patch",
    url: `${apiUrl}/transactions/${id}`,
    data: obj,
    isPrivate: true,
  });
};

//delete transaction
export const deleteTransaction = async (id) => {
  return apiProcessor({
    method: "delete",
    url: `${apiUrl}/transactions/${id}`,
    isPrivate: true,
  });
};

// get user detail
export const getUserDetail = async () => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/auth/user`,
    isPrivate: true,
  });
};

// get dashboard metrics
export const getDashboardMetrics = async () => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/dashboard`,
    isPrivate: true,
  });
};
