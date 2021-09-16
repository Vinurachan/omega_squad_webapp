import { collection, getDocs } from "firebase/firestore";
import React from "react";
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
    <div class="container-fluid ">
      <div class="row">
        <div id="hero" class="col-xl-6 col-lg-7">
          Timetable Scheduling System
        </div>
        <div class="col-xl-6 col-lg-5 pt-5 pt-lg-0">
          <h3>Welcome to TMS</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
