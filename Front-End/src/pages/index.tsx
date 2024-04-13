import { useState } from 'react';
import Modal from 'react-modal';

import api from '@/services/api';

import { CourseForm } from '@/components/CourseForm';
import { CourseList } from '@/components/CourseList';

import { ApiResponse, CourseDetailsResponse, NewCourse } from '@/types/Course';

import "../app/globals.css";

const initialCourseState: NewCourse = {
  id: 0,
  name: '',
  description: '',
  tags: ''
};

export default function Home({ initialCourses }: { initialCourses: ApiResponse }) {
  Modal.setAppElement('#__next');
  
  const [courses, setCourses] = useState(initialCourses);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [updatingCourse, setUpdatingCourse] = useState<CourseDetailsResponse | null>(null);
  const [newCourse, setNewCourse] = useState<NewCourse>(initialCourseState);

  return (
    <div className="p-6">
      <button className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setModalIsOpen(true)}>+</button>

      <CourseForm modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} setCourses={setCourses} newCourse={newCourse} setNewCourse={setNewCourse} setUpdatingCourse={setUpdatingCourse} updatingCourse={updatingCourse} />

      <CourseList courses={courses} setModalIsOpen={setModalIsOpen} setCourses={setCourses} setUpdatingCourse={setUpdatingCourse} setNewCourse={setNewCourse} />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await api.get('/courses');
  const initialCourses: ApiResponse = response.data;

  return {
    props: {
      initialCourses,
    },
  };
}