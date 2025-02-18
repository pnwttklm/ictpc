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
      date: "Fri, Feb 7, 2025",
      sessions: [
        {
          time: "16:30 - 17:00",
          title: "Registration",
          venue: "Outside IT204",
          remark: "",
        },
        {
          time: "17:00 - 18:00",
          title: "Welcoming and Explain Rules and Regulations",
          venue: "IT204",
          remark: "",
        },
        {
          time: "18:00 - 19:00",
          title: "Practice Session (1hr)",
          venue: "IT103, 104, 105",
          remark: "",
        },
        {
          time: "19:00 - 19:30",
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
          time: "10:30 - 11:30",
          title: "Registration",
          venue: "Hall of Fame",
          remark: "Registration is closed at 11:30",
        },
        {
          time: "11:30 - 11:50",
          title: "Preparation",
          venue: "IT204",
          remark: "",
        },
        {
          time: "11:50 - 12:10",
          title: "Enter the Lab rooms",
          venue: "IT103, 104, 105",
          remark: "",
        },
        {
          time: "12:10 - 17:10",
          title: "Competition Session ( 5hrs )",
          venue: "IT103, 104, 105",
          remark: "",
        },
        {
          time: "17:10 - 17:30",
          title: "Scoreboard Announcement",
          venue: "IT204",
          remark: "",
        },
        {
          time: "17:30 - 18:00",
          title: "Photo Session",
          venue: "IT204",
          remark: "",
        },
        {
          time: "18:00 - 18:30",
          title: "Wrapping Up",
          venue: "IT204",
          remark: "",
        },
      ],
    },
  ];
  