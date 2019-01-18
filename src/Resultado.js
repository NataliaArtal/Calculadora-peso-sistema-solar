import React from 'react';


class Resultado extends React.Component {
    
    render () {
        
        return (
            <div className="resultado">
            <label>Tu peso en {this.props.nombrePlaneta} es </label>
            <label>{this.props.elResultado}</label>
            </div>
            );
        };
    };
    
    export default Resultado;