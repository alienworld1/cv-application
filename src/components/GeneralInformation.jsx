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
          handleChange={handlers.nameHandler}
        />
    </section>    
  )
}