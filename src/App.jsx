import './styles/App.css';
import { useState } from 'react';

import GeneralInformation from './components/GeneralInformation';

const generalInformation = {
  name: 'Bob',
  email: 'example@domain.com',
  phoneNumber: '555-55555',
}

export default function App() {
  const [general, setGeneral] = useState(generalInformation);

  const handlers = {
    nameHandler: e => {
      setGeneral({...general, name: e.target.value});
    }
  }

  return (
    <main>
      <GeneralInformation
        formDetails={general}
        handlers={handlers}
      />
    </main>
  )
}