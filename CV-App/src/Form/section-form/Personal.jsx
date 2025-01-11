import { useState } from "react";
import { IconUser, IconArrowBadgeDown } from "@tabler/icons-react";
import TextField from "../../components/TextField/TextField";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button/Button";
import { formatData } from "../Form";
import { useFormData } from "../../App";

const personalFields = [
  {
    label: "Name",
    id: "name",
    type: "text",
  },
  {
    label: "Title",
    id: "title",
    type: "text",
  },
  {
    label: "Phone",
    id: "phone",
    type: "tel",
  },
  {
    label: "Email",
    id: "email",
    type: "email",
  },
  {
    label: "Portfolio",
    id: "portfolio",
    type: "url",
  },
  {
    id: "description",
  },
];

export default function Personal({
  handleActive,
  isActive,
  isUpdated,
  updateData,
  id,
}) {
  const { updateFormData } = useFormData();
  const [data, setData] = useState(
    personalFields.reduce((accumulator, { id }) => {
      accumulator[id] = "";
      return accumulator;
    }, {})
  );

  function handleSubmit() {
    const formattedData = formatData(data);
    updateFormData(id, formattedData);
    updateData(id, false);
  }

  return (
    <article className="personal-info">
      <h2>
        <IconUser />
        Personal Data
        <IconArrowBadgeDown
          className={`icon ${isActive ? "active" : ""}`}
          onClick={handleActive}
        />
      </h2>
      <form className={isActive ? "active" : ""}>
        <ul>
          {personalFields.map((field) => {
            return field.id !== "description" ? (
              <li key={field.id}>
                <TextField
                  label={field.label}
                  value={data[field.id]}
                  id={field.id}
                  type={field.type}
                  placeholder={field.label}
                  handleOnChange={(value) => {
                    // Update local state
                    setData((prevData) => ({
                      ...prevData,
                      [field.id]: value,
                    }));
                    updateData(id, true);
                  }}
                />
              </li>
            ) : (
              <li key={field.id}>
                <Textarea
                  placeholder="Write something about you..."
                  value={data[field.id]}
                  handleOnChange={(value) => {
                    // Update local state
                    setData((prevData) => ({
                      ...prevData,
                      [field.id]: value,
                    }));
                    updateData(id, true);
                  }}
                />
              </li>
            );
          })}
        </ul>
        <div
          className={
            isUpdated ? "button-container activate" : "button-container"
          }
        >
          <Button
            // Update global state
            handleClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </form>
    </article>
  );
}
