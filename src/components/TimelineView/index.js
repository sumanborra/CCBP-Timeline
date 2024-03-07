// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

class TimelineView extends Component {
  // state = {timelineItemsList:this.props.timelineItemsList}

  render() {
    const {timelineItemsList} = this.props
    const items = timelineItemsList.map(each => ({title: each.title}))

    return (
      <div className="chrono-container">
        <h1 className="heading-text-top">
          <span className="para-text-top">MY JOURNEY OF</span>
          <br /> CCBP 4.0
        </h1>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={items}
          theme={{
            primary: '#0967d2',
            secondary: '#ffffff',
            cardBgColor: '#ffffff',
            cardForeColor: '#2b237c',
            titleColor: '#0967d2',
          }}
        >
          {timelineItemsList.map(each => {
            if (each.categoryId === 'COURSE') {
              return <CourseTimelineCard list={each} key={each.id} />
            } else if (each.categoryId === 'PROJECT') {
              return <ProjectTimelineCard list={each} key={each.id} />
            }
          })}
        </Chrono>
      </div>
    )
  }
}
export default TimelineView
