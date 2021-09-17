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
    <div class="container-fluid">
      <div id="hero" class="row">
        <div class="col-xl-8 bg">Timetable Scheduling System</div>
        <div
          class="col-xl-4 d-flex justify-content-center "
          style={{ backgroundColor: "red" }}
        >
          <h3>Welcome to TMS</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
