"use client";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export const AppIcon = ({
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
