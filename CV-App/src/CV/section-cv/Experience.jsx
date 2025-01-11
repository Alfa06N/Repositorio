import { useFormData } from "../../App";

export default function Experience() {
  const { formData } = useFormData();
  const { experience } = formData;
  const data = experience ? Object.entries(experience) : [];
  return (
    <>
      <h2>Experience</h2>
      <ul>
        {data.length > 0 ? (
          data.map(([key, data]) => {
            return <WorkItem key={key} {...data} />;
          })
        ) : (
          <p>Write something...</p>
        )}
      </ul>
    </>
  );
}

function WorkItem({ company, position, startDate, endDate, description }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}/${month}/${day}`;
  }

  return (
    <>
      <h3 className="position">{position}</h3>
      <h4 className="company">{company} </h4>
      <p>
        {startDate &&
          endDate &&
          `${formatDate(startDate)} - ${formatDate(endDate)}: `}
        {description}
      </p>
    </>
  );
}
