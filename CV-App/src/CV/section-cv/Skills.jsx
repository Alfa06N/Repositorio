import { useFormData } from "../../App";

export default function Skills() {
  const { formData } = useFormData();
  const { skills } = formData;
  const data = skills ? Object.entries(skills) : [];
  console.log("data", data);

  return (
    <>
      <h2>Skills</h2>
      <ul>
        {data.length > 0 ? (
          data.map(([key, values]) => {
            return <SkillItem key={key} {...values} />;
          })
        ) : (
          <p>Write something...</p>
        )}
      </ul>
    </>
  );
}

function SkillItem({ level, skill }) {
  return (
    <p>
      {skill}
      {level && `: ${level}`}
    </p>
  );
}
