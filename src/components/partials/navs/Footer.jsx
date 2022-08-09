import { Box, Container } from "@mui/system";
import React from "react";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#012b72", color: "white", display: "flex" }}>
      <Container sx={{display:"flex",justifyContent:"space-between"}}>
        <Box>
          <h3>ABOUT</h3>
          <p>How Xentice Works</p>
          <p>How Xentice Works</p>
          <p>How Xentice Works</p>
        </Box>
        <Box>
          <h3>ABOUT</h3>
          <p>How Xentice Works</p>
          <p>How Xentice Works</p>
          <p>How Xentice Works</p>
        </Box><Box>
          <h3>ABOUT</h3>
          <p>How Xentice Works</p>
          <p>How Xentice Works</p>
          <p>How Xentice Works</p>
        </Box><Box>
          <h3>ABOUT</h3>
          <p>How Xentice Works</p>
          <p>How Xentice Works</p>
          <p>How Xentice Works</p>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
