import "./Input.css";
import { Checkbox, FormControlLabel } from "@mui/material";

export default function Input({ type, label, value, onChange }) {
  if (type === "checkbox") {
    return <CheckboxInput label={label} value={value} onChange={onChange} />;
  }
}

function CheckboxInput({ label, value, onChange }) {
  const checkboxControl = (
    <Checkbox
      className="checkbox"
      label={label}
      checked={value ? true : false}
      onChange={() => {
        onChange();
      }}
      onKeyDown={(event) => {
        event.preventDefault();
        if (event.key === "Enter") {
          onChange();
        }
      }}
      sx={{
        color: "var(--primary)",
        "&.Mui-checked": {
          color: "rgb(42, 42, 190)",
        },
      }}
    />
  );

  return <FormControlLabel control={checkboxControl} label={label} />;

  // return (
  //   <div className="field checkbox">
  //     <input id="checkbox" className="checkbox" type="checkbox" />
  //     <label htmlFor="checkbox">{label}</label>
  //   </div>
  // );
}
