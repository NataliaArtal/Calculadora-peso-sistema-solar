import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pesoReal: 0,
            pesoPlaneta: 0,
            planeta: [
                { id:1, value: 'Mercurio', peso: 0.0387 },
                { id:2, value: 'Venus', peso: 0.9051 },
                { id:3, value: 'Marte', peso: 0.3775 },
                { id:4, value: 'Jupiter', peso: 2.5306 },
                { id:5, value: 'Saturno', peso: 1.0653 },
                { id:6, value: 'Urano', peso:  0.8877 },
                { id:7, value: 'Neptuno', peso: 1.1377 },
                { id:8, value: 'Pluton', peso: 0.0632 }  
            ]
        }
        
    }
    
    inputChange = (event) => {
        this.setState({
            pesoReal: Number(event.target.value)
        })
    }
    
    selectChange = (event) => {
        this.setState({
            pesoPlaneta: Number(this.obtenerPesoPlaneta(event.target.value))
        })
    }
    
    obtenerPesoPlaneta = (planetaId) => {
        var planeta = this.state.planeta.filter( (planeta) => planeta.id === Number(planetaId))[0];
        this.props.nombrePlaneta(planeta.value);
        return planeta.peso;
    }
    
    calcularPeso = () => {
        var pesoReal = Number(this.state.pesoReal);
        var pesoPlaneta = Number(this.state.pesoPlaneta);
        
        this.props.calcularPeso(Number(pesoReal * pesoPlaneta));
    }
    
    render () {
        return (
            <div>
            <form className="formulario">
            <input className="input" placeholder="Calcula tu peso" value={this.state.pesoReal} onChange={this.inputChange}></input>
            <select className="select" name="select" onChange={this.selectChange}>
            <option selected></option>
            {this.state.planeta.map(p=>
                <option value={p.id} key={p.id}>{p.value}</option>)}
                </select>
                </form>
                <button onClick={this.calcularPeso} className="boton">CALCULAR</button>
                </div>
                
                );
            };
        };
        
        export default Form;