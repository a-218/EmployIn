import { useState, useEffect } from "react";
import axios from "axios";

export default function job_application(ip) {
  const [jobApplicationDBState, setJobApplicationDBState] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${ip}:7001/api/job_application`)
      .then((res) => {
        setJobApplicationDBState((prev) => res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { jobApplicationDBState };
}
