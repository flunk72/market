import { ReactNode } from "react";

export interface ButtonProps {
  htmlType: "submit" | "button"
  children: ReactNode;
}