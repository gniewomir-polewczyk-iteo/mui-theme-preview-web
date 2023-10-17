import { Box, MenuItem, TextField } from "@mui/material";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const MuiTextfield = () => {
  return (
    <div className="mui-textfield-wrapper">
      <h1>Textfield</h1>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          sx={{ mr: 1 }}
        />
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          sx={{ mr: 1 }}
        />
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          sx={{ mr: 1 }}
        />
      </Box>

      <h1>Textfield error</h1>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          error
          id="outlined-basic"
          label="Error"
          helperText="Incorrect entry."
          variant="outlined"
          sx={{ mr: 1 }}
        />
        <TextField
          error
          id="filled-basic"
          label="Error"
          helperText="Incorrect entry."
          variant="filled"
          sx={{ mr: 1 }}
        />
        <TextField
          error
          id="standard-basic"
          label="Error"
          helperText="Incorrect entry."
          variant="standard"
          sx={{ mr: 1 }}
        />
      </Box>

      <h1>Textfield select</h1>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          sx={{ mr: 1 }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          sx={{ mr: 1 }}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Box>
    </div>
  );
};

export default MuiTextfield;
