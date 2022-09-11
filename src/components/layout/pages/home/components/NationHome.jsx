import NationCard from "../../../../cards/nationCard/NationCard";
import nationList from "../../../../../assets/arrays/nationArray";

const NationHome = () => {
  const arr = nationList;
  console.log(arr);
  return (
    <div className="nation">
      <div className="nation-item">
        {nationList.map((nation) => (
          <NationCard
            key={nation.id}
            name={nation.name}
            imgSrc={nation.imgSrc}
          />
        ))}
      </div>
      <div className="nation-item-duplicate">
        {nationList.map((nation) => (
          <NationCard
            key={nation.id}
            name={nation.name}
            imgSrc={nation.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default NationHome;
