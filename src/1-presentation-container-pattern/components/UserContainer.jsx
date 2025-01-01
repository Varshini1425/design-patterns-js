// Fetches user data and manages the logic. --- business logic

import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

const UserContainer = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [currentIndex, setCurrentIndex] = useState(1); // Start from user ID 1
  const [isFetching, setIsFetching] = useState(true); // Control fetching

  useEffect(() => {
    if (!isFetching) return; // If not fetching, do nothing

    const fetchData = () => {
      fetch(`https://jsonplaceholder.typicode.com/users/${currentIndex}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("User not found");
          }
          return response.json();
        })
        .then((data) => {
          setUser({ name: data.name, email: data.email });
          setCurrentIndex((prevIndex) => (prevIndex < 10 ? prevIndex + 1 : 1)); // Loop back to 1 after 10
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    };

    // Fetch data every second
    const intervalId = setInterval(fetchData, 2000);

    // Cleanup interval when component unmounts or when isFetching changes
    return () => clearInterval(intervalId);
  }, [isFetching, currentIndex]); // Add `isFetching` as a dependency

  const handleEdit = () => {
    alert(`Edit button clicked for ${user.name}`);
  };

  const toggleFetching = () => {
    setIsFetching((prev) => !prev); // Toggle fetching on button click
  };

  return (
    <div>
      <UserCard name={user.name} email={user.email} onEdit={handleEdit} />
      <button onClick={toggleFetching}>
        {isFetching ? "Stop Fetching" : "Start Fetching"}
      </button>
    </div>
  );
};

export default UserContainer;




