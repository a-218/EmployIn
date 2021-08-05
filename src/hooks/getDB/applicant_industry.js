import { useState, useEffect } from "react";
import axios from "axios";

export default function applicant_industry(ip) {
  const [applicantIndustryDBState, setApplicantIndustryDBState] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${ip}:7001/api/applicant_industry`)
      .then((res) => {
        setApplicantIndustryDBState((prev) => res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { applicantIndustryDBState };
}
