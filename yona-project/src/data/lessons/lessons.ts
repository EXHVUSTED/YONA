// src/data/lessons.ts
export interface Lesson {
  id: string;
  title: string;
  description?: string;
  videoUrl: string;   // YouTube/MP4/drive link
  duration?: string;
  category?: string;
  tags?: string[];
  language?: string;
  thumbnailUrl?: string;
}

export const lessons: Lesson[] = [
  {
    id: "warmup-1",
    title: "Разминка для начинающих",
    description: "Короткая разминка для подготовки тела перед тренировкой.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Замените на ваш тестовый URL
    duration: "07:32",
    category: "warmup",
    tags: ["разминка", "начинающие"],
    language: "ru"
  },
  {
    id: "cardio-1",
    title: "Кардио дома — короткая сессия",
    description: "Интенсивная 15-минутная домашняя кардио-тренировка.",
    videoUrl: "https://www.youtube.com/watch?v=C0DPdy98e4c",
    duration: "15:20",
    category: "cardio",
    tags: ["кардио"],
    language: "ru"
  }
];
