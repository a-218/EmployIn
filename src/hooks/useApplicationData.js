import { ip } from "./ip";
import applicant_industry from "./getDB/applicant_industry";
import applicant_links from "./getDB/applicant_links";
import applicant from "./getDB/applicant";
import business from "./getDB/business";
import industry from "./getDB/industry";
import job_application from "./getDB/job_application";
import job_posting from "./getDB/job_posting";

export default function useApplicationData() {
  // Initialize all databases
  const { applicantIndustryDBState } = applicant_industry(ip);
  const { applicantLinksDBState } = applicant_links(ip);
  const { applicantDBState } = applicant(ip);
  const { businessDBState } = business(ip);
  const { industryDBState } = industry(ip);
  const { jobApplicationDBState } = job_application(ip);
  const { jobPostingDBState } = job_posting(ip);
  console.log('################################', { applicantDBState })
  // Return all database to be used
  return {
    applicantIndustryDBState,
    applicantLinksDBState,
    applicantDBState,
    businessDBState,
    industryDBState,
    jobApplicationDBState,
    jobPostingDBState,
  };
}
