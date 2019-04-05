import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class App extends Component {

  handleChange = name => event => {
      this.setState({ [name]: event.target.value });
    };


    constructor(props) {
        super(props);
        this.state = {
          inputValue: 0,
          values: [
            ["Carro popular", 3],
            ["Campo de Futebol", 33494],
            ["Viagem de ida e volta até a Lua", 320000000],
            ["Fiat Uno 1.0 2000", 6800],
            ["Ingresso do rock in rio", 495],
            ["Passage aérea RJ -> SP", 183],
            ["Salario do Neymar", 821000000]
          ],
        };
  }

  renderItems() {
    const { values } = this.state
    const { inputValue } = this.state

    if (!inputValue || parseInt(inputValue) <= 0) {
      return
    } else {
      return (
          values.map(item =>
            <div>
              <strong>{item[0]}</strong>: {inputValue/item[1]}
              <Divider light />
            </div>
          )
        )
    }
  }

  render() {
    const { classes } = this.props;
    const { inputValue } = this.state

    return (
      <div>
        <div className="App">
        <h1>
          Conversor de inutilidades
        </h1>
          <TextField
            id="standard-number"
            label="Valor"
            value={inputValue}
            onChange={this.handleChange('inputValue')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
        </div>
        <content>
          {this.renderItems()}
        </content>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
