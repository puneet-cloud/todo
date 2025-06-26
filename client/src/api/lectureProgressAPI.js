// api/lectureProgressAPI.js
import axiosInstance from "../utils/axios.helper";

export const getLectureProgress = async ({subjectId}) => {
  const res = await axiosInstance.post('/progress', {subjectId});

  console.log('Lecture progress data fetched:', res.data);
  return res.data; 
};

export const markLectureComplete = async ({subjectId, chapterId, lectureId, completed }) => {
  const response = axiosInstance.post('/progress/update', {subjectId, chapterId, lectureId, completed });
  console.log('Lecture completion status updated:', response);
  return response;
};
