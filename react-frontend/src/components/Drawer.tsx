import React from "react";
import { useNavigate } from "react-router";
import {
  Drawer as MUIDrawer,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddTaskIcon from "@mui/icons-material/AddTask";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Drawer() {
  const navigate = useNavigate();
  const listItems = [
    { text: "Home", icon: <HomeIcon />, onClick: () => navigate("/") },
    {
      text: "Task Lisk",
      icon: <AddTaskIcon />,
      onClick: () => navigate("/tasks"),
    },
    { text: "Login", icon: <LoginIcon />, onClick: () => navigate("/login") },
    {
      text: "Registration",
      icon: <AppRegistrationIcon />,
      onClick: () => navigate("/register"),
    },
    {
      text: "Logout",
      icon: <LogoutIcon />,
      onClick: () => navigate("/"),
    },
  ];

  return (
    <MUIDrawer open variant="permanent">
      <List>
        {listItems.map((item, index) => (
          <ListItem key={item.text} disablePadding onClick={item.onClick}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </MUIDrawer>
  );
  // check to see all the avaiable props for the Drawer https://mui.com/material-ui/api/drawer/
  // variant='permanent' -- means that the drawer should be visible at all times
}
