import { Dispatch, SetStateAction } from "react";

export interface TabsModel {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  tabs: TabModel[];
}

export interface TabModel {
  name: string;
  label: string;
}
