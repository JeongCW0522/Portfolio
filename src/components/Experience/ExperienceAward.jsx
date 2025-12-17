import { experienceAwardList } from "../../data/experience";
import ExperienceCard from "./ExperienceCard";

const ExperienceAward = () => {
  return (
    <>
      {experienceAwardList.map((item) => (
        <ExperienceCard key={item.title} {...item} />
      ))}
    </>
  );
};

export default ExperienceAward;
