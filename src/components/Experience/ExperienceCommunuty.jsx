import { experienceList } from "../../data/experience";
import ExperienceCard from "./ExperienceCard";

const ExperienceCommunity = () => {
  return (
    <>
      {experienceList.map((item) => (
        <ExperienceCard key={item.title} {...item} />
      ))}
    </>
  );
};

export default ExperienceCommunity;
