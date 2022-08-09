import { TabsModel } from "@/app/models/tabs";
import { Tab, Tabs } from "@mui/material";
import React from "react";
import styles from "../../../assets/scss/molecules/tabs.module.scss";

const RhTabs = ({ value, setValue, tabs }: TabsModel) => {
  const handleChange = (event: any, newValue: React.SetStateAction<string>) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
    //   textColor="secondary"
    //   indicatorColor="secondary"
      className={styles.tabs}
      aria-label="secondary tabs example"

    >
      {tabs.map((tab, index) => (
        <Tab key={index} label={tab.label} value={tab.name} />
      ))}
    </Tabs>
  );
};
export default RhTabs;
