import { useState, useEffect, createContext, useContext } from "react";
import "./index.css";
import { IconSun, IconMoon, IconBrandGithub } from "@tabler/icons-react";
import Header from "./components/Header/Header.jsx";
import ButtonIcon from "./components/ButtonIcon/ButtonIcon.jsx";
import Form from "./Form/Form.jsx";
import CV from "./CV/CV.jsx";

const forms = {
  personal: {
    name: "",
    title: "",
    phone: "",
    email: "",
    portfolio: "",
    description: "",
  },
  education: {},
  skills: {},
  experience: {},
};

const FormDataContext = createContext({});

export function FormDataProvider({ children, initialState }) {
  const [formData, setFormData] = useState(initialState);

  function updateFormData(section, value) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [section]: value,
    }));
  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}

export function useFormData() {
  return useContext(FormDataContext);
}

function App() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(prefersDarkScheme.matches ? "dark" : "light");
  }, []);

  useEffect(() => {
    theme === "dark"
      ? document.body.classList.remove("light")
      : document.body.classList.add("light");
  }, [theme]);

  return (
    <FormDataProvider initialState={forms}>
      <aside className="left-side">
        <Header>
          <div className="toggle-theme">
            <ButtonIcon
              Icon={theme === "dark" ? IconSun : IconMoon}
              onClick={toggleTheme}
            />
          </div>
        </Header>
        <Form />
      </aside>
      <section className="right-side">
        <CV />
        {/* <footer className="footer">
          © {new Date().getFullYear()} Alfa06N |{" "}
          <a href="https://github.com/Alfa06N">
            <IconBrandGithub />
            GitHub
          </a>
        </footer> */}
      </section>
    </FormDataProvider>
  );

  // return <NewForm />;
}

// function NewForm() {
//   const [forms, setForms] = useState([]);

//   return (
//     <form className="active">
//       {forms.map((key) => (
//         <ItemForm
//           deleteFunction={() => {
//             setForms((prevData) => prevData.filter((id) => id !== key));
//           }}
//           key={key}
//         >
//           {key}
//         </ItemForm>
//       ))}
//       {forms.length < 4 && (
//         <button
//           onClick={(event) => {
//             event.preventDefault();
//             const key = self.crypto.randomUUID();
//             setForms((prevData) => [...prevData, key]);
//           }}
//         >
//           Agregar experiencia
//         </button>
//       )}
//     </form>
//   );
// }

// function ItemForm({ children, deleteFunction }) {
//   return (
//     <>
//       <h2>{children}</h2>
//       <button
//         onClick={(event) => {
//           event.preventDefault();
//           deleteFunction();
//         }}
//       ></button>
//     </>
//   );
// }

export default App;
