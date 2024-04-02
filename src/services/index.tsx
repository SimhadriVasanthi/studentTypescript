import api from "./baseUrl";
import { dashboardEndPoint, loginEndPoint, registerEndPoint, sendOTPEndPoint, userProfileEndPoint, verifyOTPEndPoint } from "./endpoints";
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

const authenticateLogin = async (values:object, setError: (error: string) => void) => {
  try {
    const response = await api.post(loginEndPoint(), values, {
      withCredentials: true,
    });
    return response;
  } catch (err:any) {
    if (err && err instanceof AxiosError) {
      setError(err.response?.data.message);
    } else if (err && err instanceof Error) setError(err.message);
    return err.response;
  }
};
const registerSignin = async (values:object, setError: (error: string) => void) => {
  function sanitizeValues(data:any) {
    return { firstName: data.firstName,lastName:data.lastName, email: data.email, password: data.password };
  }
  try {
    const response = await api.post(
      registerEndPoint(),
      sanitizeValues(values),
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (err:any) {
    if (err && err instanceof AxiosError) {
      setError(err.response?.data.message);
    } else if (err && err instanceof Error) setError(err.message);
    return err.response;
  }
};
//forgot password

const forgotPswdOtp = async (values:object, setError: (error: string) => void) => {
  function sanitizeValues(data:any) {
    return { email: data.email };
  }
  try {
    const response = await api.post(sendOTPEndPoint(), sanitizeValues(values), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token }`,
      },
    });
    return response;
  } catch (err:any) {
    if (err && err instanceof AxiosError) {
      setError(err.response?.data.message);
    } else if (err && err instanceof Error) setError(err.message);
    return err.response;
  }
};
const verifyForgotPswdOtp = async (values:object, setError: (error: string) => void) => {
  function sanitizeValues(data:any) {
    return { email: data.email, otp: data.otp, password: data.password };
  }
  try {
    const response = await api.post(
      verifyOTPEndPoint(),
      sanitizeValues(values),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token }`,
        },
      }
    );
    return response;
  } catch (err:any) {
    if (err && err instanceof AxiosError) {
      setError(err.response?.data.message);
    } else if (err && err instanceof Error) setError(err.message);
    return err.response;
  }
};
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

export { getProfile, getDashboard,registerSignin,authenticateLogin,forgotPswdOtp,verifyForgotPswdOtp };
