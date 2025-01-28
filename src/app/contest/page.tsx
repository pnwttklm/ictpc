import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "ICTPC | Contest Rules",
  description: "ICTxDST Sport Games 2025 Programming Competition",
};

export default function Page() {
  return (
    <>
      <div className="bg-white w-full items-center justify-center flex flex-col p-4 h-screen shadow-lg">
        <Tabs defaultValue="0" className="w-9/12">
          <TabsList className="invisible lg:visible grid w-full grid-cols-10">
            <TabsTrigger value="0">Team</TabsTrigger>
            <TabsTrigger value="1">Password</TabsTrigger>
            <TabsTrigger value="2">Account</TabsTrigger>
            <TabsTrigger value="3">Password</TabsTrigger>
            <TabsTrigger value="4">Account</TabsTrigger>
            <TabsTrigger value="5">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when youre done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2"></CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="0">
            <Card>
              <CardHeader>
                <CardTitle className="mb-8">Team Requirement</CardTitle>
                <CardDescription className="text-lg">
                  Each team must consist of 1 to 3 individuals from any program
                  or year. Participants must be enrolled in the B.Sc. in ICTor
                  B.Sc. in DST programs. Teams that do not meet this requirement
                  will be disqualified from ranking, ineligible for rewards, and
                  will forfeit the right to advance in the competition. However,
                  such teams may still participate with prior approval from the
                  competition organizers.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2"></CardContent>
              <CardFooter className="flex justify-end">
                <Button>Next</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
