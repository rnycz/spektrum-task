import React, { useEffect, useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import profileIcon from "../../assets/profileIcon.svg";
import acceptIcon from "../../assets/acceptIcon.svg";
import { useFetch } from "../../hooks/useFetch";
import { UseFetchType } from "../../assets/types";

export const Profile: React.FC = () => {
  const [peopleID, setPeopleID] = useState<number>(1);
  const { data, loading, error, makeApiCall }: UseFetchType = useFetch(
    "https://swapi.py4e.com/api/people/",
    peopleID
  );
  useEffect(() => {
    makeApiCall();
    setPeopleID(2);
    // eslint-disable-next-line
  }, []);
  const handleFetch = (): void => {
    setPeopleID((prev) => prev + 1);
    makeApiCall();
  };

  return (
    <>
      <div className="profile-container">
        <Header />
        <div className="profile">
          <img
            src="https://picsum.photos/534/383.jpg"
            alt="profile"
            className="profile-image"
          />
          <div className="profile-information">
            {loading && <span>Loading profile...</span>}
            {error && <span>{error}</span>}
            {data &&
              data.map(({ name, eye_color, birth_year }) => (
                <div key={data.length} className="profile-single">
                  <p>{name}</p>
                  <span>age: {birth_year}</span>
                  <span>eye color: {eye_color}</span>
                </div>
              ))}
            <div className="profile-icons">
              <img src={profileIcon} alt="profile icon" />
              <img src={acceptIcon} alt="accept icon" />
            </div>
          </div>
        </div>
        <button className="profile-button" onClick={handleFetch}>
          next profiles
        </button>
      </div>
    </>
  );
};
