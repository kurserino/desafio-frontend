import { Box } from "@mui/material";
import { Container } from "@mui/system";
import Header from "../Header";
import StickyHeadTable from "../StickyHeadTable";

function App() {
  return (
    <Box sx={{ background: "#F9FAFB", minHeight: "100vh" }}>
      <Header />
      <Container sx={{ padding: "33px 20px" }}>
        <StickyHeadTable />
      </Container>
    </Box>
  );
}

export default App;
