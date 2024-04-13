export interface Course {
  id: number;
  attributes: {
    name: string;
    description: string;
    tags: string[];
  };
}

export interface NewCourse {
  id: number;
  name: string;
  description: string;
  tags: string;
};

export interface ApiResponse {
  data: Course[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export interface CourseDetails {
  id: number;
  attributes: {
    name: string;
    description: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export interface CourseDetailsResponse {
  data: CourseDetails;
  meta: {};
};
