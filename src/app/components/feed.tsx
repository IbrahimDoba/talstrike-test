"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ImageIcon, LucideImagePlay } from "lucide-react";
import { FeedItem } from "./feed-item";
import { FeedProps } from "../constants/data";

export function Feed({ items }: FeedProps) {
  const [activeTab, setActiveTab] = useState<"video" | "image">("video");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const filteredItems = items.filter((item) => item.mediaType === activeTab);

  // Reset scroll when tab changes
  const handleTabChange = (tab: "video" | "image") => {
    setActiveTab(tab);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "instant"
      });
    }
  };

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden ">
      {/* Tab Navigation */}
      <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-transparent p-4">
        <div className="flex justify-center items-center w-[80%]">
          <Button
            className={`text-white bg-transparent flex-1 text-xl ${
              activeTab === "video" ? "border-b-2 border-white " : ""
            }`}
            onClick={() => handleTabChange("video")}
          >
            <LucideImagePlay className="mr-2 h-6 w-6" />
            Videos
          </Button>
          <Button
            className={`text-white bg-transparent flex-1 text-xl ${
              activeTab === "image" ? "border-b-2 border-white" : ""
            }`}
            onClick={() => handleTabChange("image")}
          >
            <ImageIcon className="mr-2 h-6 w-6" />
            Images
          </Button>
        </div>
      </div>

      {/* Feed Items */}
      <div 
        ref={scrollContainerRef}
        className="h-full snap-y snap-mandatory overflow-y-scroll"
      >
        {filteredItems.map((item) => (
          <div key={item.name} className="snap-start">
            <FeedItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}