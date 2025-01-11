import { useFormData } from "../../App";

export default function About() {
  const { formData } = useFormData();
  const { personal } = formData;

  return (
    <>
      <h2>About me</h2>
      <p>
        {personal.description
          ? personal.description
          : "Write something about you..."}
      </p>
    </>
  );
}
