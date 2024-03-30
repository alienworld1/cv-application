/* eslint-disable react/prop-types */
import '../styles/Resume.css'

import email from '../assets/email.svg';
import phone from '../assets/phone.svg';

export default function Resume({
  generalDetails,
  schoolDetails,
  practicalExperience,
}) {
  return (
    <div className="resume">
      <section className="general">
        <h2>{generalDetails.name}</h2>
        <div className="contact">
          <div className="email">
            <img src={email} alt="email" />
            {generalDetails.email}
          </div>
          <div className="phone">
            <img src={phone} alt="phone" />
            {generalDetails.phone}
          </div>
        </div>
      </section>
      <hr/>
      <section className="experience">
          <div className="left-right">
            <p className="bold">{schoolDetails.schoolName}</p>
            <p>Graduated at: {schoolDetails.graduationDate}</p>
          </div>
          <p>{schoolDetails.titleOfStudy}</p>
      </section>
      <hr/>
      <section className="experience">
        <div className="left-right">
          <p className="bold">{practicalExperience.companyName}</p>
          <p>{practicalExperience.fromDate} - {practicalExperience.toDate}</p>
        </div>
        <p>{practicalExperience.position}, <i>{practicalExperience.description}</i></p>
      </section>
    </div>
  )
}