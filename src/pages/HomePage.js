import { collection, getDocs } from "firebase/firestore";
import React from "react";
import NavBar from "../components/NavBar";
import { db } from "../firebase/firebase";

const HomePage = () => {
  const fetchUser = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id);
      console.table(doc.data());
    });
  };

  return (
    <div className="container">
      <NavBar />
      <div style={{ marginTop: 100 }}>
        <button
          onClick={(e) => {
            e.preventDefault();
            fetchUser();
          }}
          type="Submit"
        >
          Retrieve
        </button>
      </div>
    </div>
  );
};

export default HomePage;
