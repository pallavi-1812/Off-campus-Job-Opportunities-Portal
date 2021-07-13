import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input, InputLabel, MenuItem, FormControl, Select, Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

export default function MultipleSelect({ inputLabel, names, value, onChange, handleDelete }) {
  const classes = useStyles();

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">{inputLabel}</InputLabel>
        <Select
          fullWidth
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={value}
          onChange={onChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip color="primary" key={value.key} label={value.name} className={classes.chip} onMouseDown={(e) => e.stopPropagation()} onDelete={() => handleDelete(value)} />
              ))}
            </div>
          )}
        >
          {names.map((name) => (
            <MenuItem key={name.key} value={name}>
              {name.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
