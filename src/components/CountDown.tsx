"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2023-09-13");

const CountDown = () => {
  return <Countdown date={endingDate} />;
};

export default CountDown;
