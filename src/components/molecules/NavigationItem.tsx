import type React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Icon } from "../atoms/Icon";

interface NavigationItemProps {
  title: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

export function NavigationItem({
  title,
  icon,
  selected,
  onClick,
  children,
}: NavigationItemProps) {
  return (
    <ListItemButton selected={selected} onClick={onClick}>
      <ListItemIcon>
        <Icon name={icon as any} />
      </ListItemIcon>
      <ListItemText primary={title} />
      {children}
    </ListItemButton>
  );
}
