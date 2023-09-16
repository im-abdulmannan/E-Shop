import React from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import Loader from "../Layout/Loader";
import EventCard from "./EventCard";

const Events = () => {
  const { allEvents, isLoading } = useSelector((state) => state.event);

  return (
    <>
      {" "}
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className={`${styles.section}`}>
            <div className={`${styles.heading}`}>
              <h1>Popular Events</h1>
            </div>

            <div className="w-full grid">
              <EventCard data={allEvents && allEvents[0]} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Events;
