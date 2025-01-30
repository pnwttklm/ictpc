import React from "react";
import { scheduleData, ScheduleData } from "./schedule";  // Import the data
import Bar from "@/components/bar";  // Assuming this component is correct

const Schedule = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#19B3C5] via-[#070419] to-[#070419] flex flex-col items-center text-white relative">
      <Bar />
      
      <div className="w-full px-4 mt-4 lg:mt-16 mb-40">
        <div className="w-full max-w-7xl mx-auto px-4"> {/* Container with max width */}

          {scheduleData.map((sessionData: ScheduleData, index) => (
            <div key={index} className="text-white p-6 rounded-lg mb-12">
              <h3 className="text-2xl font-semibold text-center mb-4">{sessionData.title}</h3>
              <p className="text-lg text-center mb-6">{sessionData.date}</p>

              {/* Large screen: Visible Table */}
              <div className="lg:block hidden overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3">Time</th>
                      <th scope="col" className="px-6 py-3">Title</th>
                      <th scope="col" className="px-6 py-3">Venue</th>
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

              {/* Small screens: 2-column Layout without drop shadow */}
              <div className="lg:hidden block bg-transparent text-white py-4 px-6">
                {sessionData.sessions.map((session, idx) => (
                  <div key={idx} className="py-2 border-b grid grid-cols-2 gap-4">
                    <div className="font-bold">{session.time}</div>
                    <div>
                      <div className="text-md">{session.title}</div>
                      <div className="text-sm text-gray-400">@{session.venue}</div> {/* Smaller and gray */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Schedule;
