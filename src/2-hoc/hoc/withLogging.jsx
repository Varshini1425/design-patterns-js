import React from "react";

const withLogging = (WrappedComponent) => {
  return (props) => {
    const handleClick = () => {
      console.log(`User interacted with: ${props.label}`);
      if (props.onClick) {
        props.onClick();
      }
    };

    return <WrappedComponent {...props} onClick={handleClick} />;
  };
};

export default withLogging;
