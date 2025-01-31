import React from "react";
import { scheduleData, ScheduleData } from "./schedule";
import Bar from "@/components/bar";

const Schedule = () => {
  return (
    <>
      <div className="min-h-screen bg-[#F8F6F0] flex flex-col items-center text-white relative">
        <Bar />

        <div className="w-full mt-4 lg:mt-16 mb-40">
          <div className="w-full max-w-7xl mx-auto">
            {scheduleData.map((sessionData: ScheduleData, index) => (
              <div key={index} className="text-black p-6 rounded-lg mb-2">
                <h3 className="text-2xl font-semibold text-center mb-4">
                  {sessionData.title}
                </h3>
                <p className="text-lg text-center mb-4">{sessionData.date}</p>
                <div className="lg:block hidden overflow-x-auto relative shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Time
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Venue
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sessionData.sessions.map((session, idx) => (
                        <tr
                          key={idx}
                          className="bg-white border-b hover:bg-gray-50"
                        >
                          <td className="px-6 py-4">{session.time}</td>
                          <td className="px-6 py-4">{session.title}</td>
                          <td className="px-6 py-4">{session.venue}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="lg:hidden block bg-transparent text-black py-4 px-6">
                  {sessionData.sessions.map((session, idx) => (
                    <div
                      key={idx}
                      className="py-2 border-b grid grid-cols-2 gap-4"
                    >
                      <div className="font-bold">{session.time}</div>
                      <div>
                        <div className="text-md">{session.title}</div>
                        <div className="text-sm text-gray-400">
                          @{session.venue}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
