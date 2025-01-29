import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "ICTPC | 404",
  description: "ICTxDST Sport Games 2025 Programming Competition",
};
export default function NotFound() {
  return (
    <>
      <div className="flex items-center w-full bg-gray-900 justify-center h-screen  flex-col gap-3">
        <h1 className="text-4xl font-bold text-white">Working on it.</h1>
        <h1 className="text-4xl font-bold text-white">Coming Soon!</h1>
      </div>
    </>
  );
}
