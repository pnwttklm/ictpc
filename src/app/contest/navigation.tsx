"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Page() {
  const values = [
    "team",
    "guidelines",
    "competition",
    "judgement",
    "ranking",
    "inquiries",
    "hardware",
    "software",
    "award"
  ]; // Your string list
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length); // Loop to start
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + values.length) % values.length
    );
  };

  const handleTabChange = (value: string) => {
    const newIndex = values.indexOf(value);
    if (newIndex !== -1) {
      setCurrentIndex(newIndex);
    }
  };

  const EachTab = ({
    value,
    children,
    title,
  }: {
    value: string;
    children: React.ReactNode;
    title: string;
  }) => {
    return (
      <TabsContent value={value} className="w-full">
        <Card>
          <CardHeader>
            <CardTitle className="mb-8">{title}</CardTitle>
            <CardDescription className="text-lg"></CardDescription>
          </CardHeader>
          <CardContent className="lg:mx-6 space-y-2 overflow-scroll h-72 lg:h-96">
            {children}
          </CardContent>
          <CardFooter className="lg:invisible flex justify-between">
            <Button onClick={handlePrevious} disabled={currentIndex === 0}>
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentIndex === values.length - 1}
            >
              Next
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    );
  };

  return (
    <div className="bg-white w-full items-center flex flex-col p-4 h-screen shadow-lg">
      <h1 className="font-bold text-2xl lg:my-12">
        Competition Rules and Guidelines
      </h1>
      <Tabs
        value={values[currentIndex]}
        onValueChange={handleTabChange}
        className="w-11/12 lg:w-9/12"
      >
        {/* Tabs List */}
        <TabsList className="invisible lg:visible grid w-full grid-cols-10">
          {values.map((value) => (
            <TabsTrigger key={value} value={value}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>
        {/* Tabs Content */}
        <EachTab value={values[0]} title={"Team Requirements"}>
          Each team must consist of <b>1 to 3 individuals</b> from any program
          or year. Participants must be enrolled in the{" "}
          <b>B.Sc. in ICT or B.Sc. in DST</b>
          programs. <br />
          <br />
          Teams that do not meet this requirement will be disqualified from
          ranking, ineligible for rewards, and will forfeit the right to advance
          in the competition. However, such teams may still participate with
          prior approval from the competition organizers.
        </EachTab>
        <EachTab value={values[1]} title={"Competition Guidelines"}>
          The competition involves writing programs to solve a set of problems,
          with <b>all problem statements provided in English</b>. Participants
          can write their solutions using any of the following programming
          languages: <b>C, C++, C#, Python, Kotlin, JavaScript, or Java</b>.
          <br />
          <br /> The competition will last<b> 5 hours</b>, during which each
          team can solve the problems in any order. Teams may choose to use any
          of the specified programming languages for each problem.
          <br />
          <br />
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
          >{`1.  **Printed Materials**:
    

*   Each team is allowed to bring **up to 25 pages of printed reference materials**, single-sided on **Letter (8 x 11 inches)** or **A4 (210 x 297 mm)** paper.
    
*   Pages must be **numbered on the upper right-hand corner**, and the **team name** must be printed on the first page (included in the 25 pages).
    
*   **Handwritten comments and corrections** are allowed on the **first page only**.
    
*   Text and illustrations must be **readable without magnification** from a distance of 0.5 meters.
    
*   Each team member may bring an **exact copy** of the printed material.
    
*   The material must be contained in a **notebook, binder, envelope, or folder** labeled with the institution and team name on the front.
    
*   All materials must be submitted before the **competition session on February 12th**, starting from **1PM** at the provided place.
    

2.  **Allowed Stationery and Items**:
    

*   Teams may bring stationery such as pens, pencils, erasers, rulers, and protractors.
    
*   There will be only pens provided for each team on request.
    
*   Candy is the only food allowed. **No drinks** are permitted (provided on request).
    
*   There will be snacks and drinks provided once during the contest.
    
*   Teams are allowed to bring **mascot dolls, Yadom (inhalers), or one English-to-\[Language\] dictionary**. However, all items, including notebooks, stationery, candy, mascot dolls, etc., will be **inspected before the competition session and placed in the team’s designated workstation** before the competition.
    

3.  **Prohibited Items**:
    

*   All **electronic devices** and personal belongings, including but not limited to phones, digital watches, calculators, mouse, and keyboards, are **strictly prohibited**.
    
*   Competitors must switch off all communication devices and **leave at the preparation room** for the contest duration.
    

4.  **Communication**:
    

*   Competitors are only allowed to communicate with their **team members** and staff.
    
*   **Systems support staff** may assist with system-related issues, such as explaining error messages.
    

5.  **Restroom Breaks**:
    

*   Competitors may request to use the restroom with **supervision from proctors**, for up to **15 minutes at a time**.
    

6.  **Internet Use**:
    

*   Teams are **strictly prohibited** from using or attempting to use the Internet during the competition.
    

7.  **Competition Day Rules (Feb 12)**:
    

*   Only **empty-handed entry** into the competition room is allowed.`}</ReactMarkdown>
        </EachTab>
        <EachTab value={values[2]} title={"During Competition"}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
          >{`1.  **Solution Submission and Judging**:
    

*   Solutions to problems, known as **runs**, are submitted for judging. Each run is either **accepted** or **rejected**, and teams are notified of the results.
    
*   A problem is considered **solved** when the submission is accepted by the judges.
    
*   Judges will compile and test the program using a **different set of test data** prepared in advance.
    

**Rejected Runs** will be marked as:

*   **Runtime Error**: The program crashed while processing the test data.
    
*   **Time Limit Exceeded**: The program exceeded the specified time limit to produce output.
    
*   **Wrong Answer**: The program produced incorrect output. Presentation errors, such as extra whitespace, will also be marked as **Wrong Answer**.
    
*   **No further details** will be provided with these responses.
    

2.  **Clarification Requests**:
    

*   Contestants may submit claims of ambiguity or error in problem statements via a **clarification request** in the PC2 system.
    
*   If the judges identify an ambiguity or error, a clarification will be issued to **all contestants**.
    

3.  **Live Scoreboard**:
    

*   Teams can view a **live scoreboard** during the competition, displaying the current rankings of all teams.
    
*   The live scoreboard will also be publicly available.
    
*   The scoreboard will be **frozen during the final hour** of the contest. During this time, teams will still receive judges’ responses as usual.
    
*   Teams will also be awarded **balloons** corresponding to each solved problem, with distinct colors for each problem.
    

4.  **Contest Duration**:
    

*   The contest is scheduled to last **five hours**. However, the contest director may alter the duration in the event of unforeseen circumstances.
    
*   Any changes to the schedule will be communicated to contestants **uniformly and promptly**.
    

5.  **Disqualification**:
    

*   Teams may be disqualified by the contest director for any activity that jeopardizes the contest, including but not limited to:
    
    *   Dislodging extension cords.
        
    *   Unauthorized modification of contest materials.
        
    *   Activities that knowingly or unknowingly affect other teams.
        
    *   Distracting behavior.`}</ReactMarkdown>
        </EachTab>
        <EachTab value={values[3]} title={"Judgement"}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
          >{`1.  A problem is considered **solved** when it is **accepted by the judges**. The judges are solely responsible for determining whether submitted runs are accepted or rejected.
    
2.  The **Contest Director**, in consultation with the judges, will determine the winners of the contest. The contest director and judges have the authority to make adjustments or adjudicate unforeseen events and conditions. **Their decisions are final**.`}</ReactMarkdown>
        </EachTab>
        <EachTab value={values[4]} title={"Ranking Criteria"}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {`1.  Teams are ranked based on the **most problems solved**.
    
2.  If teams solve the same number of problems, they are ranked by **least total time**.
    
    1.  The **total time** is the sum of the time consumed for each solved problem.
        
    2.  The time for each solved problem is calculated as the **time elapsed from the contest start** until the submission of the first **accepted run**, plus **20 penalty minutes** for every rejected run for that problem.
        
    3.  Unsolved problems do not contribute to the total time.
        
3.  If both the number of solved problems and total time are the same, the **time of the last solved problem** without penalty is used as a tiebreaker.
    
4.  If the time for the last solved problem is still the same, the **previously solved problems** are considered in sequence.`}
          </ReactMarkdown>
        </EachTab>
        <EachTab value={values[5]} title={"Inquiries and Protests"}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {`1.  All inquiries, concerns, and protests about the results must be raised with the **Contest Director** and the **Chief of Judges** within **30 minutes** after the competition ends.
    
2.  In the case of unforeseen circumstances during the competition, organizers will consider each situation on a **case-by-case** basis. The decisions of the competition organizers are **final**.`}
          </ReactMarkdown>
        </EachTab>
        <EachTab value={values[6]} title={"Hardware Specifications"}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {`*   **CPU**: IntelⓇ CoreTM i7-10700 16 cores
    
*   **RAM**: 16 GB
    
*   **OS**: Ubuntu 24.04.1 LTS
    

**Note**:

*   No **hardware substitutions** are allowed. Teams may **not bring their own equipment** onto the contest floor. This includes peripherals such as keyboards, mice, or any other equipment.
    
*   All teams will use **identical equipment** as described above during the competition.`}
          </ReactMarkdown>
        </EachTab>
        <EachTab value={values[7]} title={"Software Specifications"}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {`**Languages**

*   **Java (OpenJDK 17.0.10)**
    
*   **C (gcc 11.4.0)**
    
*   **C#**
    
*   **C++ (g++ 11.4.0)**
    
*   **Kotlin (Version 1.9)**
    
*   **Python (pypy3 7.3.9)**
    
*   **JavaScript**
    

**Editors and IDEs**

*   **vim** 9.1.697
    
*   **GNU nano** 7.2
    
*   **Visual Studio Code** 1.95.3`}
          </ReactMarkdown>
        </EachTab>{" "}
        <EachTab value={values[8]} title={"Awards"}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {`*   **Winner Team (1 Team)**
    
    *   Each member will receive a Gold Medal and Certificate of Achievement
        
    *   Very Very Very Special Gift
        
*   **First Runner-up Team (1 Team)**
    
    *   Each member will receive a Silver Medal and Certificate of Achievement
        
    *   Very Very Special Gift
        
*   **Second Runner-up Team (1 Team)**
    
    *   Each member will receive a Bronze Medal and Certificate of Achievement
        
    *   Very Special Gift
        
*   **First to solve Teams (Up to 12 Teams)**
    
    *   The first team who solves each problem
        
    *   Special Gift`}
          </ReactMarkdown>
        </EachTab>
      </Tabs>
    </div>
  );
}
