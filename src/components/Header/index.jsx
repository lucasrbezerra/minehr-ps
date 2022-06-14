import { useState } from "react";
import { Wrapper, TextWrapper, Title, Subtitle, FilterButton } from "./styled";
import { Filter } from "../../components";
import Popover from "@mui/material/Popover";

export const Header = () => {
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
      <TextWrapper>
        <Title>Dashboard</Title>
        <Subtitle>Desafio Técnico Frontend</Subtitle>
      </TextWrapper>
      <FilterButton onClick={handleClick}>
        <i className="fas fa-filter"></i>
        Filtrar
      </FilterButton>
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
        <Filter />
      </Popover>
    </Wrapper>
  );
};
