import React from "react";
import Image from "next/image";
import { AppIcon } from "@/components/appicon";
import Bar from "@/components/bar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ICTPC | Desktop",
  description: "ICTxDST Sport Games 2025 Programming Competition",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#19B3C5] via-[#070419] to-[#070419] flex flex-col items-center text-white relative">
      {/* App Icons */}
      <main className="flex flex-wrap justify-center items-center max-w-5xl">
        <AppIcon name="Register" href="/regis" icon={<span>📝</span>} />
        <AppIcon name="About" href="/about" icon={<span>ℹ️</span>} />
        <AppIcon name="Rules" href="/contest" icon={<span>🖥️</span>} />
        {/* <AppIcon name="Score" href="/leaderboard" icon={<span>📊</span>} /> */}
        <AppIcon name="Schedule" href="/schedule" icon={<span>🗓️</span>} />
        <AppIcon
          name="OpenChat"
          href="https://line.me/ti/g2/-V3smyrlmrL1f4b1_mL6m_PGPno6BebmRHlWIQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
          icon={<Image src="/openchat.svg" width={50} height={50} alt="logo" />}
        />
        <AppIcon
          name="ICTSA"
          href="https://www.instagram.com/muict_studentactivities?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          icon={
            <Image src="/ictsa_logo.jpg" width={50} height={50} alt="logo" />
          }
        />
        <AppIcon
          name="Dev_Club"
          href="https://muictdev.club"
          icon={
            <Image src="/devclub_logo.svg" width={50} height={50} alt="logo" />
          }
        />
      </main>

      <Bar />

      <div className="items-center justify-center flex flex-col space-y-4 mt-4 lg:mt-64">
        <Image
          src="/logo_w_l.svg"
          width={500}
          height={500}
          alt="logo"
          className="w-9/12 lg:w-3/12"
        ></Image>
        <h2 className="text-md flex flex-row gap-3">
          <p className="font-bold">Register Date:</p> Today - Jan 31
        </h2>
        <h2 className="text-md flex flex-row gap-3">
          max of 3 per team | Feb 10 and 15 | IT210
        </h2>
        {/* <h2 className="text-md flex flex-row gap-3">
          <p className="font-bold">Competition Session:</p> Sat Feb 15 13:00
          IT210
        </h2> */}
      </div>
    </div>
  );
}
