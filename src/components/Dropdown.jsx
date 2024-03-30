import '../styles/Dropdown.css';

export default function Dropdown({name, isActive, children, handleClick}) {
  return (
    <div className="dropdown">
      <div className="head" onClick={handleClick}>
        <h2>{name}</h2>
      </div>
      <div className={isActive? 'visible' : ''}>
        {children}
      </div>
    </div>
  )
}