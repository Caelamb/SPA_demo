import axios from "axios";

export const GET_USERS = "GET_USERS";

export const getUsers = () => {
    return async (dispatch) => {
        const response = (await axios.get("https://jsonplaceholder.typicode.com/users")).data;
        return dispatch({
            type: "GET_USERS",
            payload: response
        })
    }
};