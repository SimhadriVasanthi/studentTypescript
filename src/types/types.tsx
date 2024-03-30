
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