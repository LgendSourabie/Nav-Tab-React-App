import Duties from "./Duties";
const JobInfo = ({ title, company, dates, duties }) => {
  return (
    <div>
      <h2>{title}</h2>
      <span>{company}</span>
      <span>{dates}</span>
      <Duties duties={duties} />
    </div>
  );
};

export default JobInfo;
