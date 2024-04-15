//auth

export const sendOTPEndPoint = () => {
    return `/auth/forgot-password`;
  };
  
  export const verifyOTPEndPoint = () => {
    return `/auth/verify-otp`;
  };
  
  export const registerEndPoint = () => {
    return `/auth/student-register`;
  };
  
  export const loginEndPoint = () => {
    return `/auth/login`;
  };

  export const googleAuthCodeEndPoint = () => {
    return `/auth/google/login`;
  };
  
  export const googleAuthEndPoint = () => {
    return `/auth/google`;
  };
  
  export const googleAuthSuccessEndPoint = () => {
    return `auth/login/success`;
  };
  
  //private
  
  export const userProfileEndPoint = () => {
    return `/student/profile`;
  };
  export const editProfileEndPoint = () => {
    return `/student/profile`;
  };
  export const verifyEmailEndPoint = () => {
    return `/student/verify-email`;
  };

  export const phonenumberEndPoint = () => {
    return `/student/phone`;
  };
  
  export const sendSmsEndPoint = () => {
    return `/student/send-sms-otp`;
  };

  export const verifySMSEndPoint = () => {
    return `/student/verify-sms-otp`;
  };

  export const dashboardEndPoint = () => {
    return `/student/dashboard`;
  };
  
  export const addToShortListEndPoint = () => {
    return `/student/add-to-short-list`;
  };

  export const deleteShortListEndPoint = (id:string) => {
    return `/student/edit-short-list/${id}`;
  };  
  
  export const uploadProfileEndPoint = () => {
    return `/student/upload-profile`;
  }
  export const getUploadProfileEndPoint = (id:string) => {
    return `/student/download-profile/${id}`;
  }
  export const deleteUploadProfileEndPoint = () => {
    return `/student/delete-uploaded-profile`;
  }
  export const uploadApplicationDocsEndPoint = () => {
    return `/student/upload-application`;
  }
  
  export const getUploadApplicationDocsEndPoint = (id:string) => {
    return `/student/download-application/${id}`;
  }
  export const getRecommendationsEndpoint = () => {
    return `/student/generate-recommendations`;
  }
  export const deleteUploadApplicationEndPoint = () =>{
    return `/student/delete-uploaded-application`;
  }
  
  export const cancellationRequestEndPoint = (applicationId:string) =>{
    return `/student/request-cancellation/${applicationId}`;
  }
  
  export const applyNowEndPoint = () => {
    return `/student/apply`;
  };
  
  export const editShortListEndPoint = (itemId:string) => {
    return `/student/edit-short-list/${itemId}`;
  };
  
  export const addToCartEndPoint = () => {
    return `/student/add-to-cart`;
  };
  
  export const editCartEndPoint = (itemId:string) => {
    return `/student/edit-cart/${itemId}`;
  };
  
  export const checkOutEndPoint = () => {
    return `/student/checkout`;
  };

  export const participantProfileEndPoint = (id:string) => {
    return `/student/single-student/${id}`;
  };
  
  export const studentJustifyApplyEndpoint = () => {
    return `/student/apply-force`;
  };

  export const studentJustifyRemoveEndpoint = () => {
    return `/student/apply-omit-force`;
  };

  export const studentReview = () => {
    return `/student/post-review`;
  };

  //community
  export const joinCommunityEndPoint = () =>{
    return `/communication/join-in-community`;
  }

  export const leaveCommunityEndPoint = () =>{
    return `/communication/vacate-community`;
  }

  export const fetchCommunityEndPoint = () =>{
    return `/communication/communities`;
  }

  export const feedEndPoint = () =>{
    return `/communication/feed`;
  }

  export const fetchPostsIndividualEndPoint = () =>{
    return `/communication/my-activity`;
  }

  export const fetchPostsCommunityEndPoint = (communityId:string) =>{
    return `/communication/community-posts/${communityId}`;
  }

  export const singlePostEndPoint = (postId:string) =>{
    return `/communication/single-post/${postId}`;
  }

  export const queryEndPoint = () =>{
    return `/communication/query`;
  }

  export const responseEndPoint = () =>{
    return `/communication/response`;
  }

  export const commentEndPoint = () =>{
    return `/communication/comment`;
  }

  export const voteEndPoint = () =>{
    return `/communication/vote`;
  }
  
  //public
  export const allListingsEndPoint = (name:string) => {
    return `/public/listings/${name} `;
  };
  
  export const allDestinationsEndPoint = () => {
    return `/public/all_destinations`;
  };
  
  export const singleDestinationEndPoint = (countryId:string) => {
    return `/public/single_destination/${countryId}`;
  };
  
  export const allUniversitiesEndpoint = () => {
    return `/public/listings/universities`;
  };
  
  export const singleUniversityEndpoint = (universityId:string,currency:string) => {
    return `/public/single_university/?id=${universityId}&currency=${currency}`;
  };
  
  export const singleCourceEndpoint = (courceId:string,currency:string) => {
    return `/public/single_course/?id=${courceId}&currency=${currency}`;
    // return `/public/single_course/${courceId}/${currency}`;

  };

  export const callbackEndpoint = () => {
    return `/public/callback`;
  };
  
  export const counsellorsEndpoint = () => {
    return `/public/counsellors`;
  };
 
  export const allCoursesEndpoint = () => {
    return `/public/all_courses`;
  };

  export const searchUniversityEndPoint = (search:string,country:string) =>{
    return `/public/university/?search=${search}&country=${country}`;
  }
  
  // Chats


  export const fetchChatsEndPoint = () => {
    return `/communication/chats`;
  };
  
  export const postMessageEndPoint = () => {
    return "/communication/message";
  };
  
  export const searchChatsEndPoint = (string:string) => {
    return `communication/?search=${string}`;
  };
  
  export const chatDocsDownloadEndPoint = (id:string) =>{
    return `/communication/download-document/${id}`;
  }
  export const fetchAllMsgsEndPoint = (chatId:string) => {
    return `communication/message/${chatId}`;
  };
  export const postRetriveChatEndPoint = (studentId:string) => {
    return `/communication/chats/${studentId}`;
  };
  export const seenEndPoint = (roomid:string) => {
    return `/communication/seen/${roomid}`;
  };

  // counsellor available events

  export const counsellorSlotEndPoint = (team:string) => {
    return `/student/events/${team}`;
  };
  export const studentSlotBookEndPoint = (team:string) => {
    return `/student/book-slot/${team}`;
  };
  
  export const counsellorGoogleEndPoint = () => {
    return `/counsellor/google`;
  };
  
  export const googleCounsellorCodeEndPoint = (code:string) => {
    return `/counsellor/google/login?code=${code}`;
  };

  export const coordinatorGoogleEndPoint = () => {
    return `/process-coordinator/google`;
  };
  
  export const googleCoordinatoeCodeEndPoint = (code:string) => {
    return `/process-coordinator/google/login?code=${code}`;
  };
  // booked slots

  export const studentBookedSlotsEndPoint = () => {
    return `/student/booked-slots`;
  };