import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Header from './Header';
import Resultado from './Resultado';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pesoCalculado: 0,
      planeta: ""
    }
  }
  
  onPesoCalculado = (peso) => {
    this.setState({
      pesoCalculado: Number(peso)
      
    })
  }
  
  onPlanetaSeleccionado = (planeta) => {
    this.setState({
      planeta: planeta
     
    })
  }
  
  render() {

    let estaSeteado = true;

    if (this.state.pesoCalculado !== 0 && this.state.planeta.length > 1) {
      estaSeteado = true;
    } else {
      estaSeteado = false;
    }
    
    
    return (
      <div className="App">
      <Header title="Calcula tu peso de otro PLANETA!" color="white" />
      <Form calcularPeso={this.onPesoCalculado} nombrePlaneta={this.onPlanetaSeleccionado}/>
      {estaSeteado === true && <Resultado elResultado={this.state.pesoCalculado} nombrePlaneta={this.state.planeta}/>}
      {estaSeteado === false && <label className="resultado">Por favor complete los campos</label>}
      </div>
      );
    }
  }
  
  export default App;
