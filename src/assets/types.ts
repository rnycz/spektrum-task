import { ReactNode } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";

export type StarWarsData = {
  name: string;
  created: Date;
  vehicles: string[];
};
export type PropsContextProvider = {
  children?: ReactNode;
};
export type ContextState = {
  star_wars_data: StarWarsData[];
  setStar_wars_data: React.Dispatch<React.SetStateAction<StarWarsData[]>>;
};
export type FetchData = {
  name: string;
  eye_color: string;
  birth_year: string;
  created: Date;
  vehicles: string[];
};
export type UseFetchType = {
  data: FetchData[];
  loading: boolean;
  error: string;
  makeApiCall: () => void;
};
export type UseFormType = {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  reset: UseFormReset<FieldValues>;
  formState: FormState<FieldValues>;
};
