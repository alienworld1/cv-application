/* eslint-disable react/prop-types */
import Input from "./Input";

export default function GeneralInformation({formDetails, handlers}) {
  return (
    <section className="details">
        <h2>General Information</h2>
        <Input
          label='Name'
          id='name'
          value={formDetails.name}
          handleChange={handlers.name}
        />
        <Input
          label='Email'
          id='email'
          value={formDetails.email}
          handleChange={handlers.email}
          type='email'
        />
        <Input
          label='Phone Number'
          id='phone'
          value={formDetails.phone}
          handleChange={handlers.phone}
          type='number'
        />
    </section>    
  )
}