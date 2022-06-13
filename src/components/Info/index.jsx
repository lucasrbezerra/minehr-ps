import { useState } from "react";
import { Wrapper, InfoButton, Text } from "./styled";
import Popover from "@mui/material/Popover";

export const Info = ({ text }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Wrapper>
      <InfoButton onClick={handleClick}>
        <i className="fas fa-info"></i>
      </InfoButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Text>{text}</Text>
      </Popover>
    </Wrapper>
  );
};
