// Write your code here

import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {list} = props
  const {projectTitle, description, tagsList, duration, imageUrl, projectUrl} =
    list
  return (
    <div className="container-project-card">
      <img src={imageUrl} alt="project" className="image-for-project-card" />
      <div className="container-card-course-title-time-icon">
        <h1 className="title-course-card">{projectTitle}</h1>
        <div className="time-icon-container">
          <AiFillCalendar className="time-icon" />
          <p className="duration-text-course">{duration}</p>
        </div>
      </div>
      <p className="descripption-text">{description}</p>
      <a href={projectUrl} className="project-link">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
