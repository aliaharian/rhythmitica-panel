import Input from "@/components/molecules/form/Input";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import FormContainer from "../../form/FormContainer";
import styles from "@scss/organisms/profileDetails.module.scss";
import Dropdown from "@/components/molecules/form/Dropdown";
import { SelectChangeEvent } from "@mui/material";

const ProfileDetails = () => {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      title: "",
      brief: "",
      selectedCategory: undefined,
      draft: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleChangeCategory = (event: SelectChangeEvent<string>) => {
    formik.setFieldValue("selectedCategory", event.target.value);
  };
  return (
    <div>
      <FormContainer title={"Personal Details"}>
        <div className={styles.personalItemsContainer}>
          <Input formik={formik} name="title" label={t("profile.first name")} />
          <Input formik={formik} name="title" label={t("profile.last name")} />
          <Dropdown
            items={[
              {
                label: "male",
                value: "male",
              },
              {
                label: "female",
                value: "female",
              },
            ]}
            value={formik.values.selectedCategory}
            handleChange={handleChangeCategory}
            label={t("profile.gender")}
            formMode
          />
          <Input formik={formik} name="title" label={t("profile.birth year")} />
          <Input
            formik={formik}
            name="title"
            label={t("profile.birth month")}
          />
          <Input formik={formik} name="title" label={t("profile.birth day")} />
        </div>
      </FormContainer>
      <FormContainer title={"Address Details"}>
        <div className={styles.addressItemsContainer}>
          <Dropdown
            items={[
              {
                label: "education",
                value: "education",
              },
              {
                label: "news",
                value: "news",
              },
            ]}
            value={formik.values.selectedCategory}
            handleChange={handleChangeCategory}
            label={t("blog.category")}
            formMode
          />
          <Dropdown
            items={[
              {
                label: "education",
                value: "education",
              },
              {
                label: "news",
                value: "news",
              },
            ]}
            value={formik.values.selectedCategory}
            handleChange={handleChangeCategory}
            label={t("blog.category")}
            formMode
          />
          <Dropdown
            items={[
              {
                label: "education",
                value: "education",
              },
              {
                label: "news",
                value: "news",
              },
            ]}
            value={formik.values.selectedCategory}
            handleChange={handleChangeCategory}
            label={t("blog.category")}
            formMode
          />

          <Input
            multiline
            formik={formik}
            name="brief"
            label={t("blog.brief")}
          />

          <Input formik={formik} name="title" label={t("blog.title")} />
        </div>
      </FormContainer>
    </div>
  );
};
export default ProfileDetails;
