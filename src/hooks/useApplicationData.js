import { useState, useEffect } from "react";
// import axios from "react-native-axios";
import axios from "axios";
import { ip } from "./ip";

export default async function useApplicationData() {
  await axios
    .get(`http://${ip}:7001/api/applicant`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });

  // Promise.resolve(
  //   axios.get("/api/applicant").then((res) => {
  //     console.log(res);
  //   })
  // );
}
