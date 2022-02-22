import React from "react";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display";

//styles
import { Container, Title } from "./calculator-style";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }
  clearMemory() {
    console.log("limpar");
  }

  setOperation(operation) {
    console.log(operation);
  }

  addDigit(digit) {
    console.log(digit);
  }

  render() {
    return (
      <>
        <Title>Calculadora</Title>
        <Container>
          <Display value="100" />
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
