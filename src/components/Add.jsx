import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {
   Avatar,
   Box,
   Button,
   ButtonGroup,
   Modal,
   Stack,
   TextField,
   Tooltip,
   Typography,
} from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";
import {
   DateRange,
   EmojiEmotions,
   Image,
   PersonAdd,
   VideoCameraBack,
} from "@mui/icons-material";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: {
      xs: "90%",
      md: "70%",
   },
   height: 320,
   borderRadius: "5px",
   boxShadow: 24,
   p: 3,
};

const UserBox = styled(Box)({
   display: "flex",
   alignItems: "center",
   gap: "10px",
   marginBottom: "20px",
});

export const Add = () => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   return (
      <>
         <Tooltip
            onClick={handleOpen}
            title="Add"
            sx={{
               position: "fixed",
               bottom: 20,
               left: { xs: "calc(50% - 24px)", md: 30 },
            }}
         >
            <Fab color="primary" aria-label="add">
               <AddIcon />
            </Fab>
         </Tooltip>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box
               sx={style}
               bgcolor={"background.default"}
               color={"text.primary"}
            >
               <Typography variant="h6" color="gray" textAlign="center">
                  Create Post
               </Typography>
               <UserBox>
                  <Avatar
                     src="https://material-ui.com/static/images/avatar/1.jpg"
                     alt="Remy Sharp"
                     sx={{ width: 30, height: 30 }}
                  />
                  <Typography fontWeight={500} varaint="span">
                     Remy Sharp
                  </Typography>
               </UserBox>
               <TextField
                  sx={{ width: "100%" }}
                  id="standard-multiline-static"
                  multiline
                  rows={3}
                  placeholder="Whats on your mind?"
                  variant="standard"
               />
               <Stack direction="row" gap={1} mt={2} mb={3}>
                  <EmojiEmotions color="primary" />
                  <Image color="secondary" />
                  <VideoCameraBack color="success" />
                  <PersonAdd color="error" />
               </Stack>
               <ButtonGroup
                  fullWidth
                  variant="contained"
                  aria-label="outlined primary button group"
               >
                  <Button>Post</Button>
                  <Button sx={{ width: "100px" }}>
                     <DateRange />
                  </Button>
               </ButtonGroup>
            </Box>
         </Modal>
      </>
   );
};
