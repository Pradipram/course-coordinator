import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './CourseDetails.css'

export default function CourseDetails() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 450,
        height:'75%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 3,
      };

    const styleCourse={
        color:'#027FDE',
        fontSize:'30px',
        fontWeight:'bold'
    }
      
  return (

    <Box sx={style} style={{overflowY:'auto'}}>
          <Typography gutterBottom variant="h5" component="div" sx={styleCourse}>
            Digital Image Processing 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            CSC202
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Computer Science and Engineering
          </Typography>

          <FormControl sx={{marginTop:'25px'}} >
                <Typography gutterBottom variant="h5" component="div">
                    Course Instructors
                </Typography>
                <div className="instructors-form">

              
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="d" control={<Radio />} label="Soumen Bag" />
                    <FormControlLabel value="d" control={<Radio />} label="Soumen Bag " />
                   

                    
                </RadioGroup>
                </div>
                <button className='btn btn-outline-primary' style={{marginTop:'30px'}} >Save
                </button>
            </FormControl>

    </Box>

  )
}
