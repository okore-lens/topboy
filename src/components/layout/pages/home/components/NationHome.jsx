import NationCard from "../../../../cards/nationCard/NationCard";
import nationList from "../../../../../assets/arrays/nationArray";

const NationHome = () => {
  const arr = nationList;
  console.log(arr);
  return (
    <div className="nation">
      {nationList.map((nation) => (
        <NationCard key={nation.id} name={nation.name} imgSrc={nation.imgSrc} />
      ))}
    </div>
  );
};

export default NationHome;
