import { AppIcon } from "@/components/appicon";

export default function Bar() {
  return (
    <div className="absolute bottom-3 w-full justify-between lg:w-fit lg:justify-normal lg:bottom-0 rounded-3xl lg:rounded-none lg:left-0 lg:h-full flex flex-row lg:flex-col max-w-full items-center lg:space-y-1 lg:pt-6 bg-gray-800 bg-opacity-65 lg:bg-gradient-to-b lg:from-[#1D5867] lg:to-[#171C2C]  shadow-lg">
      <AppIcon name="Home" href="/" icon={<span>🏠</span>} />
      <AppIcon name="Register" href="/regis" icon={<span>📝</span>} />
      <AppIcon name="Help" href="/contact" icon={<span>❓</span>} />
    </div>
  );
}
