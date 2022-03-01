import { FunctionComponent, SyntheticEvent } from "react";

export interface ForgotPasswordFormProps {
  appId: string;
  showLogin?: boolean;
  showRegister?: boolean;
  onLogin?: (evt:SyntheticEvent) => void;
  onRegister?: (evt:SyntheticEvent) => void;
  onForgotPassword?: (data:any) => void;
}

declare const ForgotPasswordForm: FunctionComponent<ForgotPasswordFormProps>;

export default ForgotPasswordForm;
