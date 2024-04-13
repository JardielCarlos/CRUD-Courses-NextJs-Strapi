import api from '@/services/api';
import { AxiosResponse } from 'axios';

import { ApiResponse, CourseDetailsResponse, NewCourse } from '@/types/Course';

import Modal from 'react-modal';

type CourseFormProps = {
  modalIsOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void;
  setCourses: React.Dispatch<React.SetStateAction<ApiResponse>>;
  newCourse: NewCourse;
  setNewCourse: (course: { id: number; name: string; description: string; tags: string }) => void;
  updatingCourse: CourseDetailsResponse | null;
  setUpdatingCourse: (course: CourseDetailsResponse | null) => void;
};

export function CourseForm({ modalIsOpen, setModalIsOpen, setCourses, newCourse, setNewCourse, updatingCourse, setUpdatingCourse }: CourseFormProps) {

  const handleAddOrUpdate = async () => {
    const courseData = {
      data: {
        name: newCourse.name,
        description: newCourse.description,
        tags: newCourse.tags.split(',').map((tag: string) => tag.trim()),
      }
    };

    let response: AxiosResponse<ApiResponse>;

    if (updatingCourse) {
      response = await api.put(`/courses/${updatingCourse.data.id}`, courseData);
      const updatedCourse = Array.isArray(response.data.data) ? response.data.data[0] : response.data.data;
      setCourses(courses => ({
        ...courses,
        data: courses.data.map(course => course.id === updatingCourse.data.id ? updatedCourse : course)
      }));
    } else {
      response = await api.post('/courses', courseData);
      setCourses(courses => ({
        ...courses,
        data: [...courses.data, ...(Array.isArray(response.data.data) ? response.data.data : [response.data.data])]
      }));
    }

    setNewCourse({ id: 0, name: '', description: '', tags: '' });
    setUpdatingCourse(null);
    setModalIsOpen(false);
  };

  const handleCloseModal = () => {
    const initialCourseState: NewCourse = {
      id: 0,
      name: '',
      description: '',
      tags: ''
    };

    setModalIsOpen(false);
    setUpdatingCourse(null);
    setNewCourse(initialCourseState)
  };

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal} className="p-4 mx-auto mt-10 bg-white rounded shadow-xl sm:w-3/4 lg:w-1/2">
      <button onClick={handleCloseModal} className="float-right px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700">
        X
      </button>

      <h2 className="text-lg leading-6 font-medium text-gray-900">{updatingCourse ? 'Atualizar curso' : 'Adicionar novo curso'}</h2>

      <input className="w-full px-3 py-2 mt-2 text-gray-700 border rounded-lg focus:shadow-outline" type="text" placeholder="Nome do curso" value={newCourse.name} onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })} />

      <input className="w-full px-3 py-2 mt-2 text-gray-700 border rounded-lg focus:shadow-outline" type="text" placeholder="Descrição do curso" value={newCourse.description} onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })} />

      <input className="w-full px-3 py-2 mt-2 text-gray-700 border rounded-lg focus:shadow-outline" type="text" placeholder="Tags do curso (separadas por vírgulas)" value={newCourse.tags} onChange={(e) => setNewCourse({ ...newCourse, tags: e.target.value })} />
      
      <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-700" onClick={handleAddOrUpdate}>{updatingCourse ? 'Atualizar curso' : 'Adicionar curso'}</button>
    </Modal>
  );
}
