import React, { FC } from "react";

interface ILang {
  isEn: boolean;
  toggleIsEn?: () => void;
}

export const currentLang = {
  isEn: true,
};

export const LangContext = React.createContext<ILang>(currentLang);

export const LangProvider: FC = ({ children }) => {
  const [isEn, setIsEn] = React.useState(currentLang.isEn);
  const toggleIsEn = () => {
    setIsEn(!isEn);
  };
  return (
    <LangContext.Provider
      value={{
        isEn,
        toggleIsEn,
      }}
    >
      {children}
    </LangContext.Provider>
  );
};
