import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ReactGA from 'react-ga';

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
            ["Carro popular", 28233.00],
            ["Campo de Futebol", 33494],
            ["Viagem de ida e volta até a Lua", 320000000],
            ["Fiat Uno 1.0 2000", 6800],
            ["Ingresso do rock in rio", 495],
            ["Passagem aérea RJ -> SP", 183],
            ["Noite no DIDGE", 270],
            ["Salário mímino", 998],
            ["Passe de ônibus em Floripa", 4.40],
            ["Tesla X básico", 103643.34],
            ["Salario do Neymar", 821000000]
          ],
        };
        this.initializeReactGA();
  }

  initializeReactGA() {
    ReactGA.initialize('UA-137801796-1');
    ReactGA.pageview('/');
  }

  decimalFixedValue(value) {
    if (Number.isInteger(value)) {
      return value.toFixed(0)
    }

    var match = (''+value).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match) { return 0; }
    var places=  Math.max(
                         0,
                         // Number of digits right of decimal point.
                         (match[1] ? match[1].length : 0)
                         // Adjust for scientific notation.
                         - (match[2] ? +match[2] : 0));

    return value.toFixed(places)
  }

  renderItems() {
    const { values } = this.state
    const { inputValue } = this.state

    if (!inputValue || parseInt(inputValue) <= 0) {
      return
    } else {
      return (
          values.sort((a, b) => (a[1] > b[1]) ? 1 : -1)
          .map(item =>
            <div style={{marginTop: '20px', marginLeft: '20px'}}>
              <strong>{item[0]}</strong>: {this.decimalFixedValue(inputValue/item[1])}
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
            label="Valor em R$"
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
