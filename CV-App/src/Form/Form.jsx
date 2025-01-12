import { useState, useCallback, createContext } from "react";
import "./Form.css";
import Personal from "./section-form/Personal";
import Education from "./section-form/Education";
import Skills from "./section-form/Skills";
import Experience from "./section-form/Experience";

export const FormItemsContext = createContext();

export function FormItemsProvider({ children, initialState = [] }) {
  const [forms, setForms] = useState(initialState);
  const [localData, setLocalData] = useState({});

  function updateLocalData(value, formKey, field) {
    setLocalData((prevData) => ({
      ...prevData,
      [formKey]: {
        ...prevData[formKey],
        [field.id]: value,
      },
    }));
  }

  function addForm(fields) {
    const key = crypto.randomUUID();
    setForms((prevForms) => [
      ...prevForms,
      { formKey: key, isRemoving: false },
    ]);

    setLocalData((prevLocalData) => ({
      ...prevLocalData,
      [key]: fields,
    }));
  }

  function deleteForm(key) {
    setForms((prevForms) =>
      prevForms.map((form) =>
        form.formKey === key
          ? {
              ...form,
              isRemoving: true,
            }
          : form
      )
    );
    setTimeout(() => {
      setForms((prevForms) => prevForms.filter((form) => form.formKey !== key));
      setLocalData((prevLocalData) => {
        const newData = {
          ...prevLocalData,
        };
        delete newData[key];
        return newData;
      });
    }, 300);
  }

  return (
    <FormItemsContext.Provider
      value={{ forms, addForm, deleteForm, localData, updateLocalData }}
    >
      {children}
    </FormItemsContext.Provider>
  );
}

const sections = [
  { key: "personal", Component: Personal },
  { key: "education", Component: Education },
  { key: "skills", Component: Skills },
  { key: "experience", Component: Experience },
];

export default function Form() {
  const initialActiveState = sections.reduce((accumulator, { key }) => {
    accumulator[key] = true;
    return accumulator;
  }, {});

  const [isActive, setIsActive] = useState(initialActiveState);
  const [updatedData, setUpdatedData] = useState(
    sections.reduce((accumulator, { key }) => {
      accumulator[key] = false;
      return accumulator;
    }, {})
  );

  const updateData = useCallback((key, value) => {
    setUpdatedData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  }, []);

  function toggleActive(section) {
    setIsActive(() => ({
      ...isActive,
      [section]: !isActive[section],
    }));
  }

  return (
    <section className="form-section">
      {sections.map(({ key, Component }) => (
        <FormItemsProvider key={key} initialState={[]}>
          <Component
            key={key}
            id={key}
            handleActive={() => toggleActive(key)}
            isActive={isActive[key]}
            isUpdated={updatedData[key]}
            updateData={updateData}
          />
        </FormItemsProvider>
      ))}
    </section>
  );
}

export function formatData(data) {
  const sanitized = {};

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === "string") {
      sanitized[key] = value.trim();
    } else if (typeof value === "object" && value !== null) {
      sanitized[key] = formatData(value);
    } else {
      sanitized[key] = value;
    }
  }

  return sanitized;
}
