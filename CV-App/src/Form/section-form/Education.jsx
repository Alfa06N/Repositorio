import {
  IconBooks,
  IconArrowBadgeDown,
  IconSquareRoundedPlus,
  IconTrash,
} from "@tabler/icons-react";
import TextField from "../../components/TextField/TextField";
import { useContext, useState } from "react";
import Button from "../../components/Button/Button";
Button;
import { formatData, FormItemsContext } from "../Form";
import { useFormData } from "../../App";

const educationFields = [
  {
    label: "School",
    id: "school",
    type: "text",
  },
  {
    label: "Degree",
    id: "degree",
    type: "text",
  },
  {
    label: "Start Date",
    id: "startDate",
    type: "date",
  },
  {
    label: "End Date",
    id: "endDate",
    type: "date",
  },
];

const fields = educationFields.reduce((accumulator, { id }) => {
  accumulator[id] = "";
  return accumulator;
}, {});

export default function Education({
  handleActive,
  isActive,
  isUpdated,
  updateData,
  id,
}) {
  const { updateFormData } = useFormData();
  const { forms, addForm, localData } = useContext(FormItemsContext);

  return (
    <article className="education-info">
      <h2>
        <IconBooks /> Education
        <IconArrowBadgeDown
          className={`icon ${isActive ? "active" : ""}`}
          onClick={handleActive}
        />
      </h2>

      <form className={isActive ? "active" : ""}>
        {forms.map(({ formKey, isRemoving }, index) => {
          return (
            <FormItem
              key={formKey + "-" + index}
              formKey={formKey}
              isRemoving={isRemoving}
              index={index}
              updateFormData={updateFormData}
              updateData={updateData}
              id={id}
            />
          );
        })}

        <div className="row-actions">
          <div
            className={
              isUpdated ? "button-container activate" : "button-container"
            }
          >
            <Button
              // Update global state
              handleClick={() => {
                updateFormData(id, formatData(localData));
                updateData(id, false);
              }}
            >
              Submit
            </Button>
          </div>
          {forms.length < 2 && (
            <Button
              primary={false}
              handleClick={() => {
                addForm(fields);
                updateData(id, true);
              }}
            >
              <IconSquareRoundedPlus />
            </Button>
          )}
        </div>
      </form>
    </article>
  );
}

function FormItem({
  formKey,
  isRemoving,
  index,
  updateFormData,
  updateData,
  id,
}) {
  const { updateLocalData, deleteForm, localData } =
    useContext(FormItemsContext);

  const formData = localData[formKey] || {};

  return (
    <article
      className={isRemoving ? "education-item removing" : "experience-item"}
    >
      <div className="title">
        <h3>Education {index + 1}</h3>
        <Button toRemove={true} handleClick={() => deleteForm(formKey)}>
          <IconTrash />
        </Button>
      </div>
      <ul>
        {educationFields.map((field) => {
          return (
            <li key={formKey + "-" + field.id}>
              <TextField
                label={field.label}
                id={field.id}
                type={field.type}
                endDate={field.id === "endDate"}
                value={formData[field.id] || ""}
                handleOnChange={(value) => {
                  updateLocalData(value, formKey, field);
                  updateData(id, true);
                }}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    updateFormData(id, formatData(localData));
                    updateData(id, false);
                  }
                }}
              />
            </li>
          );
        })}
      </ul>
    </article>
  );
}
