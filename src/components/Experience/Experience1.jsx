import { experienceList } from "../../data/experience";
import ExperienceCard from "./ExperienceCard";

const Experience1 = () => {
  return (
    <>
      {experienceList.map((item) => (
        <ExperienceCard key={item.title} {...item} />
      ))}
    </>
  );
};

export default Experience1;
