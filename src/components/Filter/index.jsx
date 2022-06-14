import { useContext, useState } from "react";
import { ChartsContext } from "../../contexts";
import { Wrapper, Title } from "./styled";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Divider from "@mui/material/Divider";

export const Filter = () => {
  const { professionsFilter, handleFilter } = useContext(ChartsContext);

  return (
    <Wrapper>
      <Title>Filtrar Por:</Title>
      <Divider />
      <FormGroup>
        {professionsFilter.map((item, index) => {
          return (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={item.checked}
                  onChange={() => handleFilter(index)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label={item.profession}
            />
          );
        })}
      </FormGroup>
    </Wrapper>
  );
};
