import React from "react";

const ButtonGroups = ({ children }) => {
  //console.log(children.props);

  const cloneElm = React.Children.map(children, (child) => {
    //console.log(child.props);
    const txt = child.props.children + "?";
    return React.cloneElement(
      child,
      {
        color: "red",
        customClasses: "group",
        callBackFn: child.props.callBackFn,
      },
      txt
    );
  });
  return <div>{cloneElm}</div>;
};

export default ButtonGroups;
