const AgeCharacter = ({ age, name, image }) => {
    return (
      <div id='infoCard'>
        <p>{age}</p>
        <p>{name}</p>
        <div>
          <img className= "c-img" src={`http://localhost:3020/${image}`} alt={name}/>
        </div>
      </div>
    ) 
  }
  export default AgeCharacter