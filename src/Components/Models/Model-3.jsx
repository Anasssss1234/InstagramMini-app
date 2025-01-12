import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Modal3( {value, comment,setComment, increase, setIncrease}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDelete=(id)=>{
        const deletedData= comment.filter((value)=>{
            return value.id!=id
        })
        setComment(deletedData);
        setIncrease(increase-1);

    }
    return (
        <div>
            <Button onClick={handleOpen}><MoreVertIcon /></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" textAlign='center'>
                        Delete the comment ?
                    </Typography>
                    <Box sx={{ textAlign:'center', display:'flex', justifyContent:'space-evenly', marginTop:'15px'}}>
                        <Button variant="contained" size='small' color="secondary" onClick={()=>handleDelete(value.id)}>
                            yes
                        </Button>
                        <Button variant="contained" size='small' color="secondary" onClick={handleClose}>
                            no
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
