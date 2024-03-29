/* eslint-disable react/prop-types */
import '../styles/Input.css';

export default function Input({id, value, handleChange, label}) {
    return (
        <section className='input-field'>
            <label htmlFor={id}>{label}</label>
            <input
                type='text'
                value={value}
                onChange={handleChange}
            />
        </section>
    )
}