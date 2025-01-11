import {
  IconTargetArrow,
  IconArrowBadgeDown,
  IconTrash,
  IconSquareRoundedPlus,
} from "@tabler/icons-react";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import { useState, useContext } from "react";
import { formatData, FormItemsContext } from "../Form";
formatData;
import { useFormData } from "../../App";

const skillFields = [
  {
    label: "Skill",
    id: "skill",
    type: "text",
  },
  {
    label: "Level",
    id: "level",
    type: "text",
  },
];

const fields = skillFields.reduce((accumulator, { id }) => {
  accumulator[id] = "";
  return accumulator;
}, {});

export default function Skills({
  handleActive,
  isActive,
  isUpdated,
  updateData,
  id,
}) {
  const { updateFormData } = useFormData();
  const { forms, addForm, localData } = useContext(FormItemsContext);

  return (
    <article className="skill-info">
      <h2>
        <IconTargetArrow />
        Skills
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
          {forms.length < 5 && (
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
        <h3>Skill {index + 1}</h3>
        <Button toRemove={true} handleClick={() => deleteForm(formKey)}>
          <IconTrash />
        </Button>
      </div>
      <ul>
        {skillFields.map((field) => {
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
