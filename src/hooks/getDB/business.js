import { useState, useEffect } from "react";
import axios from "axios";

export default function business(ip) {
  const [businessDBState, setBusinessDBState] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${ip}:7001/api/business`)
      .then((res) => {
        setBusinessDBState((prev) => res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { businessDBState };
}
