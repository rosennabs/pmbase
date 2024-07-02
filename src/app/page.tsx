"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useFormContext } from "../contexts/FormContext";
import About from "../components/About";

const resourceCard =
  "flex flex-col bg-white cursor-pointer border rounded-2xl border-neutral-200 w-[350px] p-4 hover:bg-teal-600 hover:text-white";
const text = "ml-16 -mt-2 mb-2 text-xs";
const titleContainer = "flex flex-row space-x-2 m-4";
const image = "bg-teal-100 p-2 w-[35px]";

export default function Home() {
  const {
    baseButtonClassName,
    activeButtonClassName,
    activeButton,
    handleButtonClick,
  } = useFormContext();

  //Navigate to the resource hub in the homepage by searching for query parameter provided when resources is clicked
  const searchParams = useSearchParams();
  const resourceHubRef = useRef(null);

  useEffect(() => {
    if (
      searchParams.get("scrollTo") === "resource-hub" &&
      resourceHubRef.current
    ) {
      resourceHubRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col">
      {/* Section: PMF */}

      <section className="relative flex mx-32">
        <div className="relative flex flex-col my-24 w-2/3">
          <h1 className="pb-8">PERFORMANCE MEASUREMENT & EVALUATION </h1>
          <p className="pb-8">
            {" "}
            Performance measurement and evaluation are critical components of
            our success. By integrating both performance measurement and
            evaluation, we can gain valuable insights into how well we are
            achieving our objectives and make informed decisions. Click the
            button to learn how you can contribute towards our success as an
            organization.
          </p>

          <Link href="/learn-more">
            <button
              onClick={() => handleButtonClick("learn more")}
              className={
                activeButton === "learn more"
                  ? activeButtonClassName
                  : baseButtonClassName
              }
            >
              Learn more
            </button>
          </Link>
        </div>

        <div className="absolute top-0 right-0 w-2/3 z-0">
          <img
            className="ml-10"
            src="/Image.png"
            alt="Graphical background image"
          />
        </div>
      </section>

      {/* Section: Resource Hub */}

      <section
        id="resource-hub"
        ref={resourceHubRef}
        className="flex flex-col items-center mx-32 mt-48"
      >
        <h1 className="pb-8 mt-8 z-10">RESOURCE HUB</h1>

        <div className="grid grid-cols-3 gap-14 place-content-center text-black w-full z-10 mt-16">
          <Link href="/annual_report">
            <div className={resourceCard}>
              <div className={titleContainer}>
                <img className={image} src="/bar chart.svg" alt="a bar chart" />
                <h4>Annual Report</h4>
              </div>

              <p className={text}>
                2023-24 Annual Report. Take a deep dive into our annual
                progress.
              </p>
            </div>
          </Link>

          <Link href="/annual_report">
          <div className={resourceCard}>
            <div className={titleContainer}>
              <img className={image} src="/book.svg" alt="a book" />
              <h4>Directory</h4>
            </div>
            <p className={text}>
              Search for the meaning of our indicators in the PMF directory.
            </p>
            </div>
          </Link>

          <Link href="/annual_report">
          <div className={resourceCard}>
            <div className={titleContainer}>
              <img className={image} src="/puzzle.svg" alt="a puzzle" />
              <h4>Logic Model</h4>
            </div>
            <p className={text}>
              This is where we connect the dots to achieve our ultimate goal.
            </p>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-14 place-content-center w-full z-10 mt-16">
          <Link href="/annual_report">
          <div className={resourceCard}>
            <div className={titleContainer}>
              <img className={image} src="/loop.svg" alt="a loop" />
              <h4>Change Theory</h4>
            </div>
            <p className={text}>
              Understand our theory of change and how we intend to make a
              difference.
            </p>
            </div>
          </Link>

          <Link href="/annual_report">
          <div className={resourceCard}>
            <div className={titleContainer}>
              <img className={image} src="/target.svg" alt="round target" />
              <h4>Annual Targets</h4>
            </div>
            <p className={text}>
              See what we have set out to achieve this year.
            </p>
            </div>
          </Link>

          <Link href="/annual_report">
          <div className={resourceCard}>
            <div className={titleContainer}>
              <img className={image} src="/graph.svg" alt="a line graph" />
              <h4>PMF</h4>
            </div>
            <p className={text}>
              The Performance Measurement Framework outlines our indicators.
            </p>
            </div>
          </Link>
        </div>
      </section>

      <section>
        <About />
      </section>
    </div>
  );
}
