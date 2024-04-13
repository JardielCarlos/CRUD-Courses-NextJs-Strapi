import api from "@/services/api";

import { ApiResponse, Course, CourseDetailsResponse } from "@/types/Course";

import { CourseCard } from "./CourseCard";

type CourseListProps = {
  courses: ApiResponse;
  setModalIsOpen: (isOpen: boolean) => void;
  setCourses: React.Dispatch<React.SetStateAction<ApiResponse>>
  setUpdatingCourse: (course: CourseDetailsResponse | null) => void;
  setNewCourse: (course: { id: number; name: string; description: string; tags: string }) => void;
};

export function CourseList({ courses, setModalIsOpen, setCourses, setUpdatingCourse, setNewCourse }: CourseListProps) {
  const handleUpdate = async (id: number) => {
    const response = await findOne(id);
    setUpdatingCourse(response.data);
    setNewCourse({
      id: response.data.id,
      name: response.data.data.attributes.name,
      description: response.data.data.attributes.description,
      tags: response.data.data.attributes.tags.join(', ')
    });
    setModalIsOpen(true);
  };


  const findOne = async (id: number) => {
    return await api.get(`/courses/${id}`);
  }

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/courses/${id}`);
      setCourses(courses => ({ ...courses, data: courses.data.filter((course) => course.id !== id) }));
    } catch (error) {
      console.error('Erro ao deletar o curso:', error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {courses.data.map((course: Course) => (
        <CourseCard key={course.id} course={course} handleUpdate={handleUpdate} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
