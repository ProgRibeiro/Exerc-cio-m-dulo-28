import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();

    if (altura && peso) {
      const imc = (peso / (altura * altura)).toFixed(2);
      setImc(imc);

      let classificacao = '';
      if (imc < 18.5) classificacao = 'Abaixo do peso';
      else if (imc >= 18.5 && imc <= 24.9) classificacao = 'Peso normal';
      else if (imc >= 25 && imc <= 29.9) classificacao = 'Sobrepeso';
      else if (imc >= 30 && imc <= 34.9) classificacao = 'Obesidade grau I';
      else if (imc >= 35 && imc <= 39.9) classificacao = 'Obesidade grau II';
      else classificacao = 'Obesidade grau III ou mórbida';
      setClassificacao(classificacao);
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC}>
        <div>
          <label>Altura (m):</label>
          <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
        </div>
        <div>
          <label>Peso (kg):</label>
          <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </div>
        <button type="submit">Calcular</button>
      </form>

      {imc && (
        <div>
          <h2>Seu IMC é: {imc}</h2>
          <h3>Classificação: {classificacao}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
