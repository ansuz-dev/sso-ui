import { FunctionComponent, SyntheticEvent } from "react";

export interface RegisterFormProps {
  baseUrl: string;
  appId: string;
  showLogin?: boolean;
  showForgotPassword?: boolean;
  onLogin?: (evt:SyntheticEvent) => void;
  onRegister?: (data:any) => void;
  onForgotPassword?: (evt:SyntheticEvent) => void;
}

declare const RegisterForm: FunctionComponent<RegisterFormProps>;

export default RegisterForm;
