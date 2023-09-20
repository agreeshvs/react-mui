import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1" gutterBottom>h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component='h1' gutterBottom>h4 Heading</Typography>
      {/* Here, the h4 element is changed to h1 element, but the css will be as of h4. */}
      {/* gutterBottom used to give a default margin at the bottom of element. */}
      {/* For larger element margin will be larger */}
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, ipsam
        optio ipsum ducimus, deserunt officiis quis sapiente dolor reprehenderit
        ex doloremque nemo officia asperiores aperiam iure quas. Dignissimos,
        voluptate natus.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quidem ea
        sequi hic dolores, architecto, labore error accusamus neque odit
        voluptatum totam amet aliquam expedita quia, perferendis aut voluptate
        dignissimos?
      </Typography>
    </div>
  );
};

export default MuiTypography;
