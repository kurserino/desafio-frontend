import { Add } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";

const Heading: FC = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "24px",
    }}
  >
    <Typography variant="h6" component="h1">
      Produtos
    </Typography>
    <Button
      variant="contained"
      startIcon={<Add />}
      onClick={() => {
        // Implement add functionality
      }}
    >
      Novo produto
    </Button>
  </Box>
);

export default Heading;
