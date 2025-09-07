// src/components/LessonCard.tsx
import { Link } from "react-router-dom";
import type { Lesson } from "../data/lessons/lessons";

function getYouTubeId(url: string) {
  const m = url.match(/(?:v=|\/embed\/|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

export default function LessonCard({ lesson }: { lesson: Lesson }) {
  const ytId = getYouTubeId(lesson.videoUrl);
  const thumb = lesson.thumbnailUrl ?? (ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : "/favicon-128x128.png");

  return (
    <Link to={`/lessons/${lesson.id}`} className="block border rounded overflow-hidden hover:shadow-lg transition">
      <div className="h-44 bg-gray-100 overflow-hidden">
        <img src={thumb} alt={lesson.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-lg">{lesson.title}</h3>
        {lesson.duration && <div className="text-sm text-gray-500 mt-1">{lesson.duration}</div>}
        {lesson.description && <p className="text-sm text-gray-600 mt-2">{lesson.description}</p>}
      </div>
    </Link>
  );
}
