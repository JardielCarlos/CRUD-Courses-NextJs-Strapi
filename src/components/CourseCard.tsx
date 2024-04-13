import { useState, useRef, useEffect } from 'react';
import { Course } from "@/types/Course";

type CourseCardProps = {
  course: Course;
  handleUpdate: (id: number) => void;
  handleDelete: (id: number) => void;
};

export function CourseCard({ course, handleUpdate, handleDelete }: CourseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLongText, setIsLongText] = useState(false);
  
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (element) {
      if (element.scrollHeight > element.clientHeight) {
        setIsLongText(true);
      }
    }
  }, []);

  return (
    <div className="flex flex-col bg-white overflow-hidden shadow rounded-lg">
      <div className="p-4 flex-grow">
        <h2 className="text-lg leading-6 font-medium text-gray-900">{course.attributes.name}</h2>
        <p ref={textRef} className={`mt-2 text-sm text-gray-500 ${isExpanded ? '' : 'line-clamp-2'}`}>{course.attributes.description}</p>
        {isLongText && <button onClick={() => setIsExpanded(!isExpanded)} className="text-blue-500 hover:text-blue-700 text-sm">{isExpanded ? '...Menos detalhes' : 'Mais detalhes...'}</button>}
        <div className="mt-2 space-x-2">
          {Array.isArray(course.attributes.tags) && course.attributes.tags.map((tag, index) => (
            <span key={index} className="inline-block bg-blue-200 text-blue-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-4 sm:px-6 flex-shrink-0">
        <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleUpdate(course.id)}>Atualizar</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(course.id)}>Deletar</button>
      </div>
    </div>
  );
}
