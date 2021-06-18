import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Button, ButtonGroup,Checkbox, FormControlLabel,TextField} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return(
    <FormControlLabel
      control={<Checkbox
      checked={checked}
      color="primary"
      onChange={(e)=>setChecked(e.target.checked)}
      inputProps={{'aria-label':'secondary checkbox'}}
      />} 
      label="Checkbox 測試"
    />
  )
}

function App() {
  return (
      <div className="App">
        <header className="App-header">
            <TextField type="email" label="Email" placeholder="test@gmail.com"
                InputProps={{
                startAdornment:(
                    <InputAdornment poistion="start">
                    <AccountCircle/>
                    </InputAdornment>
                ),
                }} 
            />
            <CheckboxExample/>
            <ButtonGroup>
            <Button variant="contained" color="primary" size="large" startIcon={<SaveIcon />} >
              SAVE
            </Button>
            <Button variant="contained" color="secondary" size="large" endIcon={<CloudUploadIcon />}> 
              UPLOAD 
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;
