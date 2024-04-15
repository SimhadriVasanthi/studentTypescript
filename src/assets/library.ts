import { initWorkexperience } from "../reducers/workExperienceSlice";
import { getDashboard, getProfile } from "../services";
import { initApplications } from "../store/Slices/applicationsSlice";
import { initDocuments } from "../store/Slices/documentsSlice";
import { initEducationHistory } from "../store/Slices/educationHistorySlice";
import { initfamilyInfo } from "../store/Slices/familyInfoSlice";
import { initPersonalInfo } from "../store/Slices/personalInfoSlice";
import { initpreferences } from "../store/Slices/preferencesSlice";
import { initSharedInfo } from "../store/Slices/sharedInfoSlice";
import { initShortlisted } from "../store/Slices/shortlistedCoursesSlice";
import { initskills } from "../store/Slices/skillsSlice";
import { inittestScores } from "../store/Slices/testScoresSlice";
import { setUserAuthStatus } from "../store/Slices/userAuthSlice";
import { store } from "../store/store";

const dispatch = store.dispatch;
let token = localStorage.getItem("_auth");

const getProfileDetails = async () => {
  const response = await getProfile();
  return response;
};
const getDashboardDetails = async () => {
  const response = await getDashboard();
  return response;
};

export const checkUser = async () => {
  token = localStorage.getItem("_auth");
  dispatch(
    setUserAuthStatus({
      isAuthorized: token ? true : false,
      isRegistered: token ? true : false,
      role: token ? "student" : "guest",
    })
  );
  if (token) {
    let profileRes = await getProfileDetails();
    if (profileRes.success) {
      const sharedProfile = {
        _id: profileRes.data?._id,
        firstName: profileRes.data?.firstName,
        lastName: profileRes.data?.lastName,
        displayPicSrc: profileRes.data?.displayPicSrc,
        email: profileRes.data?.email,
        phone: profileRes.data?.phone,
        LeadSource: profileRes.data?.LeadSource,
        isPlanningToTakeAcademicTest:
          profileRes.data?.isPlanningToTakeAcademicTest,
        isPlanningToTakeLanguageTest:
          profileRes.data?.isPlanningToTakeLanguageTest,
      };
      const personalInfo = {
        DOB: profileRes.data?.personalDetails.DOB,
        Gender: profileRes.data?.personalDetails.Gender, // enum
        temporaryAddress: profileRes.data?.personalDetails.temporaryAddress,
        permanentAddress: profileRes.data?.personalDetails.permanentAddress,
        nationality: profileRes.data?.personalDetails.nationality, // enum
        countyOfBirth: profileRes.data?.personalDetails.countyOfBirth, // enum
        maritalStatus: profileRes.data?.personalDetails.maritalStatus, // enum
        validPassport: profileRes.data?.personalDetails.validPassport, // enum yes no and processing
        validPermit: profileRes.data?.personalDetails.validPermit, // enum yes no and processing,
        visaRejectedDetails:
          profileRes.data?.personalDetails.visaRejectedDetails,
      };
      dispatch(
        initEducationHistory({
          requestStatus: "initiated",
          responseStatus: "recieved",
          haveAnIssue: false,
          issue: "",
          data: profileRes.data?.education,
        })
      );
      dispatch(
        initSharedInfo({
          requestStatus: "initiated",
          responseStatus: "recieved",
          haveAnIssue: false,
          issue: "",
          data: sharedProfile,
        })
      );
      dispatch(
        initPersonalInfo({
          requestStatus: "initiated",
          responseStatus: "recieved",
          haveAnIssue: false,
          issue: "",
          data: personalInfo,
        })
      );
      dispatch(initWorkexperience({
        requestStatus: "initiated",
        responseStatus: "recieved",
        haveAnIssue: false,
        issue: "",
        data: profileRes.data?.workExperience,
      }));
      dispatch(initskills({
        requestStatus: "initiated",
        responseStatus: "recieved",
        haveAnIssue: false,
        issue: "",
        data: profileRes.data?.skills,
      }))
      dispatch(
        initDocuments({
          requestStatus: "initiated",
          responseStatus: "recieved",
          haveAnIssue: false,
          issue: "",
          data: profileRes.data?.documents,
        })
      );
      dispatch(
        initpreferences({
          requestStatus: "initiated",
          responseStatus: "recieved",
          haveAnIssue: false,
          issue: "",
          data: profileRes.data?.preference,
        })
      );
      dispatch(
        initfamilyInfo({
          requestStatus: "initiated",
          responseStatus: "recieved",
          haveAnIssue: false,
          issue: "",
          data: profileRes.data?.familyDetails,
        })
      );
      dispatch(
        inittestScores({
          requestStatus: "initiated",
          responseStatus: "recieved",
          haveAnIssue: false,
          issue: "",
          data: profileRes.data?.tests,
        })
      );
    }
    let dashboardRes = await getDashboardDetails();
    if (dashboardRes) {
      dispatch(
        initShortlisted({
          requestStatus: "initiated",
          responseStatus: "recieved",
          haveAnIssue: false,
          issue: "",
          data: dashboardRes.data.activity?.shortListed,
        })
      );
      dispatch(
        initApplications({
          requestStatus: "initiated",
          responseStatus: "recieved",
          haveAnIssue: false,
          issue: "",
          data: dashboardRes.data.activity?.applications,
        })
      );
    }
  }
};
