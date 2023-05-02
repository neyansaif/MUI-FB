import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import PagesIcon from "@mui/icons-material/Pages";
import GroupsIcon from "@mui/icons-material/Groups";
import StoreIcon from "@mui/icons-material/Store";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Switch } from "@mui/material";

export const Sidebar = ({ mode, setMode }) => {
   return (
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
         <Box position="fixed">
            <List>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#home">
                     <ListItemIcon>
                        <HomeIcon />
                     </ListItemIcon>
                     <ListItemText primary="Homepage" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#pages">
                     <ListItemIcon>
                        <PagesIcon />
                     </ListItemIcon>
                     <ListItemText primary="Pages" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#groups">
                     <ListItemIcon>
                        <GroupsIcon />
                     </ListItemIcon>
                     <ListItemText primary="Groups" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#market_place">
                     <ListItemIcon>
                        <StoreIcon />
                     </ListItemIcon>
                     <ListItemText primary="Marketplace" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton>
                     <ListItemIcon>
                        <PersonIcon />
                     </ListItemIcon>
                     <ListItemText primary="Friends" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton>
                     <ListItemIcon>
                        <SettingsIcon />
                     </ListItemIcon>
                     <ListItemText primary="Settings" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton>
                     <ListItemIcon>
                        <AccountBoxIcon />
                     </ListItemIcon>
                     <ListItemText primary="Profile" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton>
                     <ListItemIcon>
                        <DarkModeIcon />
                     </ListItemIcon>
                     <Switch
                        onChange={(e) =>
                           setMode(mode === "light" ? "dark" : "light")
                        }
                     />
                  </ListItemButton>
               </ListItem>
            </List>
         </Box>
      </Box>
   );
};
