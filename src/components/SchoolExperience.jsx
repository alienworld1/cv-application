/* eslint-disable react/prop-types */
import Input from "./Input";

export default function SchoolExperience({formDetails, handlers}) {
  return (
    <section className="details">
        <h2>School Experience</h2>
        <Input
          label='School Name'
          id='name'
          value={formDetails.schoolName}
          handleChange={handlers.schoolName}
        />
        <Input
          label='Title of Study'
          id='title-of-study'
          value={formDetails.titleOfStudy}
          handleChange={handlers.titleOfStudy}
        />
        <Input
          label='Graduation Date'
          id='graduation-date'
          value={formDetails.graduationDate}
          handleChange={handlers.graduationDate}
          type='date'
        />
    </section>    
  )
}