"use client";

import { homeCards } from "@/constants";
import HomeCard from "./HomeCard";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/components/ui/use-toast";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isNewMeeting" | undefined
  >();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setCallDetails] = useState<Call>();
  const { toast } = useToast();

  const createMeeting = async () => {
    if (!client || !user) return;
    try {
      if (!values.dateTime) {
        toast({ title: "Please select a date and time." });
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call("default", id);
      if (!call) throw new Error("Failed to create a call.");
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "New Meeting";
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast({ title: "Meeting Create" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Failed to create meeting",
      });
    }
  };

  return (
    <section
      className="grid grid-cols-1 gap-5
     md:grid-cols-2 xl:grid-cols-4"
    >
      {homeCards.map((homeCardModel, index) => {
        homeCardModel.handleClick = () => {
          if (homeCardModel.navigation) {
            router.push(homeCardModel.navigation);
          } else {
            setMeetingState(homeCardModel.meetingState);
          }
        };
        return <HomeCard key={index} {...homeCardModel} />;
      })}

      <MeetingModal
        isOpen={meetingState === "isNewMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start New Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
