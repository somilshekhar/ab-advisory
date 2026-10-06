"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understanding the Case & scope discussions",
    description: "Aligning on client background, requirements, scope and timelines upfront.",
  },
  {
    number: "02",
    title: "Sharing Questionnaire and Gathering Client Data",
    description: "Sharing a structured questionnaire and collecting financials and agreements.",
  },
  {
    number: "03",
    title: "Functions, Assets and Risks (FAR) Analysis",
    description: "Documenting functions performed, assets used and risks borne.",
  },
  {
    number: "04",
    title: "Economic Analysis including external database benchmarking",
    description: "Database search, comparable selection and arm's length range determination.",
  },
  {
    number: "05",
    title: "Discussions on exposures",
    description: "Discussing draft findings and potential tax exposures before finalisation.",
  },
  {
    number: "06",
    title:
      "Finalising Documentation and Delivering Filing-Ready Reports/Memo",
    description: "Issuing the final report or memo under your brand.",
  },
];

/* --------------------------------
   DESKTOP CARD
-------------------------------- */

function DesktopStepCard({ index, scrollYProgress }) {
  const revealStart = (index / steps.length) * 0.8;
  const revealEnd = revealStart + 0.1;

  const opacity = useTransform(scrollYProgress, (progress) => {
    if (progress < revealStart) {
      return 0;
    }

    if (progress < revealEnd) {
      return (
        (progress - revealStart) /
        (revealEnd - revealStart)
      );
    }

    return 1;
  });

  const y = useTransform(scrollYProgress, (progress) => {
    if (progress < revealStart) {
      return 40;
    }

    if (progress < revealEnd) {
      const localProgress =
        (progress - revealStart) /
        (revealEnd - revealStart);

      return 40 - localProgress * 40;
    }

    return 0;
  });

  return (
    <motion.div
      style={{
        opacity,
        y,
      }}
      className="flex flex-col items-start"
    >
      {/* Number */}
      <span className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-bold text-brand-primary leading-none tracking-tighter mb-2 md:mb-5">
        {steps[index].number}
      </span>

      {/* Divider */}
      <div className="w-8 md:w-10 h-[2px] bg-brand-accent mb-3 md:mb-4" />

      {/* Description */}
      <p className="text-brand-primary text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium leading-relaxed">
        {steps[index].title}
      </p>
    </motion.div>
  );
}

/* --------------------------------
   MOBILE CARD
-------------------------------- */

function MobileStepCard({
  step,
  index,
  scrollYProgress,
}) {
  /*
    Each step appears at a different point
    in the scroll.

    01 → 0%
    02 → 12%
    03 → 24%
    04 → 36%
    05 → 48%
    06 → 60%
  */

  const revealStart = index * 0.12;
  const revealEnd = revealStart + 0.06;

  const opacity = useTransform(
    scrollYProgress,
    (progress) => {
      // Hidden before its reveal point
      if (progress < revealStart) {
        return 0;
      }

      // Fade in
      if (progress < revealEnd) {
        return (
          (progress - revealStart) /
          (revealEnd - revealStart)
        );
      }

      // Once revealed, stay visible
      return 1;
    }
  );

  const y = useTransform(
    scrollYProgress,
    (progress) => {
      // Start slightly below
      if (progress < revealStart) {
        return 30;
      }

      // Move into position while revealing
      if (progress < revealEnd) {
        const localProgress =
          (progress - revealStart) /
          (revealEnd - revealStart);

        return 30 - localProgress * 30;
      }

      // Stay in position
      return 0;
    }
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
      }}
      className="flex flex-col items-start shrink-0 h-[280px]"
    >
      {/* Number */}
      <span className="text-[3rem] font-bold text-brand-primary leading-none tracking-tighter mb-4">
        {step.number}
      </span>

      {/* Title */}
      <div className="flex items-center gap-4 mb-3">
        <p className="text-brand-primary text-[17px] font-bold uppercase">
          {step.title}
        </p>
      </div>

      {/* Description */}
      <p className="text-brand-primary/70 text-[14px] leading-relaxed max-w-[600px]">
        {step.description}
      </p>
    </motion.div>
  );
}

/* --------------------------------
   WORKFLOW SECTION
-------------------------------- */

export default function WorkflowSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /*
    MOBILE TRACK MOVEMENT

    The entire list moves upward as
    the user scrolls.

    This allows:

    01 → eventually leaves screen
    02 → moves upward
    03 → moves upward
    04 → moves upward
    05 → enters
    06 → enters
  */

  const mobileTrackY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", "-1050px"]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] md:h-[400vh]"
    >
      <div className="sticky top-0 h-screen bg-white overflow-hidden">

        {/* ==================================
            DESKTOP
        ================================== */}

        <div className="hidden md:flex h-full items-center">
          <div className="px-6 md:px-16 lg:px-28 max-w-[1440px] mx-auto w-full">

            {/* Header */}
            <div className="mb-10 md:mb-16 lg:mb-20">
              <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-brand-primary leading-tight">
                Our Workflow
              </h2>

              <p className="mt-2 md:mt-3 text-[1rem] md:text-[1.1rem] lg:text-[1.25rem] text-brand-primary max-w-[700px] font-medium">
                Practical expertise and strategic support from preparation
                to execution.
              </p>
            </div>

            {/* Desktop Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8 md:gap-8 lg:gap-12">
              {steps.map((_, index) => (
                <DesktopStepCard
                  key={index}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>

          </div>
        </div>

        {/* ==================================
            MOBILE
        ================================== */}

        <div className="md:hidden h-full relative">

          {/* Mobile Header */}
          <div className="absolute top-8 left-6 right-6 z-10">
            <h2 className="text-[2rem] font-bold text-brand-primary">
              Our Workflow
            </h2>

            <p className="mt-2 text-[14px] text-brand-primary/60">
              Practical expertise and strategic support.
            </p>
          </div>

          {/* Mobile Moving Track */}
          <motion.div
            style={{
              y: mobileTrackY,
            }}
            className="absolute left-6 right-6 top-[180px]"
          >
            {steps.map((step, index) => (
              <MobileStepCard
                key={step.number}
                step={step}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}