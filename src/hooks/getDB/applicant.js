import { useState, useEffect } from "react";
import axios from "axios";

export default function applicant(ip) {
  const [applicantDBState, setApplicantDBState] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${ip}:7001/api/applicant`)
      .then((res) => {
        setApplicantDBState((prev) => res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { applicantDBState };
}
