import React from 'react'
import { RoughNotation } from 'react-rough-notation';

const Annotation = ({ children, ...props }) => {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => setHydrated(true), []);

  if (!hydrated) return children;

  return (
    <RoughNotation {...props}>
      {children}
    </RoughNotation>
  );
};

export default Annotation;
