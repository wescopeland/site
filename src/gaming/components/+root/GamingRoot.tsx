import { darken } from "polished";
import type { VFC } from "react";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { MdGamepad } from "react-icons/md";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

import { Animate } from "@/core/components/Animate";

import { ServiceSummaryCard } from "../ServiceSummaryCard";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 1
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 500
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 900
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 1200
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2600
  }
];

const color = "#8b5cf6";

export const GamingRoot: VFC = () => {
  return (
    <>
      <Animate.FadeUp shouldAnimateOnMount>
        <div className="mb-10">
          <h1 className="mb-2 text-4xl font-bold tracking-tight">Gaming</h1>
        </div>
      </Animate.FadeUp>

      <Animate.FadeUp shouldAnimateOnMount delay={200}>
        <div className="grid gap-2 mb-8 md:grid-cols-3">
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
      </Animate.FadeUp>

      <div>
        <p className="text-lg font-light tracking-tight">Overview</p>

        <div className="flex flex-col w-full p-8 bg-white border border-gray-100 rounded-lg dark:border-gray-500 dark:bg-gray-900 h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={500} height={300} data={data}>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={darken(0.36, color)}
                    stopOpacity={0.5}
                  />
                  <stop offset="100%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>

              <Tooltip />

              <Area
                dataKey="amt"
                type="monotone"
                stroke={color}
                fill="url(#gradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};
