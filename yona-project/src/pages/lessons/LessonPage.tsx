// src/pages/LessonPage.tsx
import { useParams, Link } from "react-router-dom";
import { lessons } from "../../data/lessons/lessons";
import LessonPlayer from "../../components/LessonPlayer";

export default function LessonPage() {
  const params = useParams();
  const id = params.id;
  const lesson = lessons.find(l => l.id === id);

  if (!lesson) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold">Урок не найден</h2>
        <Link to="/lessons" className="text-blue-600 underline">Вернуться к списку уроков</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{lesson.title}</h1>

      {/* Плеер — сразу загружает videoUrl */}
      <LessonPlayer url={lesson.videoUrl} />

      {/* Описание */}
      <div className="mt-4 prose max-w-none">
        <p>{lesson.description}</p>
      </div>
    </div>
  );
}
