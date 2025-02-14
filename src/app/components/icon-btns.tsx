import { useState } from "react";
import { ThumbsUp, MessageCircle, Bookmark, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button"; // Adjust the import based on your project structure

export default function IconButtons() {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="flex flex-col gap-4 mb-16">
      {/* Thumbs Up Button */}
      <div className="flex flex-col items-center ">
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full  text-white hover:bg-white/20 transition-all active:scale-95"
          onClick={() => setIsLiked(!isLiked)}
        >
          <ThumbsUp className={`h-6 w-6 ${isLiked ? "text-blue-500" : "text-white"}`} />
        </Button>
        <span className="text-white text-sm">10k</span>
      </div>

      {/* Comment Button */}
      <div className="flex flex-col items-center ">
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full  text-white hover:bg-white/20 transition-all active:scale-95"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
        <span className="text-white text-sm">100</span>
      </div>

      {/* Bookmark Button */}
      <div className="flex flex-col items-center ">
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full  text-white hover:bg-white/20 transition-all active:scale-95"
          onClick={() => setIsBookmarked(!isBookmarked)}
        >
          <Bookmark className={`h-6 w-6 ${isBookmarked ? "text-blue-500" : "text-white"}`} />
        </Button>
      </div>

      {/* More Button */}
      <Button
        variant="ghost"
        size="icon"
        className="h-12 w-12 rounded-full text-white hover:bg-white/20 transition-all active:scale-95"
      >
        <MoreHorizontal className="h-6 w-6 text-white" />
      </Button>
    </div>
  );
}