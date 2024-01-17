import React, { createContext, useContext, useState, ReactNode } from "react";

interface IncrementContextProps {
  handleIncrement: (numVal: number) => void;
  handleDecrement: (numVal: number) => void;
}
const IncrementContext = createContext<IncrementContextProps | undefined>(
  undefined
);

interface IncrementProviderProps {
  children: ReactNode;
}

export const IncrementProvider: React.FC<IncrementProviderProps> = ({
  children,
}) => {
  const [incrementNum, setIncrementNum] = useState<number>(0);

  const handleIncrement = () => {
    setIncrementNum((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setIncrementNum((prevState) => (prevState > 0 ? prevState - 1 : 0));
  };

  return (
    <IncrementContext.Provider value={{ handleIncrement, handleDecrement }}>
      {children}
    </IncrementContext.Provider>
  );
};

export const useIncrement = (): IncrementContextProps => {
  const context = useContext(IncrementContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
