import React from "react";
import "./Selector.scss";
import symbols from "./symbol-data.json";
import { Button, Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbolData: symbols,
    };
  }

  render() {
    return (
      <div>
        <Table className="buttons" size="sm">
          <Thead>
            <Tr>
              <th className="header">Render Data</th>
            </Tr>
          </Thead>
          <Tbody>
            {this.state.symbolData.map((symbol) => (
              <Tr>
                <Button onClick={() => this.props.handler(symbol.symbol)}>
                  {symbol.name}
                </Button>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    );
  }
}

export default Selector;
