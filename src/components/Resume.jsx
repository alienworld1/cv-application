/* eslint-disable react/prop-types */
import '../styles/Resume.css'

export default function Resume({generalDetails}) {
  return (
    <div className="resume">
      <section className="general">
        <h2>{generalDetails.name}</h2>
      </section>
    </div>
  )
}