import { FC } from "react";
import { IndustryTypeEnum, WorkStyleEnum } from "../assets/enums";

export type RoutingProps = {
    link: string;
  };
  export type ModalDialogprops<additionalDataType> = {
    open: boolean;
    handleClose:Function ;
    children?: React.ReactNode;
    additionalData?:additionalDataType
  };
  export type loginProps = {
    email: string;
    password: string;
  };
  export type initialData ={
    requestStatus: string;
    responseStatus: string;
    haveAnIssue: boolean;
    issue: string;
    data: any;
  }
  export type expandCardProps = {
    title: string;
    children: React.ReactNode;
  };

  export type buttonProps ={
    children:string,
    handleSubmit:Function,
    width:string,
  }
  export type sideMenu = {
    title?: string;
    link?: string;
  };


interface Event{
    name:string,
    data?:any,
    triggerBy?:{
        componentName?:string,
        id?:string | number,
    }
}

interface Component<miscType,stateType>{
    state?:stateType,
    nonState?:{
        id?:string | number,
        structuralKey?:string|number,
        eventHandler?:(event:Event)=>void,
        exposedEvents?:string[],
        initialValue?:any,
        misc?:miscType
    }
}

export interface Form{
    fields:FormField[],
    title?:string,
    submitText?:string,
    asynchronousSubmit:boolean
}

export interface FormField{
    title:string,
    container:Container,
    initialValue?:string
}

export interface FormContainer{
    id:string,
    state:'focus' | 'blur',
    data:any
}

// export interface Location{
//     access:"denied"|"granted",
//     coords?:{
//         accuracy:number | null,
//         altitude:number | null,	
//         altitudeAccuracy:number | null	,
//         heading:number | null,	//north is 0 degrees, east is 90 degrees, south is 180 degrees
//         latitude:number	,
//         longitude:number,	
//         speed:number | null
//     },	
//     timestamp?:number
// }

export interface Dropdown{
    options:string[]
}

// export interface Asynchronousbutton{
//     idleText:string,
//     successText:string,
//     failureText:string
// }

//export type AsynchronousbuttonModes="idle" | "loading" | "success" | "failure"

// export interface FormContainerNonState{
//     key:string,
//     container:Container
// }

// export interface Page{
//     id:number|string,
//     page:{
//         component:string,
//         data?:any,
//         initialValue?:any,
//         eventHandler?:(event:Event)=>void
//     },
//     title:{
//         show:boolean,
//         value?:string
//     },
//     visibility?:"seen"|"partiallySeen"|"hidden"
// }

// export interface NavItemNonState{
//     icon:ImageSourcePropType,
//     title:string
// }

// export interface NavState{
//   selected:number
// }

export interface Listings_University{
    location: {
        country: string,
        state: string,
        city: string
    },
    currency: {
        symbol: string,
        code: string
    },
    _id: string,
    ranking: {
        _id: string,
        rank: number,
        source: string
    }[],
    name: string,
    logoSrc: string,
    type: string,
    establishedYear: number,
    cost:{
        name: string,
        lowerLimit: number,
        upperLimit: number,
        _id: string
    } [],
    courses: {
        _id: string,
        name: string
    }[]
}

export type ListItemState=any[]

export interface ListState{
    list:any[],
    isLoading?:boolean
}

export interface ListNonState{
    containers:Container[],
    containerDimensions?:Dimension,
    mode:"list" | "swiper" | "verticalstack",
    emptyListMessage?:string,
    direction:"horizontal" | "vertical",
    tabBar?:{
        show?:boolean,
        container:Container
    },
    gap?:number
}

export interface Container{
    id?:string,
    component:FC<Component<any,any>>,
    data?:any
}

// export type TabState={index:Animated.Value}

// export interface TabbarNonState{
//     tabs:TabNonState[],
//     orientation:"horizontal" | "vertical"
// }

// export interface TabNonState{
//     title:string,
//     index:number
// }

export interface Application{
        _id: string,
        university: {
            location: {
                country: string,
                state: string,
                city:string
            },
            _id: string,
            name: string,
            logoSrc: string,
            type: string,
            establishedYear: number
        },
        course: {
            tuitionFee: {
                tuitionFee: number,
                tuitionFeeType: string
            },
            currency: {
                symbol: string,
                code: string
            },
            _id:string,
            name: string,
            subDiscipline: string,
            schoolName: string,
            discipline: string,
            studyLevel:string,
            duration: 12,
            studyMode: string[],
            startDate:{
                _id: string,
                courseStarting: string,
                Deadline:string,
                courseStartingMonth: number,
                deadlineMonth: number
            }[]
        },
        intake: string,
        user: string,
        processCoordinator: string,
        counsellor: string,
        cancellationRequest: boolean,
        log: {
            status: string,
            stages: {
                name: string,
                updatedAt: string,
                _id: string
            }[],
            _id: string
        }[],
        status:string,
        stage: string,
        docChecklist: {
            name: "LOR",
            isChecked: false,
            doc: null,
            _id: "6602d07af1472ae551619993"
        }[],
        createdAt: string,
        updatedAt: string,
        __v: number
}

export interface LoaderState{
    gif:string ,
    text?:string
}

export interface NotificationsBannerState{
    notifications:Notification[],
    isLoading:boolean
}

export type Notification={
    id:string|number,
    message:string,
    image:string
}

export interface UserStatus{
   isAuthorized:boolean,
   isRegistered:boolean,
   role:"guest" | "student" | "developer" | "anonymous"
}

export interface Error{
    show:boolean,
    message:string
}

export interface Dimension{
    width?:number,
    height?:number
}

export interface serverResponse{
    success:boolean,
    data:any,
    message:string,
    AccessToken?:string
}

export interface StoreItem<datatype>{
    requestStatus:"not_initiated" | "initiated",
    responseStatus:"recieved" | "not_recieved",
    haveAnIssue:boolean,
    issue:string,
    data:datatype
}

export interface StoreAction<payloadType>{
    type:"string",
    payload:payloadType
}

export interface Store{
    workexperience:StoreItem<WorkExperience[]>,
    skills:StoreItem<any>,
    educationhistory:StoreItem<any>,
    shortlistedcourses:StoreItem<ShortlistedCourse[]>,
    recommendedcourses:StoreItem<any>,
    chats:StoreItem<{advisors:Chat[],community:Chat[]}>,
    messages:StoreItem<Message[]>,
    profile:StoreItem<Profile>,
    counsellorinfo:StoreItem<any>
    testscores:StoreItem<any>,
    preferences:StoreItem<any>,
    applications:StoreItem<Application[]>,
    documents:StoreItem<any>,
    communityposts:StoreItem<any>,
    communityfeed:StoreItem<any>,
    communityjoined:StoreItem<any>,
    counsellorbookedslots:StoreItem<any>,
    userauthstatus:StoreItem<UserStatus>,
    error:StoreItem<Error>,
    notifications:StoreItem<Notification[]>,
    userlocation:StoreItem<Location>
    //event:StoreItem<Event|null>
}

// export interface BackendApi_Lib{
//     requestType:"GET" | "POST" | "PUT" | "DELETE" |"PATCH",
//     data:any,
//     dataType?:"queryparams" | "pathvariable",
//     contentType:"json" | 'multipart/form-data',
//     endpoint?:string,
//     usingCustomUrl:boolean,
//     responseType:"json" | "blob"
// }

// export interface fetchObject{
//     method:"GET" | "POST" | "PUT" | "DELETE" | "PATCH",
//     body?:any,
//     headers?:any
// }

export interface ShortlistedCourse{
    university: {
        location: {
            country: string,
            state:  string,
            city:  string
        },
        _id:  string,
        name: string,
        logoSrc:  string,
        type:  string,
        establishedYear: number
    },
    course: {
        tuitionFee: {
            tuitionFee: number,
            tuitionFeeType: string
        },
        currency: {
            symbol:  string,
            code:  string
        },
        _id:  string,
        name:  string,
        subDiscipline:  string,
        schoolName: string,
        discipline: string,
        studyLevel:  string,
        duration:  string,
        studyMode: string [],
        startDate: {
            _id:  string,
            courseStarting:  string,
            Deadline:  string,
            courseStartingMonth: number,
            deadlineMonth: number
        }[]
    },
    _id: string
}

export type chatParticipantActions="online" | "typing" | "offline" | "inchat"

export interface Chat{
    _id: string,
    participants:Participant[],
    admins: [],
    unSeenMessages:{
            message: {
                _id: string,
                sender: {
                    _id: string,
                    displayPicSrc: string,
                    email: string,
                    userType: string,
                    firstName: string,
                    lastName: string
                },
                content: string,
                iv: string,
                chat: string,
                createdAt: string,
                updatedAt: string,
                __v:number
            },
            seen:string [],
            _id: string
        }[],
    createdAt: string,
    updatedAt: string,
    __v: number,
    lastMessage?: {
        _id: string,
        sender: string,
        content: string,
        iv: string,
        chat: string,
        createdAt:string,
        updatedAt: string,
        __v: number
    }
}

export interface Participant{
    _id: string,
    displayPicSrc: string,
    email: string,
    userType: UserRoles,
    firstName: string,
    lastName: string,
    activity:chatParticipantActions,
    lastSeenMessageId?:string
}

export interface Message{
    _id: string,
    sender?: {
        _id: string,
        displayPicSrc: string,
        email: string,
        userType: string,
        firstName: string,
        lastName: string
    },
    content?:string,
    iv?: string,
    chat?: string,
    createdAt?: string,
    updatedAt?: string,
    type:"seen" | "normal" | "typing"
    __v?: number
}

export interface WorkExperience{
    companyName:string,
    sector:IndustryTypeEnum
    type:WorkStyleEnum
    startDate:string
    endDate:string
    _id:string
}

export interface UniversityListObj{
    location: {
        country:string,
        state: string,
        city: string
    },
    currency: {
        symbol: string,
        code: string
    },
    _id: string,
    name: string,
    logoSrc: string,
    type: string,
    establishedYear: number,
    ranking:{
        _id: string,
        rank: number,
        source: string
    }[],
    cost: {
        _id:string,
        name: string,
        lowerLimit: number,
        upperLimit: number
    }[],
    courses: {
        _id: string,
        name:string
    }[]
}

// export interface FilterSelected{
//     type:string,
//     data:string[]
// }

// export type Filter={
//     type:string,
//     options:string[],
//     selectionType:"single"|"multi"
// }

export interface EducationHistory{
    school: EducationHistory_School | undefined,
    plus2:EducationHistory_Plus2 | undefined,
    underGraduation: EducationHistory_UnderGraduation | undefined,
    postGraduation:EducationHistory_PostGraduation | undefined,
}

export interface EducationHistory_School{
    instituteName:string,
    city: string,
    state: string,
    country: string,
    languageOfInstruction: string, // enum hindi telugu eng other
    gradingSystem: string, // enum % grade gpa 
    board: string,// enum 
    totalScore: string, // for grade A+..., for Percent 0-100, gpa 0-10
    startDate: Date,
    endDate: Date,
}

export interface EducationHistory_Plus2 {
    instituteName: string,
    city: string,
    state: string,
    country: string,
    languageOfInstruction: string, // enum hindi telugu eng other
    gradingSystem: string, // enum % grade gpa 
    board: string,// enum ISC, state, 
    totalScore: string, // for grade A+..., for Percent 0-100, gpa 0-10
    startDate: Date,
    endDate: Date,
    stream: string, // enum mpc,bipc,mec....
    backlogs:number,
    isCompleted: boolean
}

export interface EducationHistory_UnderGraduation{
    instituteName:string,
    city: string,
    state: string,
    country: string,
    programMajor: string,// enum  eee,ese,ece
    degreeProgram: string,// enum btech,bedu,bsc.... 
    gradingSystem: string,// enum % grade gpa cgpa
    affiliatedUniversity: string,
    totalScore:number, // for grade A+..., for Percent 0-100, gpa 0-10
    startDate: Date,
    endDate:Date,
    backlogs:number,
    isCompleted: boolean
}

export interface EducationHistory_PostGraduation {
    instituteName:string,
    city: string,
    state: string,
    country: string,
    specialization: string,// enum  power and energy systems,computer engineering,data science
    degreeProgram: string,// enum mtech,medu,msc.... 
    gradingSystem: string,// enum % grade gpa cgpa
    affiliatedUniversity: string,
    totalScore:number, // for grade A+..., for Percent 0-100, gpa 0-10
    startDate: Date,
    endDate:Date,
    backlogs:number,
    isCompleted: boolean
}

export interface Profile{
    _id:string,
    personalDetails: Personalinfo,
    familyDetails: {
        GuardianFirstName: string,
        GuardianLastName: string,
        GuardianEmail: string,
        GuardianOccupation: string,
        GuardianQualification: string,
        RelationshipWithStudent: string, // enum father, mother, spouse, guardian
        GuardianContactNumber:{ 
            countryCode: string, 
            number: string 
        },
    }[],
    emailVerified: boolean,
    emailVerificationString: string,
    emailVerificationExpiry:Date,
    phoneVerified: boolean,
    phoneVerificationExpiry: Date,
    phoneOtp: string,
    LeadSource: string,
    counsellor: User,
    processCoordinator: User,
    visaExpert: User,
    loanExpert:User,
    isPlanningToTakeAcademicTest: boolean,
    isPlanningToTakeLanguageTest: boolean,
}

export interface Personalinfo{
    firstName:string,
    lastName:string,
    displayPicSrc:string,
    email:string,
    DOB: Date,
    Gender: string, // enum
    phone: {
        countryCode: string, 
        number: string 
    },
    temporaryAddress: {
        city: string,
        state: string,
        pinCode: number,
        country: string,
        addressLine1: string,
        addressLine2: string,
        addressLine3: string
    },
    permanentAddress: {
        city: string,
        state: string,
        pinCode: number,
        country: string,
        addressLine1: string,
        addressLine2: string,
        addressLine3: string
    },
    nationality: string,// enum
    countyOfBirth: string, // enum
    maritalStatus: string, // enum 
    validPassport: string,// enum yes no and processing
    validPermit: string,// enum yes no and processing,
    visaRejectedDetails: string,
}

export type UserRoles="student" | "guest" | "developer" | "member"

export interface User {
    _id: string,
    numberOfStudentsAssisted: number,
    name:string,
    displayPicSrc: string,
    email: string,
    userType: UserRoles
}

export interface Document{
    _id:string,
    name: string,
    contentType: string,
    createdAt: string
  }

export interface Documents{
    test:{
        languageProf:Document[]
        general:Document[]
    },
    workExperiences:Document[],
    personal:{
        resume:Document
        passportBD:Document
        passportADD:Document
    },
    academic:{
        degree:Document
        secondarySchool:Document
        plus2:Document
        bachelors:{
            transcripts:Document,
            bonafide:Document,
            CMM:Document,
            PCM:Document,
            OD:Document
        }
        masters:{
            transcripts:Document,
            bonafide:Document,
            CMM:Document,
            PCM:Document,
            OD:Document
        }
    }
}
