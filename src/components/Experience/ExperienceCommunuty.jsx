import { experienceCommunityList } from "../../data/experience";
import ExperienceCard from "./ExperienceCard";

const ExperienceCommunity = () => {
  return (
    <>
      {experienceCommunityList.map((item) => (
        <ExperienceCard key={item.title} {...item} />
      ))}
    </>
  );
};

export default ExperienceCommunity;
