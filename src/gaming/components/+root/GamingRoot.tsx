import type { VFC } from "react";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { MdGamepad } from "react-icons/md";

import { ServiceSummaryCard } from "../ServiceSummaryCard";

export const GamingRoot: VFC = () => {
  return (
    <>
      <div className="mb-10">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Gaming</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <ServiceSummaryCard
          IconComponent={FaPlaystation}
          bgColorClassName="bg-blue-100 dark:bg-blue-600"
          labelCopy="PSN Platinums"
          valueCopy="18 / 100"
        />

        <ServiceSummaryCard
          IconComponent={FaXbox}
          bgColorClassName="bg-green-100 dark:bg-green-600"
          labelCopy="Xbox Gamerscore"
          valueCopy="6,950 / 100,000"
        />

        <ServiceSummaryCard
          IconComponent={MdGamepad}
          bgColorClassName="bg-yellow-100 dark:bg-yellow-600"
          labelCopy="RA Masteries"
          valueCopy="7 / 100"
        />
      </div>
    </>
  );
};
