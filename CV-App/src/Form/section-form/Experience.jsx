import { useContext } from "react";
import TextField from "../../components/TextField/TextField";
import Textarea from "../../components/Textarea/Textarea";
import {
  IconBriefcase,
  IconArrowBadgeDown,
  IconSquareRoundedPlus,
  IconTrash,
} from "@tabler/icons-react";
import Button from "../../components/Button/Button";
Button;
import { formatData } from "../Form";
import { useFormData } from "../../App";
import { FormItemsContext } from "../Form";

const experienceFields = [
  {
    label: "Company",
    id: "company",
    type: "text",
  },
  {
    label: "Position",
    id: "position",
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
  {
    id: "description",
  },
];

const fields = experienceFields.reduce((accumulator, { id }) => {
  accumulator[id] = "";
  return accumulator;
}, {});

export default function Experience({
  handleActive,
  isActive,
  isUpdated,
  updateData,
  id,
}) {
  const { updateFormData } = useFormData();
  const { forms, addForm, localData } = useContext(FormItemsContext);

  return (
    <article className="experience-info">
      <h2>
        <IconBriefcase /> Experience
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
      className={isRemoving ? "experience-item removing" : "experience-item"}
    >
      <div className="title">
        <h3>Experience {index + 1}</h3>
        <Button toRemove={true} handleClick={() => deleteForm(formKey)}>
          <IconTrash />
        </Button>
      </div>
      <ul>
        {experienceFields.map((field) => (
          <li key={formKey + "-" + field.id}>
            {field.type ? (
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
            ) : (
              <Textarea
                id={field.id}
                value={formData[field.id] || ""}
                placeholder="Write something about your experience"
                handleOnChange={(value) => {
                  updateLocalData(value, formKey, field);
                }}
              />
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}
