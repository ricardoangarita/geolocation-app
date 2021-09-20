import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

//component
import BarStatus from './BarStatus';
import GeoLocation from './Geolocation';

const Jobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [coordinates, setcoordinates] = useState({
    jobLatitude: 0,
    jobLongitude: 0,
  });

  const history = useHistory();

  useEffect(() => {
    isAuthorized();
    getJobs();
  }, []);

  const isAuthorized = () => {
    if (localStorage.getItem('access_token') === null) {
      console.log('jobs isAuthorized');
      history.push('/');
    }
  };

  const getJobs = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const jobs = await axios.get(
        'https://coding-test.rootstack.net/api/jobs',
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setAllJobs(jobs.data.data);
    } catch (error) {
      alert(
        'An error has ocurred getting the jobs, please contact the administrator'
      );
    }
  };

  const getJobCoordinates = (lat, lng) => {
    setcoordinates({ jobLatitude: lat, jobLongitude: lng });
  };

  return (
    <div>
      <BarStatus />
      <div className="job-container">
        <ul className="jobs">
          {allJobs.map((job) => (
            <div className="job-item-button">
              <li className="job-item" key={job.id}>
                <img className="job-img" src={job.image} alt={job.title} />
                <span className="job-title">{job.title}</span>
              </li>
              <input
                className="go-button"
                type="button"
                value="Go"
                onClick={() => getJobCoordinates(job.latitude, job.longitude)}
              />
            </div>
          ))}
        </ul>
        <GeoLocation jobs={allJobs} coordinates={coordinates} />
      </div>
    </div>
  );
};

export default Jobs;
