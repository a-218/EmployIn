import { useState, useEffect } from "react";
import axios from "axios";

export default function industry(ip) {
  const [industryDBState, setIndustryDBState] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${ip}:7001/api/industry`)
      .then((res) => {
        setIndustryDBState((prev) => res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { industryDBState };
}
