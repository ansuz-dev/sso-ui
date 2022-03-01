import { FunctionComponent } from "react";

export interface CardProps {
  children: JSX.Element;
}

declare const Card: FunctionComponent<CardProps>;

export default Card;
