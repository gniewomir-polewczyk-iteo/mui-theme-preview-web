import { Button, ButtonGroup } from "@mui/material";

const MuiButtonGroup = () => {
  return (
    <div className="mui-button-group-wrapper">
      <h1>Text button group</h1>
      <ButtonGroup variant="text">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <h1>Contained button group</h1>
      <ButtonGroup variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <h1>Outlined button group</h1>
      <ButtonGroup variant="outlined">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
};

export default MuiButtonGroup;
