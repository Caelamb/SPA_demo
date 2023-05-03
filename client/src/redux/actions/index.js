import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_BY_NAME = "GET_BY_NAME";

export const getUsers = () => {
  return async (dispatch) => {
    const response = (
      await axios.get("https://jsonplaceholder.typicode.com/users")
    ).data;
    return dispatch({
      type: GET_USERS,
      payload: response,
    });
  };
};

export const getByName = (name) => {
  return async (dispatch) => {
    const response = (
      await axios.get(`http://localhost:3001/users/?name=${name}`)
    ).data;
    return dispatch({
      type: GET_BY_NAME,
      payload: response,
    });
  };
};
