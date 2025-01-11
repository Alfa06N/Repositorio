import { useFormData } from "../../App";

export default function Education() {
  const { formData } = useFormData();
  const { education } = formData;
  const data = education ? Object.entries(education) : [];
  return (
    <>
      <h2>Education</h2>
      <ul>
        {data.length > 0 ? (
          data.map(([key, data]) => {
            return <EducationItem key={key} {...data} />;
          })
        ) : (
          <p>Write something...</p>
        )}
      </ul>
    </>
  );
}

function EducationItem({ school, degree, startDate, endDate }) {
  return (
    <>
      <h3 className="degree">{degree}</h3>
      <h4 className="school">{school}</h4>
      <p>
        {startDate} {endDate}{" "}
      </p>
    </>
  );
}
