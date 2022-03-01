import { FunctionComponent } from "react";

export interface AppInfoProps {
  appId: string;
  className?: string;
}

declare const AppInfo: FunctionComponent<AppInfoProps>;

export default AppInfo;
