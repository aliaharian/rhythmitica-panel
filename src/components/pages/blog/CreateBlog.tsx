import Dropzone from "@/components/molecules/form/Dropzone";
import InnerPageLayout from "../../templates/InnerPageLayout";
import styles from "@scss/pages/createBlog.module.scss";
import Input from "@/components/molecules/form/Input";
import { useFormik } from "formik";
import Dropdown from "@/components/molecules/form/Dropdown";
import { SelectChangeEvent } from "@mui/material";
import { useTranslation } from "react-i18next";
import TextEditor from "@/components/molecules/form/TextEditor";
import Checkbox from "@/components/molecules/form/Checkbox";

const CreateBlog = () => {
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
  const handleChangeDraft = () => {
    formik.setFieldValue("draft", !formik.values.draft);
  };
  return (
    <InnerPageLayout breadcrumb={["blog", "create post"]}>
      <div className={styles.addBlogContainer}>
        <div className={styles.blogInfoContainer}>
          <div className={styles.dropzoneContainer}>
            <Dropzone />
          </div>
          <div className={styles.titleContainer}>
            <Input formik={formik} name="title" label={t("blog.title")} />
          </div>
          <div className={styles.titleContainer}>
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
          </div>
          <div className={styles.titleContainer}>
            <Input
              multiline
              formik={formik}
              name="brief"
              label={t("blog.brief")}
            />
          </div>
          <div className={styles.titleContainer}>
            <Checkbox
              onClick={handleChangeDraft}
              checked={formik?.values?.draft}
              label={t("blog.save as draft")}
            />
          </div>
        </div>
        <div className={styles.textEditorContainer}>
          <TextEditor />
        </div>
      </div>
    </InnerPageLayout>
  );
};

export default CreateBlog;
