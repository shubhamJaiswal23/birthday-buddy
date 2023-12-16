const Person = (props) => {
  const { name, image, age } = props.user;
  //   const handleClick = () => {
  //     console.log('i got clicked');
  //   };
  return (
    <li className="person">
      <img src={image} alt={name} className="img" />
      <div className="person-info">
        <h4>{name}</h4>
        <p>{age} years</p>
        {/* <span>
          <button className="btn-cancel" onClick={handleClick}>
            x
          </button>
        </span>
        <hr /> */}
      </div>
    </li>
  );
};
export default Person;
