import { IconAt, IconHash, IconLink } from "@tabler/icons-react";
import { useFormData } from "../../App";

export default function Header() {
  const { formData } = useFormData();
  const { personal } = formData;
  return (
    <header className="cv-header">
      <h1 className="cv-name">{personal.name ? personal.name : "Your name"}</h1>
      <h2 className="cv-title">
        {personal.title ? personal.title : "What do you do?"}
      </h2>
      <div className="cv-contact">
        <div className="email">
          <IconAt className="icon" />
          <p>{personal.email ? personal.email : "youremail@gmail.com"}</p>
        </div>
        <div className="phone">
          <IconHash className="icon" />
          <p>{personal.phone ? personal.phone : "Here your phone"} </p>
        </div>
        <div className="link">
          <IconLink className="icon" />
          <p>
            {personal.portfolio
              ? personal.portfolio
              : "Do you have a portfolio?"}
          </p>
        </div>
      </div>
    </header>
  );
}
