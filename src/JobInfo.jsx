import Duties from "./Duties";
const JobInfo = ({ title, company, dates, duties }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="job-company">{company}</div>
      <div className="job-date">{dates}</div>
      <Duties duties={duties} />
    </div>
  );
};

export default JobInfo;
