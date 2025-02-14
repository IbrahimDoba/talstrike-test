"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeOff } from "lucide-react";
import type { FeedItem } from "../constants/data";
import IconButtons from "./icon-btns";

export function FeedItem({ item }: { item: FeedItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <div className="relative h-[100dvh] w-full ">
      {item.mediaType === "video" ? (
        <>
          <video
            ref={videoRef}
            src={item.mediaUrl}
            className="h-full w-full object-cover"
            loop
            muted={isMuted}
            playsInline
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-20 z-10 text-white hover:bg-white/20"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? (
              <VolumeOff className="h-6 w-6" />
            ) : (
              <Volume2 className="h-6 w-6" />
            )}
          </Button>
        </>
      ) : (
        <Image
          src={item.mediaUrl || "/placeholder.svg"}
          alt={item.postCaption}
          fill
          className="object-cover"
        />
      )}

      {/* Overlay Content */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <div className="flex items-end justify-between">
          <div className="mb-20 flex-1">
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10 border-2 border-white">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>{item.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex  justify-start items-center ">
                  <h3 className="font-semibold text-white ">{item.name}</h3>
                  <div className="w-1 h-1  rounded-full bg-white mx-2" />
                  <small className="font-semibold text-white ">
                    {" "}
                    {item.date}{" "}
                  </small>
                </div>

                {/* <p className="text-sm text-gray-300">{item.username}</p> */}
                <p className=" text-white/70">{item.postCaption}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-16">
            <IconButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
