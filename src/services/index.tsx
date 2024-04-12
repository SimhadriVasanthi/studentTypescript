import api from "./baseUrl";
import {
  addToShortListEndPoint,
  allListingsEndPoint,
  applyNowEndPoint,
  callbackEndpoint,
  cancellationRequestEndPoint,
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

const dispatch = store.dispatch;

let token = localStorage.getItem("_auth");
const getHeaders = () => {
  token = localStorage.getItem("_auth")
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return headers;
};
let headers = getHeaders();

const googleCodeAuthentication = async (values: object,
  ) => {
  try {
    const response = await api.post(googleAuthCodeEndPoint(), values, {
      withCredentials: true,
    });
    // console.log(response);
    return response;
  } catch (err: any) {
    let errorMessage = "An error occurred"; // Default error message
    if (err && err instanceof AxiosError) {
      errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
    } else if (err && err instanceof Error) {
      errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
    }
    // setError(errorMessage); // Set the error message
    dispatch(setPopup({
      show: true,
      data: {
        container: {
          name: "error",
          data: errorMessage,
          dimensions: {
            width: "250px"
          }
        },
        type: "custom",
      },
    }));
    
    return err.response;
  }
};
const authenticateLogin = async (
  values: object,
  
) => {
  try {
    const response = await api.post(loginEndPoint(), values, {
      withCredentials: true,
    });
    return response;
  } catch (err: any) {
      let errorMessage = "An error occurred"; // Default error message
      if (err && err instanceof AxiosError) {
        errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
      } else if (err && err instanceof Error) {
        errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
      }
      // setError(errorMessage); // Set the error message
      dispatch(setPopup({
        show: true,
        data: {
          container: {
            name: "error",
            data: errorMessage,
            dimensions: {
              width: "250px"
            }
          },
          type: "custom",
        },
      }));
      
      return err.response;
    }
};
const registerSignin = async (
  values: object,
  
) => {
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
  }  catch (err: any) {
    let errorMessage = "An error occurred"; // Default error message
    if (err && err instanceof AxiosError) {
      errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
    } else if (err && err instanceof Error) {
      errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
    }
    // setError(errorMessage); // Set the error message
    dispatch(setPopup({
      show: true,
      data: {
        container: {
          name: "error",
          data: errorMessage,
          dimensions: {
            width: "250px"
          }
        },
        type: "custom",
      },
    }));
    
    return err.response;
  }
};
const forgotPswdOtp = async (
  values: object,
  
) => {
  headers = getHeaders()
  function sanitizeValues(data: any) {
    return { email: data.email };
  }
  try {
    const response = await api.post(sendOTPEndPoint(), sanitizeValues(values), headers);
    return response;
  } catch (err: any) {
    let errorMessage = "An error occurred"; // Default error message
    if (err && err instanceof AxiosError) {
      errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
    } else if (err && err instanceof Error) {
      errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
    }
    // setError(errorMessage); // Set the error message
    dispatch(setPopup({
      show: true,
      data: {
        container: {
          name: "error",
          data: errorMessage,
          dimensions: {
            width: "250px"
          }
        },
        type: "custom",
      },
    }));
    
    return err.response;
  }
};
const verifyForgotPswdOtp = async (
  values: object,
  
) => {
  headers = getHeaders()
  function sanitizeValues(data: any) {
    return { email: data.email, otp: data.otp, password: data.password };
  }
  try {
    const response = await api.post(
      verifyOTPEndPoint(),
      sanitizeValues(values),
      headers
    );
    return response;
  } catch (err: any) {
    let errorMessage = "An error occurred"; // Default error message
    if (err && err instanceof AxiosError) {
      errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
    } else if (err && err instanceof Error) {
      errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
    }
    // setError(errorMessage); // Set the error message
    dispatch(setPopup({
      show: true,
      data: {
        container: {
          name: "error",
          data: errorMessage,
          dimensions: {
            width: "250px"
          }
        },
        type: "custom",
      },
    }));
    
    return err.response;
  }
};
const editProfile = async (
  values: object,
  
) => {
  headers = getHeaders()
  try {
    const response = await api.put(editProfileEndPoint(), values, headers);
    return response;
  } catch (err: any) {
    let errorMessage = "An error occurred"; // Default error message
    if (err && err instanceof AxiosError) {
      errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
    } else if (err && err instanceof Error) {
      errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
    }
    // setError(errorMessage); // Set the error message
    dispatch(setPopup({
      show: true,
      data: {
        container: {
          name: "error",
          data: errorMessage,
          dimensions: {
            width: "250px"
          }
        },
        type: "custom",
      },
    }));
    
    return err.response;
  }
};
const getProfile = async () => {
  headers = getHeaders();
  try {
    const response = await api
      .get(userProfileEndPoint(), headers)
      .then((res) => res?.data);
    return response;
  } catch (err: any) {
    let errorMessage = "An error occurred"; // Default error message
    if (err && err instanceof AxiosError) {
      errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
    } else if (err && err instanceof Error) {
      errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
    }
    // setError(errorMessage); // Set the error message
    dispatch(setPopup({
      show: true,
      data: {
        container: {
          name: "error",
          data: errorMessage,
          dimensions: {
            width: "250px"
          }
        },
        type: "custom",
      },
    }));
    
    return err.response;
  }
};
const getDashboard = async () => {
  headers = getHeaders()
  try {
    const response = await api
      .get(dashboardEndPoint(), headers)
      .then((res) => res?.data);
    return response;
  } catch (err: any) {
    let errorMessage = "An error occurred"; // Default error message
    if (err && err instanceof AxiosError) {
      errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
    } else if (err && err instanceof Error) {
      errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
    }
    // setError(errorMessage); // Set the error message
    dispatch(setPopup({
      show: true,
      data: {
        container: {
          name: "error",
          data: errorMessage,
          dimensions: {
            width: "250px"
          }
        },
        type: "custom",
      },
    }));
    
    return err.response;
  }
};
const uploadProfile = async (
  values: object,
  
) => {
  try {
    const response = await api.post(uploadProfileEndPoint(), values, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err: any) {
      let errorMessage = "An error occurred"; // Default error message
      if (err && err instanceof AxiosError) {
        errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
      } else if (err && err instanceof Error) {
        errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
      }
      // setError(errorMessage); // Set the error message
      dispatch(setPopup({
        show: true,
        data: {
          container: {
            name: "error",
            data: errorMessage,
            dimensions: {
              width: "250px"
            }
          },
          type: "custom",
        },
      }));
      
      return err.response;
    }
};
const deleteUploadProfile = async (values:object, setError:(error:string)=>void) => {
  headers = getHeaders()
  try {
    const response = await api.post(
      deleteUploadProfileEndPoint
      (),
      values,
      headers
    );
    return response;
  } catch (err: any) {
      let errorMessage = "An error occurred"; // Default error message
      if (err && err instanceof AxiosError) {
        errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
      } else if (err && err instanceof Error) {
        errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
      }
      // setError(errorMessage); // Set the error message
      dispatch(setPopup({
        show: true,
        data: {
          container: {
            name: "error",
            data: errorMessage,
            dimensions: {
              width: "250px"
            }
          },
          type: "custom",
        },
      }));
      
      return err.response;
    }
};
const addToShortList = async (
  values: object,
  
) => {
  headers = getHeaders()
  try {
    const response = await api.post(addToShortListEndPoint(), values, headers);
    return response;
  } catch (err: any) {
      let errorMessage = "An error occurred"; // Default error message
      if (err && err instanceof AxiosError) {
        errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
      } else if (err && err instanceof Error) {
        errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
      }
      // setError(errorMessage); // Set the error message
      dispatch(setPopup({
        show: true,
        data: {
          container: {
            name: "error",
            data: errorMessage,
            dimensions: {
              width: "250px"
            }
          },
          type: "custom",
        },
      }));
      
      return err.response;
    }
};
const deleteShortList = async (itemId:number, setError:(error:string)=>void) => {
  headers = getHeaders()
  try {
    const response = await api.patch(deleteShortListEndPoint(itemId),{}, headers);
    return response;
  } catch (err: any) {
      let errorMessage = "An error occurred"; // Default error message
      if (err && err instanceof AxiosError) {
        errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
      } else if (err && err instanceof Error) {
        errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
      }
      // setError(errorMessage); // Set the error message
      dispatch(setPopup({
        show: true,
        data: {
          container: {
            name: "error",
            data: errorMessage,
            dimensions: {
              width: "250px"
            }
          },
          type: "custom",
        },
      }));
      
      return err.response;
    }
};
const sendSms = async (values: object, ) => {
  headers = getHeaders()
  try {
    const response = await api
      .post(sendSmsEndPoint(), values, headers)
      .then((res) => res?.data);
    return response;
  } catch (err: any) {
      let errorMessage = "An error occurred"; // Default error message
      if (err && err instanceof AxiosError) {
        errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
      } else if (err && err instanceof Error) {
        errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
      }
      // setError(errorMessage); // Set the error message
      dispatch(setPopup({
        show: true,
        data: {
          container: {
            name: "error",
            data: errorMessage,
            dimensions: {
              width: "250px"
            }
          },
          type: "custom",
        },
      }));
      
      return err.response;
    }
};
const verifyPhoneOtp = async (
  values: object, 
) => {
  headers = getHeaders()
  try {
    const response = await api.post(verifySMSEndPoint(), values, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err: any) {
      let errorMessage = "An error occurred"; // Default error message
      if (err && err instanceof AxiosError) {
        errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
      } else if (err && err instanceof Error) {
        errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
      }
      // setError(errorMessage); // Set the error message
      dispatch(setPopup({
        show: true,
        data: {
          container: {
            name: "error",
            data: errorMessage,
            dimensions: {
              width: "250px"
            }
          },
          type: "custom",
        },
      }));
      
      return err.response;
    }
};
const phoneNumberAddition = async (
  values: object, 
) => {
  headers = getHeaders()
  try {
    const response = await api.put(phonenumberEndPoint(), values, headers);
    return response;
  } catch (err: any) {
      let errorMessage = "An error occurred"; // Default error message
      if (err && err instanceof AxiosError) {
        errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
      } else if (err && err instanceof Error) {
        errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
      }
      // setError(errorMessage); // Set the error message
      dispatch(setPopup({
        show: true,
        data: {
          container: {
            name: "error",
            data: errorMessage,
            dimensions: {
              width: "250px"
            }
          },
          type: "custom",
        },
      }));
      
      return err.response;
    }
};
const getAlllistings = async (name:string, values: object,
  ) => {
    headers = getHeaders()
  try {
    const response = await api
      .post(allListingsEndPoint(name), values, headers)
      .then((res) => res?.data);
    return response;
  } catch (err: any) {
      let errorMessage = "An error occurred"; // Default error message
      if (err && err instanceof AxiosError) {
        errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
      } else if (err && err instanceof Error) {
        errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
      }
      // setError(errorMessage); // Set the error message
      dispatch(setPopup({
        show: true,
        data: {
          container: {
            name: "error",
            data: errorMessage,
            dimensions: {
              width: "250px"
            }
          },
          type: "custom",
        },
      }));
      
      return err.response;
    }
};
const getSingleUniversity = async (universityId:number, currency:string, ) => {

  try {
    const response = await api.get(
      singleUniversityEndpoint(universityId, currency)
    );
    return response;
  } catch (err: any) {
    let errorMessage = "An error occurred"; // Default error message
    if (err && err instanceof AxiosError) {
      errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
    } else if (err && err instanceof Error) {
      errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
    }
    // setError(errorMessage); // Set the error message
    dispatch(setPopup({
      show: true,
      data: {
        container: {
          name: "error",
          data: errorMessage,
          dimensions: {
            width: "250px"
          }
        },
        type: "custom",
      },
    }));
    
    return err.response;
  }
};
const getSingleCourse = async (courseId:number, currency:string, ) => {
  try {
    // const { data } = await api.get(singleCourceEndpoint(courseId));
    const response = await api.get(singleCourceEndpoint(courseId, currency));
    return response;
  } catch (err: any) {
      let errorMessage = "An error occurred"; // Default error message
      if (err && err instanceof AxiosError) {
        errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
      } else if (err && err instanceof Error) {
        errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
      }
      // setError(errorMessage); // Set the error message
      dispatch(setPopup({
        show: true,
        data: {
          container: {
            name: "error",
            data: errorMessage,
            dimensions: {
              width: "250px"
            }
          },
          type: "custom",
        },
      }));
      
      return err.response;
    }
};
const callbackRSA = async (values: object,
  ) =>{
    headers = getHeaders()
  try {
    const response = await api.post(callbackEndpoint(),values,headers)
    return response;
  } catch (err: any) {
    let errorMessage = "An error occurred"; // Default error message
    if (err && err instanceof AxiosError) {
      errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
    } else if (err && err instanceof Error) {
      errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
    }
    // setError(errorMessage); // Set the error message
    dispatch(setPopup({
      show: true,
      data: {
        container: {
          name: "error",
          data: errorMessage,
          dimensions: {
            width: "250px"
          }
        },
        type: "custom",
      },
    }));
    
    return err.response;
  }
}
const postReview = async (values: object,
  ) => {
    headers = getHeaders()
  try {
    const response = await api
      .post(studentReview(), values, headers)
      .then((res) => res?.data);
    return response;
  } catch (err: any) {
      let errorMessage = "An error occurred"; // Default error message
      if (err && err instanceof AxiosError) {
        errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
      } else if (err && err instanceof Error) {
        errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
      }
      // setError(errorMessage); // Set the error message
      dispatch(setPopup({
        show: true,
        data: {
          container: {
            name: "error",
            data: errorMessage,
            dimensions: {
              width: "250px"
            }
          },
          type: "custom",
        },
      }));
      
      return err.response;
    }
};
const uploadApplicationDocs = async (values:object, setError:(error:string)=>void) => {
  try {
    const response = await api.post(uploadApplicationDocsEndPoint(), values, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err: any) {
      let errorMessage = "An error occurred"; // Default error message
      if (err && err instanceof AxiosError) {
        errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
      } else if (err && err instanceof Error) {
        errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
      }
      // setError(errorMessage); // Set the error message
      dispatch(setPopup({
        show: true,
        data: {
          container: {
            name: "error",
            data: errorMessage,
            dimensions: {
              width: "250px"
            }
          },
          type: "custom",
        },
      }));
      
      return err.response;
    }
};
const getSearchUniversityDetails = async (search:string, country:string, setError:(error:string)=>void) => {
  headers = getHeaders()
  try {
    const response = await api
      .get(searchUniversityEndPoint(search, country), headers)
      .then((res) => res?.data);
    return response;
  } catch (err: any) {
      let errorMessage = "An error occurred"; // Default error message
      if (err && err instanceof AxiosError) {
        errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
      } else if (err && err instanceof Error) {
        errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
      }
      // setError(errorMessage); // Set the error message
      dispatch(setPopup({
        show: true,
        data: {
          container: {
            name: "error",
            data: errorMessage,
            dimensions: {
              width: "250px"
            }
          },
          type: "custom",
        },
      }));
      
      return err.response;
    }
};
const getRecommendations = async (values:object, setError:(error:string)=>void) => {
  headers = getHeaders()
  try {
    const response = await api
      .put(getRecommendationsEndpoint(), values, headers)
      .then((res) => res?.data);
    return response;
  } catch (err: any) {
      let errorMessage = "An error occurred"; // Default error message
      if (err && err instanceof AxiosError) {
        errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
      } else if (err && err instanceof Error) {
        errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
      }
      // setError(errorMessage); // Set the error message
      dispatch(setPopup({
        show: true,
        data: {
          container: {
            name: "error",
            data: errorMessage,
            dimensions: {
              width: "250px"
            }
          },
          type: "custom",
        },
      }));
      
      return err.response;
    }
};

const configHeaders = {
  responseType: 'arraybuffer' as const, // Specify the correct responseType
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`,
  },
};
const getUploadProfile = async (id:number,  setError:(error:string)=>void) => {
  try {
    const response = await api.get(getUploadProfileEndPoint(id), configHeaders);
    const url = new Blob([response.data]);
    return window.URL.createObjectURL(url);
  } catch (err: any) {
      let errorMessage = "An error occurred"; // Default error message
      if (err && err instanceof AxiosError) {
        errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
      } else if (err && err instanceof Error) {
        errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
      }
      // setError(errorMessage); // Set the error message
      dispatch(setPopup({
        show: true,
        data: {
          container: {
            name: "error",
            data: errorMessage,
            dimensions: {
              width: "250px"
            }
          },
          type: "custom",
        },
      }));
      
      return err.response;
    }
};
const getUploadApplication = async (id:number,  setError:(error:string)=>void) => {
  try {
    const response = await api.get(
      getUploadApplicationDocsEndPoint(id),
      configHeaders
    );
    const url = new Blob([response.data]);
    return window.URL.createObjectURL(url);
  } catch (err: any) {
      let errorMessage = "An error occurred"; // Default error message
      if (err && err instanceof AxiosError) {
        errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
      } else if (err && err instanceof Error) {
        errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
      }
      // setError(errorMessage); // Set the error message
      dispatch(setPopup({
        show: true,
        data: {
          container: {
            name: "error",
            data: errorMessage,
            dimensions: {
              width: "250px"
            }
          },
          type: "custom",
        },
      }));
      
      return err.response;
    }
};

const deleteUploadApplication = async (values:object, setError:(error:string)=>void) => {
  headers = getHeaders()
  try {
    const response = await api.post(
      deleteUploadApplicationEndPoint(),
      values,
      headers
    );
    return response;
  } catch (err: any) {
      let errorMessage = "An error occurred"; // Default error message
      if (err && err instanceof AxiosError) {
        errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
      } else if (err && err instanceof Error) {
        errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
      }
      // setError(errorMessage); // Set the error message
      dispatch(setPopup({
        show: true,
        data: {
          container: {
            name: "error",
            data: errorMessage,
            dimensions: {
              width: "250px"
            }
          },
          type: "custom",
        },
      }));
      
      return err.response;
    }
};

const studentJustifyApply = async (values:object, setError:(error:string)=>void) => {
  headers = getHeaders()
  try {
    const response = await api.post(
      studentJustifyApplyEndpoint(),
      values,
      headers
    );
    return response;
  } catch (err: any) {
    let errorMessage = "An error occurred"; // Default error message
    if (err && err instanceof AxiosError) {
      errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
    } else if (err && err instanceof Error) {
      errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
    }
    // setError(errorMessage); // Set the error message
    dispatch(setPopup({
      show: true,
      data: {
        container: {
          name: "error",
          data: errorMessage,
          dimensions: {
            width: "250px"
          }
        },
        type: "custom",
      },
    }));
    
    return err.response;
  }
};

const studentJustifyRemove = async (values:object, setError:(error:string)=>void) => {
  headers = getHeaders()
  try {
    const response = await api.post(
      studentJustifyRemoveEndpoint(),
      values,
      headers
    );
    return response;
  } catch (err: any) {
    let errorMessage = "An error occurred"; // Default error message
    if (err && err instanceof AxiosError) {
      errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
    } else if (err && err instanceof Error) {
      errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
    }
    // setError(errorMessage); // Set the error message
    dispatch(setPopup({
      show: true,
      data: {
        container: {
          name: "error",
          data: errorMessage,
          dimensions: {
            width: "250px"
          }
        },
        type: "custom",
      },
    }));
    
    return err.response;
  }
};

const cancellationRequest = async (id:number, values:object, setError:(error:string)=>void) => {
  headers = getHeaders()
  try {
    const response = await api.put(
      cancellationRequestEndPoint(id),
      values,
      headers
    );
    return response;
  } catch (err: any) {
    let errorMessage = "An error occurred"; // Default error message
    if (err && err instanceof AxiosError) {
      errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
    } else if (err && err instanceof Error) {
      errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
    }
    // setError(errorMessage); // Set the error message
    dispatch(setPopup({
      show: true,
      data: {
        container: {
          name: "error",
          data: errorMessage,
          dimensions: {
            width: "250px"
          }
        },
        type: "custom",
      },
    }));
    
    return err.response;
  }
};

const applyNow = async (values:object, setError:(error:string)=>void) => {
  headers = getHeaders()
  try {
    const response = await api.post(applyNowEndPoint(), values, headers);
    return response;
  } catch (err: any) {
    let errorMessage = "An error occurred"; // Default error message
    if (err && err instanceof AxiosError) {
      errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
    } else if (err && err instanceof Error) {
      errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
    }
    // setError(errorMessage); // Set the error message
    dispatch(setPopup({
      show: true,
      data: {
        container: {
          name: "error",
          data: errorMessage,
          dimensions: {
            width: "250px"
          }
        },
        type: "custom",
      },
    }));
    
    return err.response;
  }
};
const getCounsellorSlots = async (team:string,setError:(error:string)=>void) => {
  headers = getHeaders()
  try {
    const response = await api.get(counsellorSlotEndPoint(team), headers);
    return response;
  } catch (err: any) {
    let errorMessage = "An error occurred"; // Default error message
    if (err && err instanceof AxiosError) {
      errorMessage = err.response?.data.message || errorMessage; // Use specific error message from API response if available
    } else if (err && err instanceof Error) {
      errorMessage = err.message || errorMessage; // Use error message from JavaScript error object
    }
    // setError(errorMessage); // Set the error message
    dispatch(setPopup({
      show: true,
      data: {
        container: {
          name: "error",
          data: errorMessage,
          dimensions: {
            width: "250px"
          }
        },
        type: "custom",
      },
    }));
    
    return err.response;
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
};
