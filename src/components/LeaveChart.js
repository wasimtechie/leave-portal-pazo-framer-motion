import React, { useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import WavyText from "./WavyText";

const LeaveChart = () => {
  const name = "Hi Pazo E1";
  const welcome = "Welcome Back 👋";
  const percentage = 66;
  const days = 15;
  return (
    <div className="container">
      <div>

        <WavyText text={name} style={{ fontSize: "30px", paddingLeft: "10px" }} />
        <WavyText
          text={welcome}
          style={{ fontSize: "40px", paddingLeft: "10px" }}
          />
        </div>
      <div className="pt-5 row">
        <div className="col mx-2">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            <div
              className=" card text-center shadow rounded"
              style={{ width: "18rem", border: "none" }}
            >
              <div className="card-body">
                <h5 className="card-title">Sick Leave</h5>
                <div
                  className=""
                  style={{
                    border: "15px",
                    borderStyle: "solid",
                    borderRadius: "300px",
                    padding: "8px",
                    borderColor: "#C0C0C0",
                  }}
                >
                  <CircularProgressbarWithChildren
                    value={55}
                    styles={buildStyles({
                      pathTransitionDuration: 2.15,
                      pathColor: "red",
                    })}
                  >
                    <h2
                      style={{
                        padding: "0px",
                        margin: "0px",
                        fontSize: "28px",
                      }}
                    >
                      15/20
                    </h2>
                    <p>Days</p>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="col mx-2">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            <div
              className=" card text-center shadow rounded "
              style={{ width: "18rem", border: "none" }}
            >
              <div className="card-body">
                <h5 className="card-title">Casual Leave</h5>
                <div
                  className=""
                  style={{
                    border: "15px",
                    borderStyle: "solid",
                    borderRadius: "300px",
                    padding: "8px",
                    borderColor: "#C0C0C0",
                  }}
                >
                  <CircularProgressbarWithChildren
                    value={45}
                    styles={buildStyles({
                      pathTransitionDuration: 2.15,
                      pathColor: "turquoise",
                    })}
                  >
                    <h2
                      style={{
                        padding: "0px",
                        margin: "0px",
                        fontSize: "28px",
                      }}
                    >
                      15/20
                    </h2>
                    <p>Days</p>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="col mx-2">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            <div
              className=" card text-center shadow rounded "
              style={{ width: "18rem", border: "none" }}
            >
              <div className="card-body">
                <h5 className="card-title">Optional Leave</h5>
                <div
                  className=""
                  style={{
                    border: "15px",
                    borderStyle: "solid",
                    borderRadius: "300px",
                    padding: "8px",
                    borderColor: "#C0C0C0",
                  }}
                >
                  <CircularProgressbarWithChildren
                    value={70}
                    styles={buildStyles({
                      pathTransitionDuration: 2.15,
                      pathColor: "#54aecb",
                    })}
                  >
                    <h2
                      style={{
                        padding: "0px",
                        margin: "0px",
                        fontSize: "28px",
                      }}
                    >
                      15/20
                    </h2>
                    <p>Days</p>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LeaveChart;
