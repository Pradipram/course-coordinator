import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CoursesList from '../Courses/CoursesList';

export default function Header() {
  const [value, setValue] = React.useState(0);
  const [assigned,setAssigned]=React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setAssigned(!assigned);
    console.log(assigned);
  };

  

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Unassigned Courses"/>
        <Tab label="Assigned Courses" />

      </Tabs>
      <CoursesList/>
    </Box>
  );
}
