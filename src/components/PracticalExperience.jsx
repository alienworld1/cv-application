import Input from "./Input";

export default function PracticalExperience({formDetails, handlers}) {
  return (
    <section className="details">
        <Input
          label='Company Name'
          id='company-name'
          value={formDetails.companyName}
          handleChange={handlers.companyName}
        />
        <Input
          label='Position'
          id='position'
          value={formDetails.position}
          handleChange={handlers.position}
        />
        <Input
          label='Description'
          id='description'
          value={formDetails.description}
          handleChange={handlers.description}
        />
        <Input
          label='From'
          id='from-date'
          value={formDetails.fromDate}
          handleChange={handlers.fromDate}
          type='date'
        />
        <Input
          label='To'
          id='to-date'
          value={formDetails.toDate}
          handleChange={handlers.toDate}
          type='date'
        />
    </section>    
  )
}