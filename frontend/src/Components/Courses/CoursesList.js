import React from 'react'
import CourseCard from './CourseCard'
import './CourseList.css'
export default function CoursesList() {
  return (
    <div className='course-list row'>
        <div className="col-4">
            <CourseCard />
        </div>
        <div className="col-4">
            <CourseCard />
        </div>
        <div className="col-4">
            <CourseCard />
        </div>
        <div className="col-4">
            <CourseCard />
        </div>
        <div className="col-4">
            <CourseCard />
        </div>
        <div className="col-4">
            <CourseCard />
        </div>
        <div className="col-4">
            <CourseCard />
        </div>
        <div className="col-4">
            <CourseCard />
        </div>
        <div className="col-4">
            <CourseCard />
        </div>
        <div className="col-4">
            <CourseCard />
        </div>
    </div>
  )
}
