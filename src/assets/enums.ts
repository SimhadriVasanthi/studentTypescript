import ForgotPassword from "../components/authentication/forgotPassword";
import Login from "../components/authentication/Login";
import PhoneNumber from "../components/authentication/phoneNumber";
import SignUp from "../components/authentication/Register";
import Error from "../genericComponents/modalPopup/error";

export const APP_NAME="Campus Root";
export const DESTINATIONS={USA:"United States",UK:"United Kingdom",CAN:"Canada",AUS:"Australia",IRE:"Ireland",NZ:"New Zealand"};
export const SOCKET_URL='https://onewindow-v1-server.onrender.com/';

export const TeamRoleEnum = {
    TEAM: "teamMember",
    DEVELOPER: "developer",
    ADMIN: "admin",
    COUNSELLOR: "counsellor"
}

export const COMPONENTS = [
    {name:"login",component:Login},
    {name:"signup",component:SignUp},
    {name:"forgot",component:ForgotPassword},
    {name:"phonenumber",component:PhoneNumber},
    {name:"error",component:Error},


]



export const UniversityTypeEnum = {
    PUBLIC: "public",
    PRIVATE: "private"
}
export const studyLevelEnum = {
    MS: "masters",
    BS: "bachelors"
}
export const DestinationTypeEnum = {
    USA: "United States of America",
    UK: "United Kingdom",
    CANADA: "Canada",
    AUSTRALIA: "Australia",
    IRELAND: "Ireland",
    NZ: "New Zealand"
}
export const CurrencyEnum = {
    USD: "United States Dollar",
    GBP: "British Pound Sterling",
    CAD: "Canadian Dollar",
    AUD: "Australian Dollar",
    EUR: "Euro",
    NZD: "New Zealand Dollar",
}
export const EducationStageEnum = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SENIOR_SECONDARY: "senior secondary",
    UNDERGRADUATE: "undergraduate",
    GRADUATE: "graduate",
    POSTGRADUATE: "postgraduate",
    DOCTORATE: "doctorate",
};

export const ApplicationStatusEnum = {
    REQUEST: "Request received",
    VERIFICATION: "Document Verification",
    MASTER_APPLICATION_FORM: "Master Application Form",
    APPLICATION_UNIVERSITY_SITE: "Applied at University Official site"
};
export const courseTypeEnum = {
    RESEARCH: "research work",
    COURSE: "course work"
}
export const studyModeEnum = {
    ONLINE: "online",
    CAMPUS: "on-campus",
    HYBRID:"hybrid"
}
export const TernaryEnum={
    YES:"yes",
    NO:"no",
    OPTIONAL:"optional"
}

export const TestNamesEnum = {
    GRE: "Graduate Record Examination",
    GMAT: "Graduate Management Admission Test",
    TOEFL: "Test of English as a Foreign Language",
    IELTS: "International English Language Testing System",
    DET: "Duolingo English Test",
};

export const TestDescriptionEnum = {
    VERBAL_REASONING: "Verbal Reasoning",
    QUANTITATIVE_REASONING: "Quantitative Reasoning",
    ANALYTICAL_WRITING_ASSESSMENT: "Analytical Writing Assessment",
    READING_COMPREHENSION: "Reading Comprehension",
    LISTENING_COMPREHENSION: "Listening Comprehension",
    SPEAKING: "Speaking",
    WRITING: "Writing",
    INTEGRATED_REASONING: "Integrated Reasoning",
    QUANTITATIVE_SECTION: "Quantitative Section",
    VERBAL_SECTION: "Verbal Section",
    LISTENING: "Listening",
    READING: "Reading",
    LITERACY: "Literacy",
    CONVERSATION: "Conversation",
    COMPREHENSION: "Comprehension",
    PRODUCTION:"production"
};

export enum EXPOSTORE{
    ACCESSTOKEN="Accesstoken",
    MAILID="Mailid",
    LAUNCH="Launch"
}

export enum ENDPOINTS{
    REVIEW_POST="post-review",
    REVIEW_EDIT="edit-review",
    DASHBOARD="dashboard",
    CHECK_USERNAME_AVAILABILITY="check-availability",
    EMAIL_VERIFY="verify-email",
    OTP_SEND="send-sms-otp",
    OTP_VERIFY="verify-sms-otp",
    PROFILE_PRIVATE="profile",
    PHONE="phone",
    COUNSELLOR_EVENTS="counsellor-events",
    SLOT_BOOK="book-slot",
    SLOTS_BOOKED="booked-slots",
    RECOMMENDATIONS_GENERATE="generate-recommendations",
    SHORTLIST_ADD="add-to-short-list",
    SHORTLIST_EDIT="edit-short-list",
    PROFILE_UPLOAD="upload-profile",
    PROFILE_DELETE="delete-uploaded-profile",
    DOCUMENT_DOWNLOAD="download",
    APPLY="apply",
    APPLY_FORCE="apply-force",
    APPLY_OMIT_FORCE="apply-omit-force",
    APLLICATION_UPLOAD="upload-application",
    APPLICATION_DELETE="delete-uploaded-application",
    APPLICATION_REQUEST_CANCELLATION="request-cancellation",
    STUDENTS_ALL="all-students",
    STUDENTS_SINGLE="single-student",

    LISTINGS_UNIVERSITY="listings/universities",
    LISTINGS_COURSE="listings/courses",
    UNIVERSITY_SINGLE="single_university",
    COURSE_SINGLE="single_course",
    PROFILE_PUBLIC="profile",
    PROFILES="profiles",
    COUNSELLORS="counsellors",
    UNIVERSITY="university",

    LOGIN="login",
    REGISTER_STUDENT="student-register",
    VERIFY_EMAIL="verify",
    TEAM_REGISTER="team-register",
    FORGOT_PASSWORD="forgot-password",
    OTP_VERIFY_AUTH="verify-otp",
    GOOGLE_AUTH="google/login",

    CHATS="chats",
    MESSAGE="message"
}

export enum WorkStyleEnum {
    FULL_TIME= "full-time",
    PART_TIME= "part-time",
    FREELANCING= "freelancing",
    CONTRACT= "contract",
    REMOTE= "remote",
    FLEXIBLE= "flexible",
    SHIFT_WORK= "shift work",
}

export enum IndustryTypeEnum {
    ENTERTAINMENT= "entertainment",
    FINANCE= "finance",
    MEDICAL= "medical",
    INFORMATION_TECHNOLOGY= "information technology",
    EDUCATION= "education",
    TEXTILE= "textile",
    MEDIA_AND_NEWS= "media and news",
    FOOD_PROCESSING= "food processing",
    HOSPITALITY= "hospitality",
    CONSTRUCTION_AND_ENGINEERING= "construction and engineering",
    LAW= "law",
    PAPER= "paper",
    REAL_ESTATE= "real estate",
    AUTOMOBILE= "automobile",
    AVIATION= "aviation",
    PHARMACEUTICAL= "pharmaceutical",
    FERTILIZERS= "fertilizers",
    ADVERTISING= "advertising",
    METALLURGY= "metallurgy",
    ENERGY= "energy",
    TELECOMMUNICATIONS= "telecommunications",
    RETAIL= "retail",
    MANUFACTURING= "manufacturing",
    AGRICULTURE= "agriculture",
    CHEMICALS= "chemicals",
    TRANSPORTATION_LOGISTICS= "transportation and logistics",
    CONSUMER_GOODS= "consumer goods",
    HEALTHCARE= "healthcare"
}

export enum SERVER_ENUMS{
    LOGIN_AGAIN="login again"
}
