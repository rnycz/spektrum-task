import React, { createContext, useContext, useState } from "react";
import {
  PropsContextProvider,
  StarWarsData,
  ContextState,
} from "../assets/types";

const contextDefaultValues: ContextState = {
  star_wars_data: [],
  setStar_wars_data: () => {},
};

export const StateContext = createContext<ContextState>(contextDefaultValues);

export const ContextProvider: React.FC<PropsContextProvider> = ({
  children,
}) => {
  const [star_wars_data, setStar_wars_data] = useState<StarWarsData[]>(
    contextDefaultValues.star_wars_data
  );

  return (
    <StateContext.Provider value={{ star_wars_data, setStar_wars_data }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): ContextState => useContext(StateContext);
