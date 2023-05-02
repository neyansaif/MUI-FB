import { Box } from "@mui/material";
import { Post } from "./Post";

export const Feed = () => {
   return (
      <Box flex={4} p={2} sx={{padding:{xs:0}}}>
         <Post />
         <Post />
         <Post />
      </Box>
   );
};
