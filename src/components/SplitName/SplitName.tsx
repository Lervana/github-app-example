import React, { FC } from "react";

interface SplitNameProps {
  name: string | undefined | null;
  username: string | undefined | null;
}

const SplitName: FC<SplitNameProps> = ({ name, username }) => {
  const toSplit = name || username || "";
  const nameSplit = toSplit?.split(" ") || [];

  return (
    <div className="bold-text">
      {nameSplit.map((item, index) => (
        <div key={`split-name-${index}`}>{item}</div>
      ))}
    </div>
  );
};
export default SplitName;
