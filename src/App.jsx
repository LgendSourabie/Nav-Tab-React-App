import { useEffect } from "react";
import { useState } from "react";
import JobInfo from "./JobInfo";
import Loading from "./Loading";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [data, setData] = useState([]);
  const [singleJob, setSingleJob] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const responseToJson = await response.json();
      if (!response.ok) {
        throw new Error(`Something went wrong, try later ${response.status}`);
      }
      setData(responseToJson);
      setSingleJob([responseToJson[0]]);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showSelectedCompany = (id) => {
    const comp = data.filter((a) => a.id === id);
    setSingleJob(comp);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="jobs-center">
      <section className="btn-container">
        {data.map((d) => {
          const { id, company } = d;
          return (
            <h4 key={id}>
              <button
                className={
                  singleJob[0].id === id ? "job-btn active-btn" : "job-btn"
                }
                onClick={() => showSelectedCompany(id)}
              >
                {company}
              </button>
            </h4>
          );
        })}
      </section>
      <div>
        {singleJob.map((d) => (
          <ul key={d.id}>
            <JobInfo {...d} />
          </ul>
        ))}
      </div>
    </main>
  );
};
export default App;
