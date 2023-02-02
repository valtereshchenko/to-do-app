import React from "react";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box
        component="img"
        alt="to-do"
        src="/to-do.jpg"
        sx={{
          height: "500px",
          width: "auto",
          position: "adbsolute",
          left: "420px",
        }}
      ></Box>
    </>
  );
}
