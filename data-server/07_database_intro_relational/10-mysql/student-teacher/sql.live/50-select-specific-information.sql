select 
	STUDENT.Name as Student, 
	COURSE.Name as Course, 
	LECTURER.Name as Lecturer, 
	SUPERVISOR.SupName as Supervisor
from 
	COURSE_STUDENT_SUPERVISOR join SUPERVISOR 
	on COURSE_STUDENT_SUPERVISOR.SupNo = SUPERVISOR.SupNo
	
	join COURSE 
	on COURSE_STUDENT_SUPERVISOR.CourseNo = COURSE.CourseNo
	
	join STUDENT 
	on COURSE_STUDENT_SUPERVISOR.StuNo = STUDENT.StuNo
	
	join LECTURER_COURSE 
	on LECTURER_COURSE.CourseNo = COURSE.CourseNo
	
	join LECTURER 
	on LECTURER_COURSE.LecturerNo = LECTURER.LecturerNo
	
where 
	SUPERVISOR.SupName = 'Brown'
	and COURSE.Name = 'structures';