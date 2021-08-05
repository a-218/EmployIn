import { useState, useEffect } from "react";
import axios from "axios";

export default function job_posting(ip) {
  const [jobPostingDBState, setJobPostingDBState] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${ip}:7001/api/job_posting`)
      .then((res) => {
        setJobPostingDBState((prev) => res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { jobPostingDBState };
}
