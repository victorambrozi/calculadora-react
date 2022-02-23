import React from "react";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display";

//styles
import { Container, Title } from "./calculator-style";

const estadoIncial = {
  valorDoDisplay: "0",
  limparDisplay: false,
  operacao: null,
  valores: [0, 0],
  valorAtual: 0,
};

class Calculator extends React.Component {
  state = { ...estadoIncial };

  constructor(props) {
    super(props);

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }
  clearMemory() {
    // quando clicar
    this.setState({ ...estadoIncial });
    console.log("limpar");
  }

  setOperation(operation) {
    if (this.state.valorAtual === 0) {
      this.setState({ operation, valorAtual: 1, limparDisplay: true });
    } else {
      const result = operation === "=";
      const operacaoAtual = this.state.operacao;
      const valores = [...this.state.valores];

      try {
        valores[0] = eval(`${valores[0]} ${operacaoAtual} ${valores[1]}`);
      } catch (error) {
        valores[0] = this.state.valores[0];
      }
      
      valores[1] = 0;
      this.setState({
        valorDoDisplay: valores[0],
        operacao: result ? null : operation,
        valorAtual: result ? 0 : 1,
        limparDisplay: !result,
        valores,
      });
    }
    console.log(operation);
  }

  addDigit(digit) {
    if (digit === "." && this.state.valorDoDisplay.includes(".")) {
      return;
    }

    const limparDisplay =
      this.state.valorDoDisplay === "0" || this.state.limparDisplay;
    const valorCorrente = limparDisplay ? "" : this.state.valorDoDisplay;
    const valorDoDisplay = valorCorrente + digit;
    this.setState({ valorDoDisplay, limparDisplay: false });

    if (digit !== ".") {
      const i = this.state.valorAtual;
      const novoValor = parseFloat(valorDoDisplay);
      const valores = [...this.state.valores];
      valores[i] = novoValor;
      this.setState({ valores });

      console.log(valores);
    }
  }

  render() {
    return (
      <>
        <Title>Calculadora</Title>
        <Container>
          <Display value={this.state.valorDoDisplay} />
          <Button
            label="AC"
            classValue={"triple"}
            onClick={() => this.clearMemory()}
          />
          <Button
            label="/"
            classValue={"operation"}
            onClick={this.setOperation}
          />
          <Button label="7" onClick={this.addDigit} />
          <Button label="8" onClick={this.addDigit} />
          <Button label="9" onClick={this.addDigit} />
          <Button
            label="*"
            classValue={"operation"}
            onClick={this.setOperation}
          />
          <Button label="4" onClick={this.addDigit} />
          <Button label="5" onClick={this.addDigit} />
          <Button label="6" onClick={this.addDigit} />
          <Button
            label="-"
            classValue={"operation"}
            onClick={this.setOperation}
          />
          <Button label="1" onClick={this.addDigit} />
          <Button label="2" onClick={this.addDigit} />
          <Button label="3" onClick={this.addDigit} />
          <Button
            label="+"
            classValue={"operation"}
            onClick={this.setOperation}
          />
          <Button label="0" onClick={this.addDigit} classValue={"double"} />
          <Button label="." onClick={this.addDigit} />
          <Button
            label="="
            classValue={"operation"}
            onClick={this.setOperation}
          />
        </Container>
      </>
    );
  }
}

export default Calculator;
