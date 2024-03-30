import './styles/App.css';
import { useState } from 'react';

import GeneralInformation from './components/GeneralInformation';
import SchoolExperience from './components/SchoolExperience';
import Resume from './components/Resume';
import Dropdown from './components/Dropdown';
import PracticalExperience from './components/PracticalExperience';

const generalInformation = {
  name: 'Bob',
  email: 'example@domain.com',
  phone: '55555555',
}

const schoolExperience = {
  schoolName: 'Western High School',
  titleOfStudy: 'Computer Science',
  graduationDate: '02-02-2024',
}

const practicalExperience = {
  companyName: 'Company',
  position: 'Developer',
  description: 'Develop software',
  fromDate: '02-02-2023',
  toDate: '02-02-2024',
}

export default function App() {
  const [general, setGeneral] = useState(generalInformation);
  const [school, setSchool] = useState(schoolExperience);
  const [practical, setPractical] = useState(practicalExperience);

  const [activeDropdown, setActiveDropdown] = useState(0);

  const handlers = {
    name: e => {
      setGeneral({...general, name: e.target.value});
    },
    email: e => {
      setGeneral({...general, email: e.target.value});
    },
    phone: e => {
      setGeneral({...general, phone: e.target.value});
    },
    schoolName: e => {
      setSchool({...school, schoolName: e.target.value});
    },
    titleOfStudy: e => {
      setSchool({...school, titleOfStudy: e.target.value});
    },
    graduationDate: e => {
      setSchool({...school, graduationDate: e.target.value});
    },
    companyName: e => {
      setPractical({...practical, companyName: e.target.value});
    },    
    position: e => {
      setPractical({...practical, position: e.target.value});
    },   
    description: e => {
      setPractical({...practical, description: e.target.value});
    },    
    fromDate: e => {
      setPractical({...practical, fromDate: e.target.value});
    },    
    toDate: e => {
      setPractical({...practical, toDate: e.target.value});
    },    
  }

  return (
    <main>
      <div className="inputs">
        <Dropdown
          name='General Information'
          isActive={activeDropdown === 0}
          handleClick={() => setActiveDropdown(0)}
        >
          <GeneralInformation
            formDetails={general}
            handlers={handlers}
          />
        </Dropdown>
        <Dropdown
          name='School Experience'
          isActive={activeDropdown === 1}
          handleClick={() => setActiveDropdown(1)}
        >
        <SchoolExperience
          formDetails={school}
          handlers={handlers}
        />
      </Dropdown>
      <Dropdown
        name='Practical Experience'
        isActive={activeDropdown === 2}
        handleClick={() => setActiveDropdown(2)}
      >
        <PracticalExperience
          formDetails={practical}
          handlers={handlers}
        />
      </Dropdown>
      </div>
      <Resume
        generalDetails={general}
        schoolDetails={school}
      />
    </main>
  )
}