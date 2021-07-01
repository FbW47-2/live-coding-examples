select * 
from COURSE, LECTURER_COURSE, LECTURER
where 
  COURSE.CourseNo = LECTURER_COURSE.CourseNo
  and LECTURER_COURSE.LecturerNo = LECTURER.LecturerNo;
