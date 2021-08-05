import axios from "axios";
import { ip } from "./ip";
import job_posting from "./getDB/job_posting";

export default async function useApplicationData() {
  const { jobPostingDBState } = job_posting(ip);
  console.log(jobPostingDBState);
}
