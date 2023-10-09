import Button from "@mui/material/Button";
import "./muiButton.css";
import { TextField } from "@mui/material";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
export function MuiButton() {
  const genderOption = ["MALE", "FEMALE"];

  const [heder, setHeder] = useState("WELCOME");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setHeder(inputValue);
  };

  return (
    <div className="container">
      <Typography variant="h1">{heder}</Typography>
      <TextField
        value={inputValue}
        onChange={handleInputChange}
        className="myTextField"
        variant="outlined"
        sx={{
          "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input ": {
            background: "skyblue",
          },
        }}
      >
        TEXT FIELD
      </TextField>
      <TextField
        select
        label="select"
        defaultValue="MALE"
        helperText="select your gender"
        variant="filled"
      >
        {genderOption.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Button
        className="myButton"
        variant="contained"
        sx={{
          "& .css-sghohy-MuiButtonBase-root-MuiButton-root ": {
            marginTop: "300px",
          },
        }}
        onClick={handleButtonClick}
      >
        BUTTON
      </Button>
    </div>
  );
}
