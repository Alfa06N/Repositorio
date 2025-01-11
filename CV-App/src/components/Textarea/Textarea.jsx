import "./Textarea.css";

export default function Textarea({ value, handleOnChange, placeholder }) {
  return (
    <textarea
      rows={3}
      maxLength={400}
      value={value}
      onChange={(event) => {
        handleOnChange(event.target.value);
      }}
      placeholder={placeholder}
      className="textarea"
    />
  );
}
