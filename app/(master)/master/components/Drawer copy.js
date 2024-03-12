"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(true);

  const router = useRouter(); // useRouter 훅으로 router 인스턴스를 가져옴


  const DrawerList = (
    <Box sx={{ width: '10vw' }} role="presentation">
      <List>
        {[
          { name: "홈", url: "/" },
          { name: "내정보", url: "/master/myinfo" },
          { name: "문의사항", url: "/master/query" },
          { name: "손Talk", url: "/master/talk" },
        ].map((elem, index) => (
          <ListItem key={index}>
            <ListItemButton onClick={()=>router.push(elem.url)}>
              <ListItemText primary={elem.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: '10vw',
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: '10vw',
            boxSizing: "border-box",
          },
        }}
      >
        {DrawerList}
      </Drawer>
      {/* <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: (theme) =>
            theme.transitions.create("margin", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          ...(open && {
            marginLeft: `250px`,
            transition: (theme) =>
              theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
          }),
        }}
      >
      </Box> */}
    </div>
  );
}
