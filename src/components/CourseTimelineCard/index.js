// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {list} = props
  const {courseTitle, description, tagsList, duration} = list

  return (
    <div className="container-card-course">
      <div className="container-card-course-title-time-icon">
        <h1 className="title-course-card">{courseTitle}</h1>
        <div className="time-icon-container">
          <AiFillClockCircle className="time-icon" />
          <p className="duration-text-course">{duration}</p>
        </div>
      </div>
      <p className="descripption-text">{description}</p>
      <ul className="list-container">
        {tagsList.map(each => (
          <li className="list-item" key={each.id}>
            <button className="buttn"><p>{each.name}</p></button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
