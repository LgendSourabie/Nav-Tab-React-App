import { v4 as uuidv4 } from "uuid";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty, i, arr) => {
        return (
          <div key={i} className="job-desc">
            <span className="job-icon">
              <MdKeyboardDoubleArrowRight />
            </span>
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
