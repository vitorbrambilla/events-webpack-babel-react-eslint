import React from "react";

const App = () => {

  const name = 'Digital Innovation One'

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
  }

  const showEvent = (e) => {
    console.log('Evento clicado!');
    console.log(e);
    alert(name);
  }
  
  const Button = <button onClick={showEvent}>Show event</button>

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D</p>
      <input onChange={handleChange} />
      {Button}
    </div>
  );
};

export default App;