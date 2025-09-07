// import React from "react";
import ReactPlayer from "react-player";

export default function LessonPlayer({ url }: { url: string }) {
  return (
    <div className="w-full bg-black aspect-video">
      <ReactPlayer src={url} controls width="100%" height="100%" />
    </div>
  );
}
