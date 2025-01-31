export interface ScheduleSession {
    time: string;
    title: string;
    venue: string;
    remark: string;
  }
  
  export interface ScheduleData {
    title: string;
    date: string;
    sessions: ScheduleSession[];
  }
  
  export const scheduleData: ScheduleData[] = [
    {
      title: "Practice Session",
      date: "Sun, Feb 9, 2025",
      sessions: [
        {
          time: "12:00 - 13:00",
          title: "Registration",
          venue: "IT204",
          remark: "",
        },
        {
          time: "13:00 - 14:00",
          title: "Welcoming and Explain Rules and Regulations",
          venue: "IT204",
          remark: "",
        },
        {
          time: "14:00 - 14:30",
          title: "Move room",
          venue: "IT204 to IT103, 104, 105",
          remark: "",
        },
        {
          time: "14:30 - 17:30",
          title: "Practice Session (3 hrs)",
          venue: "IT103, 104, 105",
          remark: "",
        },
        {
          time: "17:30 - 18:00",
          title: "Wrapping Up",
          venue: "IT103, 104, 105",
          remark: "",
        },
      ],
    },
    {
      title: "Competition Session",
      date: "Wed, Feb 12, 2025",
      sessions: [
        {
          time: "12:00 - 13:00",
          title: "Registration",
          venue: "IT204",
          remark: "",
        },
        {
          time: "13:00 - 13:30",
          title: "Welcoming and Explain Rules and Regulations",
          venue: "IT204",
          remark: "",
        },
        {
          time: "13:30 - 14:00",
          title: "Move room and Break",
          venue: "IT204 to IT103, 104, 105",
          remark: "",
        },
        {
          time: "14:00 - 19:00",
          title: "Competition Round (5 hrs)",
          venue: "IT103, 104, 105",
          remark: "",
        },
        {
          time: "19:00 - 20:00",
          title: "Wrapping Up + Leaderboard",
          venue: "IT103, 104, 105",
          remark: "",
        },
      ],
    },
  ];
  