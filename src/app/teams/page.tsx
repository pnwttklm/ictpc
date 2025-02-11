import Search from "@/components/Search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ICTPC | 47 Teams",
  description: "Search for teams",
};

const data = [
  {
    team: "123",
    id: [6788228, 6788207, 6788206],
  },
  {
    team: "3 tour baht",
    id: [6788156, 6788196, 6788109],
  },
  {
    team: "Bike for Keam",
    id: [6788112, 6788200, 6788018],
  },
  {
    team: "Bossmadeaw",
    id: [6788203],
  },
  {
    team: "Danthurang",
    id: [6788199, 6788120, 6788066],
  },
  {
    team: "Echelon",
    id: [6788122, 6788029, 6788140],
  },
  {
    team: "GoodbyeWorld",
    id: [6788182, 6788226, 6788150],
  },
  {
    team: "G-Wiz",
    id: [6688062, 6688237, 6688175],
  },
  {
    team: "HNB",
    id: [6788230, 6788233, 6788177],
  },
  {
    team: "JET",
    id: [6687064, 6687011, 6687082],
  },
  {
    team: "KLUAY",
    id: [6788048, 6788075, 6788202],
  },
  {
    team: "KUN&KUN",
    id: [6788157, 6788170, 6788184],
  },
  {
    team: "L M N O P",
    id: [6788187, 6788242, 6788144],
  },
  {
    team: "MaAou2%",
    id: [6788181, 6788004, 6788134],
  },
  {
    team: "MaOaKawFree",
    id: [6788197, 6788036, 6788223],
  },
  {
    team: "MaskerMan",
    id: [6788147, 6788130],
  },
  {
    team: "Miyoyo",
    id: [6788003],
  },
  {
    team: "Moodeng Mai Yu",
    id: [6688076, 6688143, 6688137],
  },
  {
    team: "Numhin or HinNum",
    id: [6788227, 6788038, 6788142],
  },
  {
    team: "Odo by Ado",
    id: [6788094, 6788126],
  },
  {
    team: "PlaKud",
    id: [6788087, 6788072],
  },
  {
    team: "PM 2.5",
    id: [6688085, 6688206, 6688077],
  },
  {
    team: "Qwerty",
    id: [6788127, 6788145, 6788054],
  },
  {
    team: "RatataMoth",
    id: [6688135, 6688218, 6688230],
  },
  {
    team: "Sholay and friends",
    id: [6788012, 6788219, 6788101],
  },
  {
    team: "Sigma",
    id: [6788116, 6788079],
  },
  {
    team: "SoGung",
    id: [6788028, 6788009, 6788063],
  },
  {
    team: "soloEducation",
    id: [6788185],
  },
  {
    team: "The OMICRON Group",
    id: [6688249, 6688042],
  },
  {
    team: "We play rhythm games btw",
    id: [6788007, 6788024, 6788115],
  },
  {
    team: "เก็บหมด(โดนเก็บ)",
    id: [6788210, 6788052],
  },
  {
    team: "เจ๋งแจ๋วจุดจ๊าบจ๊าบจริงกระจี๋โจ๊ร์",
    id: [6688012, 6688049, 6688088],
  },
  {
    team: "เจ๋งจ๊าบจุดแจ๋วจริงโจ้จี๋",
    id: [6688120, 6688038, 6688117],
  },
  {
    team: "โก้มาก",
    id: [6788047, 6788033, 6788070],
  },
  {
    team: "ไม่รู้",
    id: [6788086, 6788135, 6788105],
  },
  {
    team: "กก-ก๊ก-กก-ก๊ก",
    id: [6788211, 6788132, 6788026],
  },
  {
    team: "ขอสองคะแนนค่ะ",
    id: [6788099, 6788224],
  },
  {
    team: "ขาดผมไปแล้วใครจะไถนา",
    id: [6688142, 6688065, 6688040],
  },
  {
    team: "ช่วยด้วยผมมีคนเดียว",
    id: [6788015],
  },
  {
    team: "มาทำไม",
    id: [6788030, 6788121, 6788111],
  },
  {
    team: "Bunnybell",
    id: [6788246],
  },
  {
    team: "อะไรก็ได้",
    id: [6688041,6688161,6688006],
  },
  {
    team: "สามยอด",
    id: [6788193,6788065,6788040],
  },
  {
    team: "1xBit",
    id: [6788216,6788137,6788027],
  },
  {
    team: "พายคิมจิงอึน",
    id: [6788104,6787016,6787089],
  },
  {
    team: "nah I’m cooked",
    id: [6788090,6788125,6788077],
  },
  {
    team: "Hello!",
    id: [6788221],
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">47 Teams</h1>
      <Search data={data} />
    </main>
  );
}
