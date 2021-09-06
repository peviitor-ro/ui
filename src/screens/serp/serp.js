import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import JobCard from "../../components/JobCard/JobCard";
import styles from "./serp.module.scss";

const Serp = () => {
  const { searchResults } = useSelector((state) => state);
  const { searchResultsList, searchResultsList__link } = styles;
  return (
    <div className={searchResultsList}>
      {searchResults.map((job) => (
        <Link
          className={searchResultsList__link}
          to={{ pathname: job.job_link }}
          target="_blank"
          key={job.id}
        >
          {" "}
          <JobCard {...job} />{" "}
        </Link>
      ))}
    </div>
  );
};
export default Serp;
