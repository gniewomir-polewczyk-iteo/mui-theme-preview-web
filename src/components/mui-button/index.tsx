import { Button, Stack } from "@mui/material";

const MuiButton = () => {
  return (
    <div className="mui-button-wrapper">
      <h1>Basic button</h1>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <h1>Text button</h1>
      <Stack direction="row" spacing={2}>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </Stack>

      <h1>Contained button</h1>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Primary</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
      </Stack>

      <h1>Outlined button</h1>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined">Primary</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons">
          Link
        </Button>
      </Stack>
    </div>
  );
};

export default MuiButton;
