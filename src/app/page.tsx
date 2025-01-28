"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AppIcon = ({
  name,
  href,
  icon,
}: {
  name: string;
  href: string;
  icon: React.ReactNode;
}) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center justify-center w-20 h-20 m-4 hover:bg-[#FFFFFF29] rounded-xl hover:shadow-xl"
        >
          <Link href={href}>
            <div className="flex flex-col items-center p-2">
              <div className="text-3xl mb-2 text-orange-500">{icon}</div>
              <p className="text-sm font-medium text-gray-300">{name}</p>
            </div>
          </Link>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent>{name}</TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

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
        {/* <AppIcon
          name="Google"
          href="https://google.com"
          icon={<span>🔍</span>}
        />
        <AppIcon name="Terminal" href="#" icon={<span>🖥️</span>} />
        <AppIcon name="Files" href="#" icon={<span>📂</span>} />
        <AppIcon name="Store" href="#" icon={<span>🛍️</span>} />
        <AppIcon name="LibreOffice" href="#" icon={<span>📄</span>} />
        <AppIcon name="Settings" href="#" icon={<span>⚙️</span>} /> */}
      </main>

      <div className="items-center justify-center flex flex-col space-y-2 mt-4 lg:mt-64">
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
          <p className="font-bold">Practice Session:</p> Mon Feb 10 16:00 IT210
        </h2>
        <h2 className="text-md flex flex-row gap-3">
          <p className="font-bold">Competition Session:</p> Sat Feb 15 13:00
          IT210
        </h2>
      </div>

      {/* Launcher Bar */}
      <div className="absolute bottom-3 lg:bottom-0 rounded-3xl lg:rounded-none lg:left-0 lg:h-full flex flex-row lg:flex-col max-w-full items-center lg:space-y-1 lg:pt-6 bg-gray-800 bg-opacity-65  shadow-lg">
        <AppIcon name="Home" href="/" icon={<span>🏠</span>} />
        <AppIcon name="Register" href="/regis" icon={<span>📝</span>} />
        <AppIcon name="Help" href="/contact" icon={<span>❓</span>} />
      </div>

      <footer className="absolute bottom-36 lg:bottom-2 text-xs text-gray-500">
        <p>
          Copyright © 2025. Dev Club, in association with Faculty of Information
          and Communication Technology, Mahidol University. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
