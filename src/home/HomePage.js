import React from "react";

const HomePage = () => {
  // const fetchUser = async () => {
  //   const querySnapshot = await getDocs(collection(db, "users"));
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id);
  //     console.table(doc.data());
  //   });
  // };

  return (
    <div class="container-fluid">
      <div id="hero" class="row">
        <div class="col-xl-8 bg">
          <h2
            style={{
              color: "black",
              marginTop: 10,
              marginLeft: 30,
            }}
          >
            Timetable Scheduling System
          </h2>
        </div>
        <div
          class="col-xl-4 d-flex flex-column justify-content-center align-items-center "
          style={{ backgroundColor: "#D2DBEB" }}
        >
          <div style={{ textAlign: "center" }} data-aos="fade-up">
            <h1 style={{ color: "black" }}>Welcome to TSS</h1>
            <a href="#" class="btn-get-started scrollto">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
