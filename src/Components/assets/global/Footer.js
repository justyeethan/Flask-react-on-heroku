import { Container, Grid, Box, Link, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  return (
    <footer>
      <Box bgcolor="palette.divider">
        <Container maxWidth="lg">
          <Typography variant="h4">Footer</Typography>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Navigation</Box>
              <Box>
                <Link href="/" color="inherit">
                  Home
                </Link>
              </Box>
              <Box>
                <Link color="inherit">About</Link>
              </Box>
              <Box>
                <Link color="inherit">Set up</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Link Group 1</Box>
              <Box>
                <Link color="inherit">Home</Link>
              </Box>
              <Box>
                <Link color="inherit">About</Link>
              </Box>
              <Box>
                <Link color="inherit">Set up</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Link Group 2</Box>
              <Box>
                <Link color="inherit">Home</Link>
              </Box>
              <Box>
                <Link color="inherit">About</Link>
              </Box>
              <Box>
                <Link color="inherit">Set up</Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center">
            Ethan Yee <CopyrightIcon fontSize="xs" /> 2021
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
