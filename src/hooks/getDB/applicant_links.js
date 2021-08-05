import { useState, useEffect } from "react";
import axios from "axios";

export default function applicant_links(ip) {
  const [applicantLinksDBState, setApplicantLinksDBState] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${ip}:7001/api/applicant_links`)
      .then((res) => {
        setApplicantLinksDBState((prev) => res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { applicantLinksDBState };
}
