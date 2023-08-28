import React from "react";
const List = ({ items, children }) => {
  const child = items.map((itm) =>
    React.cloneElement(children, { item: itm, key: itm.id })
  );
  return <div className="list">{child}</div>;
};

export default List;
