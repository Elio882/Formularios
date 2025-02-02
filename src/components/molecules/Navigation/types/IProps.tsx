import React from "react";
export interface NavItemProps extends React.ComponentProps<"button"> {
    name: string;
    url: string;
    icon: React.ReactNode;
}