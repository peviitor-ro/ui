import React from "react";
import { faBuilding, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./JobCard.module.scss";

const JobCard = ({ job_title, company, country, city }) => {
  const {
    jobCard,
    jobCard__title,
    jobCard__details,
    jobCard__details__country,
    jobCard__details__company,
  } = styles;
  return (
    <div className={jobCard}>
      <h2 className={jobCard__title}>{job_title}</h2>
      <div className={jobCard__details}>
        <h3 className={jobCard__details__company}>
          <FontAwesomeIcon icon={faBuilding} />
          {` ${company} `}
        </h3>
        <h3 className={jobCard__details__country}>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> {` ${city}, ${country}`}
        </h3>
      </div>
    </div>
  );
};

export default JobCard;
