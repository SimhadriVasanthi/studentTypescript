import api from "./baseUrl";
import { dashboardEndPoint, userProfileEndPoint } from "./endpoints";
import { AxiosError } from "axios";

const token = localStorage.getItem("_auth");
const getHeaders = () => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return headers;
};

const headers = getHeaders();

const getProfile = async (setError: (error: string) => void) => {
  try {
    const response = await api
      .get(userProfileEndPoint(), headers)
      .then((res) => res?.data);
    return response;
  } catch (err: any) {
    if (err && err instanceof AxiosError) {
      setError(err.response?.data.message);
    } else if (err && err instanceof Error) setError(err.message);
    return err.response;
  }
};
const getDashboard = async (setError: (error: string) => void) => {
  try {
    const response = await api
      .get(dashboardEndPoint(), headers)
      .then((res) => res?.data);
    return response;
  } catch (err: any) {
    if (err && err instanceof AxiosError) {
      setError(err.response?.data.message);
    } else if (err && err instanceof Error) setError(err.message);
    return err.response;
  }
};

export { getProfile, getDashboard };
