import { Box } from "@mui/material";
import React from "react";
import ContectForm from "../../components/contectForm/ContectForm";
import ContectInfo from "../../components/contectInfo/ContectInfo";

function Contect() {
  return (
    <Box mt={10}>
      <ContectInfo />
      <ContectForm />
    </Box>
  );
}

export default Contect;
