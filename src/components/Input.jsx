/* eslint-disable react/prop-types */
import '../styles/Input.css';

export default function Input({id, value, handleChange, label, type}) {
    return (
        <section className='input-field'>
            <label htmlFor={id}>{label}</label>
            <input
                type={type || 'text'}
                value={value}
                onChange={handleChange}
            />
        </section>
    )
}