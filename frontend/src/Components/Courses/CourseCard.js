import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


import './CourseCard.css'
import CourseDetails from './CourseDetails';

export default function CourseCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
      <Card sx={{ maxWidth: 345 }} className='card-container'>
        {/* <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Digital Image Processing
          </Typography>
          <Typography variant="body2" color="text.secondary">
            CSC202
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Computer Science and Engineering
          </Typography>
          
        </CardContent>
        <CardActions>
          <button type="button" class="btn btn-outline-custom" onClick={handleOpen}>Assign Coordinator</button>
        </CardActions>

        {/* Modal for course detail */}
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <CourseDetails/>
        </Modal>


      </Card>
  );
}