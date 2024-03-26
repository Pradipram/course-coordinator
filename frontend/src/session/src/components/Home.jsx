import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [year, setYear] = React.useState('');
  const [sess, setSess] = React.useState('');
  const handleChange = (event) => {
    setYear(event.target.value);
    setSess(event.target.value);
  };
  const divStyle = {
    padding: '30px',

  };
  return (
    <div>
        <Box sx={{
            width:300,
            marginTop:20,
            marginLeft:70,
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}>
        <div style={divStyle}>Session Year</div>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Session Year</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={year}
            label="Year"
            onChange={handleChange}
            >
            <MenuItem value={2023}>2023-24</MenuItem>
            <MenuItem value={2022}>2022-23</MenuItem>
            <MenuItem value={2021}>2021-22</MenuItem>
            </Select>
        </FormControl>
        <div style={divStyle}>Session</div>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Session</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sess}
            label="Session"
            onChange={handleChange}
            >
            <MenuItem value={"M"}>Monsoon</MenuItem>
            <MenuItem value={"W"}>Winter</MenuItem>
            </Select>
        </FormControl>
        </Box>
    </div>
    
  );
}