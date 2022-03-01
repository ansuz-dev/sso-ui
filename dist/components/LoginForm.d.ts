import { FunctionComponent, SyntheticEvent } from "react";

export interface LoginFormProps {
  appId: string;
  showRegister?: boolean;
  showForgotPassword?: boolean;
  onLogin?: (data:any) => void;
  onRegister?: (evt:SyntheticEvent) => void;
  onForgotPassword?: (evt:SyntheticEvent) => void;
}

declare const LoginForm: FunctionComponent<LoginFormProps>;

export default LoginForm;
