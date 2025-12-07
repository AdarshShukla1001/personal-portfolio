import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="July 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Mobile Developer</h3>
            <h4>White Mastery Systems - Remote</h4>
            <p>
              Engineered scalable Flutter architectures using advanced state management, modular design,
              and rich UI/UX with animation-heavy, emotionally engaging user experiences.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2022 - April 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Freelancer</h3>
            <h4>Cryptotalkies, BetDekho & Others</h4>
            <p>
              Delivered apps using Flutter, Django, Firebase, REST APIs, and Redis.
              Built stable architectures, auth systems, and real-time features across multiple client products.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2022 - March 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Co-Founder & Lead Developer</h3>
            <h4>Seetaara - Shop Bird Technology Pvt. Ltd.</h4>
            <p>
              Built a hyperlocal marketplace with real-time inventory sync and geolocation-based fulfillment.
              Designed Try & Buy workflows using state machines, stock reservation, and courier flows.
              Refactored core systems into Go for higher throughput and reliability.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
