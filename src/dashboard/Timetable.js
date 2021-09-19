import React from "react";

const Timetable = () => {
  return (
    <div id="hero">
      <div class="container-fluid" style={{ backgroundColor: "#D2DBEB" }}>
        <div class="d-flex flex-column align-items-center ">
          <h3 style={{ color: "black", fontWeight: "bold", marginTop: 20 }}>
            My Timetable
          </h3>
        </div>
        <div class="row mx-auto">
          <div
            class="col-xl-2"
            style={{ backgroundColor: "#8D9F98", marginBottom: "5%" }}
          >
            <h3 style={{ textAlign: "center" }}>Subjects</h3>
          </div>
          <div class="col-xl-10" style={{ marginBottom: "5%" }}>
            <div class="day time">
              <div class="day_title" style={{ color: "black" }}>
                Time
              </div>
              <div class="hour">07:50-08:30</div>
              <div class="hour">08:30-09:10</div>
              <div class="hour">09:10-09:50</div>
              <div class="hour">09:50-10:30</div>
              <div
                class="hour"
                style={{ backgroundColor: "#DAD5D5", color: "black" }}
              >
                INTERVAL
              </div>
              <div class="hour">10:50-11:30</div>
              <div class="hour">11:30-12:10</div>
              <div class="hour">12:10-12:50</div>
              <div class="hour">12:50-01:30</div>
            </div>

            <div class="day monday">
              <div class="day_title">Monday</div>
              {/* <div class="class red" data-tooltip="English Literature">
                2ELI1 [C1]
              </div>
              <div
                class="class b15 blue"
                data-tooltip="Probability and Statistics"
              >
                2MPS1 [K2]
              </div>
              <div class="class b15 grey" data-tooltip="German">
                2GER1 [C1]
              </div>
              <div
                class="class short blue"
                data-tooltip="Additional Probability and Statistics"
              >
                2MPS+ [K2]
              </div> */}
            </div>

            <div class="day tuesday">
              <div class="day_title">Tuesday</div>
              {/* <div class="class gray" data-tooltip="Economics">
                2ECO3 [A1]
              </div>
              <div class="class b15 orange" data-tooltip="German History">
                2GHI1 [C0]
              </div>
              <div class="class b15 purple" data-tooltip="Ethics">
                2ETH1 [C2]
              </div>
              <div
                class="class b45 red"
                data-tooltip="English Language: Writing"
              >
                2ELA+ [A3]
              </div>
              <div class="class red" data-tooltip="English Language">
                2ELA0 [C0]
              </div> */}
            </div>

            <div class="day wednesday">
              <div class="day_title">Wednesday</div>
              {/* <div class="class short spacing"></div>
              <div class="class short yellow" data-tooltip="EU Politics">
                2EUP1 [C0]
              </div>
              <div class="class b15 spacing"></div>
              <div class="class b15 short navy" data-tooltip="Physics">
                2PHY1 [F2]
              </div>
              <div class="class short spacing"></div>
              <div
                class="class b15 turquoise"
                data-tooltip="Physical Education: Swimming"
              >
                2SWM3
              </div> */}
            </div>

            <div class="day thursday">
              <div class="day_title">Thursday</div>
              {/* <div class="class grey" data-tooltip="German">
                2GER1 [C1]
              </div>
              <div
                class="class b15 blue"
                data-tooltip="Advanced Integral Calculus"
              >
                2MIC1 [K2]
              </div>
              <div class="class b15 red" data-tooltip="English Literature">
                2ELI1 [C1]
              </div>
              <div
                class="class short blue"
                data-tooltip="Additional Basic Integral Calculus"
              >
                1CAL+ [K2]
              </div>
              <div class="class short yellow" data-tooltip="UK Politics">
                2UKP5 [C2]
              </div>
              <div class="class short yellow" data-tooltip="German Politics">
                2GEP5 [C2]
              </div>
              <div class="class green" data-tooltip="Media Studies">
                2MDS2 [A1]
              </div> */}
            </div>

            <div class="day friday">
              <div class="day_title">Friday</div>
              {/* <div class="class spacing"></div>
              <div class="class b15 green" data-tooltip="Architechture">
                2ARC4 [A3]
              </div>
              <div class="class b15 navy" data-tooltip="Physics">
                2PHY1 [F2]
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
