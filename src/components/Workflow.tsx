"use client";
import React from "react";
import { ConfigProvider, StepsProps } from "antd";
import { Steps } from "antd";
import styles from "./workflow.module.css";
import { data } from "@/constants/workflowData";

const Workflow = () => {
  const StepDetails = ({
    time,
    event,
    role,
    className,
  }: {
    time: string;
    event: string;
    role: string;
    className: string;
  }) => {
    return (
      <div className={`${styles.stepDetails} ${styles[className]}`}>
        <div>{time}</div>
        <div>{event}</div>
        <div>{role}</div>
      </div>
    );
  };
  const customDot: StepsProps["progressDot"] = (_dot, { index }) => {
    const isOdd = index % 2 !== 0;
    return (
      <>
        <div
          className={`${styles.customDot} ${isOdd ? styles.up : styles.down}`}
        >
          {isOdd ? (
            <div className={styles.workflowItem}>
              <StepDetails
                time={data[index].time}
                event={data[index].event}
                role={data[index].role}
                className={"top"}
              />
              <div className={styles.myDot}></div>
            </div>
          ) : null}
          <div className={styles.line} key={index}></div>
          {!isOdd ? (
            <div className={styles.workflowItem}>
              <div className={styles.myDot}></div>
              <StepDetails
                time={data[index].time}
                event={data[index].event}
                role={data[index].role}
                className={"bottom"}
              />
            </div>
          ) : null}
        </div>
      </>
    );
  };

  const customTheme = {
    token: {
      colorPrimary: "#FFF",
    },
    hashed: false,
  };

  return (
    <ConfigProvider theme={customTheme}>
      <Steps current={5} progressDot={customDot} items={[{}, {}, {}, {}, {}]} />
    </ConfigProvider>
  );
};

export default Workflow;
