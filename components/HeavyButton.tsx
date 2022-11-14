import React, { useMemo } from "react";

import isPrime from "../utils/isPrime";

type Props = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const expensiveCalculate = () => {
  for (let i = 0; i < 1000000; i++) {
    isPrime(i);
  }
};
function HeavyButton({ children, onClick }: Props): JSX.Element {
  const calculation = useMemo(() => expensiveCalculate(), []);
  // simulate expensive render

  return (
    <button type="submit" onClick={onClick}>
      {children}
    </button>
  );
}

export default React.memo(HeavyButton);
