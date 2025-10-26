import { createContext, useReducer, useContext, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { authReducer, initialAuthState } from "../reducer/authReducer";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  const apiUrl = import.meta.env.VITE_API_URL;

  const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: { "Content-Type": "application/json" },
  });


  const login = async (email, password) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const { data } = await axiosInstance.post("/user/login", { email, password });
    
      if (data) {

        Cookies.set("token", data.payload.accessToken, { expires: 7, secure: true });
        Cookies.set("user", JSON.stringify(data.payload.user), { expires: 7 });

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { user: data.payload.user, token: data.payload.accessToken },
        });
        return true;
      } else {
        throw new Error(data.message || "Invalid credentials");
      }
    } catch (error) {
      const message =
         error.message || "Login failed";
      dispatch({ type: "LOGIN_FAILURE", payload: message });
      return false;
    }
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    const token = Cookies.get("token");
    const user = Cookies.get("user");
    if (token) {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { token , user},
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
