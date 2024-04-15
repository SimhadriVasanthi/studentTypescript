import api from "./baseUrl";
import {
  addToShortListEndPoint,
  allListingsEndPoint,
  applyNowEndPoint,
  callbackEndpoint,
  cancellationRequestEndPoint,
  chatDocsDownloadEndPoint,
  counsellorSlotEndPoint,
  dashboardEndPoint,
  deleteShortListEndPoint,
  deleteUploadApplicationEndPoint,
  deleteUploadProfileEndPoint,
  editProfileEndPoint,
  getRecommendationsEndpoint,
  getUploadApplicationDocsEndPoint,
  getUploadProfileEndPoint,
  googleAuthCodeEndPoint,
  loginEndPoint,
  phonenumberEndPoint,
  registerEndPoint,
  searchUniversityEndPoint,
  sendOTPEndPoint,
  sendSmsEndPoint,
  singleCourceEndpoint,
  singleUniversityEndpoint,
  studentJustifyApplyEndpoint,
  studentJustifyRemoveEndpoint,
  studentReview,
  uploadApplicationDocsEndPoint,
  uploadProfileEndPoint,
  userProfileEndPoint,
  verifyOTPEndPoint,
  verifySMSEndPoint,
} from "./endpoints";
import { AxiosError } from "axios";
import { store } from "../store/store";
import { setPopup } from "../store/Slices/popupSlice";
import { setUserAuthStatus } from "../store/Slices/userAuthSlice";

const dispatch = store.dispatch;

let token = localStorage.getItem("_auth");
const getHeaders = () => {
  token = localStorage.getItem("_auth");
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return headers;
};
let headers = getHeaders();

const handleApiError = (error: any) => {
  let errorMessage = "An error occurred";

  if (error && error instanceof AxiosError) {
    const errorResponse = error.response?.data;
    if (
      errorResponse?.message === "login again" ||
      errorResponse?.message === "jwt malformed"
    ) {
      // If it's a specific error, clear local storage and reload the page
      errorMessage = errorResponse.message;
      localStorage.clear();
      window.location.reload();
      dispatch(
        setUserAuthStatus({
          isAuthorized: false,
          isRegistered: false,
          role: "guest",
        })
      );
    } else {
      errorMessage = errorResponse?.message || errorMessage; // Use specific error message from API response if available
    }
  } else if (error && error instanceof Error) {
    errorMessage = error.message || errorMessage; // Use error message from JavaScript error object
  }

  dispatch(
    setPopup({
      show: true,
      data: {
        container: {
          name: "error",
          data: errorMessage,
          dimensions: {
            width: "250px",
          },
        },
        type: "custom",
      },
    })
  );

  return errorMessage;
};

const googleCodeAuthentication = async (values: object) => {
  try {
    const response = await api.post(googleAuthCodeEndPoint(), values, {
      withCredentials: true,
    });
    // console.log(response);
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const authenticateLogin = async (values: object) => {
  try {
    const response = await api.post(loginEndPoint(), values, {
      withCredentials: true,
    });
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const registerSignin = async (values: object) => {
  function sanitizeValues(data: any) {
    return {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };
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
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const forgotPswdOtp = async (values: object) => {
  headers = getHeaders();
  function sanitizeValues(data: any) {
    return { email: data.email };
  }
  try {
    const response = await api.post(
      sendOTPEndPoint(),
      sanitizeValues(values),
      headers
    );
    if (response.data && response.data.accessToken !== null) {
      localStorage.setItem('_auth', response.data.accessToken);
    }
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const verifyForgotPswdOtp = async (values: object) => {
  headers = getHeaders();
  function sanitizeValues(data: any) {
    return { email: data.email, otp: data.otp, password: data.password };
  }
  try {
    const response = await api.post(
      verifyOTPEndPoint(),
      sanitizeValues(values),
      headers
    );
    if (response.data && response.data.accessToken !== null) {
      localStorage.setItem('_auth', response.data.accessToken);
    }
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const editProfile = async (values: object) => {
  headers = getHeaders();
  try {
    const response = await api.put(editProfileEndPoint(), values, headers);
    if (response.data && response.data.accessToken !== null) {
      localStorage.setItem('_auth', response.data.accessToken);
    }
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const getProfile = async () => {
  headers = getHeaders();
  try {
    const response = await api
      .get(userProfileEndPoint(), headers)
      if (response.data && response.data.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
      }
      return response.data;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    console.error("API error:", errorResponse);
    throw errorResponse;
  }
};
const getDashboard = async () => {
  headers = getHeaders();
  try {
    const response = await api
      .get(dashboardEndPoint(), headers)
      if (response.data && response.data.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
      }
      return response.data;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const uploadProfile = async (values: object) => {
  try {
    const response = await api.post(uploadProfileEndPoint(), values, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.data && response.data.accessToken !== null) {
      localStorage.setItem('_auth', response.data.accessToken);
    }
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const deleteUploadProfile = async (values: object) => {
  headers = getHeaders();
  try {
    const response = await api.post(
      deleteUploadProfileEndPoint(),
      values,
      headers
    );
    if (response.data && response.data.accessToken !== null) {
      localStorage.setItem('_auth', response.data.accessToken);
    }
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const addToShortList = async (values: object) => {
  headers = getHeaders();
  try {
    const response = await api.post(addToShortListEndPoint(), values, headers);
    if (response.data && response.data.accessToken !== null) {
      localStorage.setItem('_auth', response.data.accessToken);
    }
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const deleteShortList = async (itemId: string) => {
  headers = getHeaders();
  try {
    const response = await api.patch(
      deleteShortListEndPoint(itemId),
      {},
      headers
    );
    if (response.data && response.data.accessToken !== null) {
      localStorage.setItem('_auth', response.data.accessToken);
    }
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const sendSms = async (values: object) => {
  headers = getHeaders();
  try {
    const response = await api
      .post(sendSmsEndPoint(), values, headers)
      if (response.data && response.data.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
      }
      return response.data;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const verifyPhoneOtp = async (values: object) => {
  headers = getHeaders();
  try {
    const response = await api.post(verifySMSEndPoint(), values, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.data && response.data.accessToken !== null) {
      localStorage.setItem('_auth', response.data.accessToken);
    }
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const phoneNumberAddition = async (values: object) => {
  headers = getHeaders();
  try {
    const response = await api.put(phonenumberEndPoint(), values, headers);
    if (response.data && response.data.accessToken !== null) {
      localStorage.setItem('_auth', response.data.accessToken);
    }
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const getAlllistings = async (name: string, values: object) => {
  headers = getHeaders();
  try {
    const response = await api
      .post(allListingsEndPoint(name), values, headers)
      .then((res) => res?.data);
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const getSingleUniversity = async (universityId: any, currency: string) => {
  try {
    const response = await api.get(
      singleUniversityEndpoint(universityId, currency)
    );
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const getSingleCourse = async (courseId: string, currency: string) => {
  try {
    // const { data } = await api.get(singleCourceEndpoint(courseId));
    const response = await api.get(singleCourceEndpoint(courseId, currency));
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const callbackRSA = async (values: object) => {
  headers = getHeaders();
  try {
    const response = await api.post(callbackEndpoint(), values, headers);
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const postReview = async (values: object) => {
  headers = getHeaders();
  try {
    const response = await api
      .post(studentReview(), values, headers)
      if (response.data && response.data.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
      }
      return response.data;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const uploadApplicationDocs = async (values: object) => {
  try {
    const response = await api.post(uploadApplicationDocsEndPoint(), values, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const getSearchUniversityDetails = async (search: string, country: string) => {
  headers = getHeaders();
  try {
    const response = await api
      .get(searchUniversityEndPoint(search, country), headers)
      .then((res) => res?.data);
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const getRecommendations = async (values: object) => {
  headers = getHeaders();
  try {
    const response = await api
      .put(getRecommendationsEndpoint(), values, headers)
      if (response.data && response.data.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
      }
      return response.data;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};

const configHeaders = {
  responseType: "arraybuffer" as const, // Specify the correct responseType
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  },
};
const getUploadProfile = async (
  id: string,
  setError: (error: string) => void
) => {
  try {
    const response = await api.get(getUploadProfileEndPoint(id), configHeaders);
    const url = new Blob([response.data]);
    return window.URL.createObjectURL(url);
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const getUploadApplication = async (
  id: string,
  setError: (error: string) => void
) => {
  try {
    const response = await api.get(
      getUploadApplicationDocsEndPoint(id),
      configHeaders
    );
    const url = new Blob([response.data]);
    return window.URL.createObjectURL(url);
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};

const deleteUploadApplication = async (values: object) => {
  headers = getHeaders();
  try {
    const response = await api.post(
      deleteUploadApplicationEndPoint(),
      values,
      headers
    );
    if (response.data && response.data.accessToken !== null) {
      localStorage.setItem('_auth', response.data.accessToken);
    }
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};

const studentJustifyApply = async (values: object) => {
  headers = getHeaders();
  try {
    const response = await api.post(
      studentJustifyApplyEndpoint(),
      values,
      headers
    );
    if (response.data && response.data.accessToken !== null) {
      localStorage.setItem('_auth', response.data.accessToken);
    }
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};

const studentJustifyRemove = async (values: object) => {
  headers = getHeaders();
  try {
    const response = await api.post(
      studentJustifyRemoveEndpoint(),
      values,
      headers
    );
    if (response.data && response.data.accessToken !== null) {
      localStorage.setItem('_auth', response.data.accessToken);
    }
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};

const cancellationRequest = async (id: string, values: object) => {
  headers = getHeaders();
  try {
    const response = await api.put(
      cancellationRequestEndPoint(id),
      values,
      headers
    );
    if (response.data && response.data.accessToken !== null) {
      localStorage.setItem('_auth', response.data.accessToken);
    }
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};

const applyNow = async (values: object) => {
  headers = getHeaders();
  try {
    const response = await api.post(applyNowEndPoint(), values, headers);
    if (response.data && response.data.accessToken !== null) {
      localStorage.setItem('_auth', response.data.accessToken);
    }
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const getCounsellorSlots = async (
  team: string,
  setError: (error: string) => void
) => {
  headers = getHeaders();
  try {
    const response = await api.get(counsellorSlotEndPoint(team), headers);
    if (response.data && response.data.accessToken !== null) {
      localStorage.setItem('_auth', response.data.accessToken);
    }
    return response;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};
const getDocfromChat = async (id: string) => {
  try {
    const response = await api.get(chatDocsDownloadEndPoint(id), {
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "multiform/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.data || !(response.data instanceof ArrayBuffer)) {
      throw new Error("Invalid response data");
    }
    const url = URL.createObjectURL(new Blob([response.data]));
    return url;
  } catch (err: any) {
    const errorResponse = handleApiError(err);
    throw errorResponse;
  }
};

export {
  getCounsellorSlots,
  getUploadProfile,
  getUploadApplication,
  deleteUploadApplication,
  studentJustifyApply,
  studentJustifyRemove,
  getSearchUniversityDetails,
  cancellationRequest,
  uploadApplicationDocs,
  applyNow,
  deleteUploadProfile,
  deleteShortList,
  googleCodeAuthentication,
  postReview,
  callbackRSA,
  getSingleCourse,
  getProfile,
  getDashboard,
  registerSignin,
  authenticateLogin,
  forgotPswdOtp,
  verifyForgotPswdOtp,
  editProfile,
  uploadProfile,
  addToShortList,
  sendSms,
  verifyPhoneOtp,
  phoneNumberAddition,
  getAlllistings,
  getSingleUniversity,
  getRecommendations,
  getDocfromChat,
};
