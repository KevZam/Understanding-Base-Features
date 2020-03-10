import React from "react";

// WrappedComponent must start with a capital first letter as you will return a
// component
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
