import { Chip, Stack } from "@mui/material";

const DemoChip = () => {
  return (
    <div className="demo-chip-wrapper">
      <Stack direction="row" spacing={1}>
        <Chip label="MUI" color="primary" variant="outlined" />
        <Chip label="React" color="warning" />
        <Chip label="CSS" color="success" />
        <Chip label="TypeScript" color="error" />
        <Chip label="JavaScript" variant="outlined" />
      </Stack>
    </div>
  );
};

export default DemoChip;
