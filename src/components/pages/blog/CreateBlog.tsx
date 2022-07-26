import Dropzone from "@/components/molecules/form/Dropzone";
import InnerPageLayout from "../../templates/InnerPageLayout";
import styles from "@scss/pages/createBlog.module.scss";

const CreateBlog = () => {
  return (
    <InnerPageLayout breadcrumb={["blog", "create post"]}>
      <div className={styles.addBlogContainer}>
        <div className={styles.dropzoneContainer}>
          <Dropzone />
        </div>
        <div className={styles.textEditorContainer}></div>
      </div>
    </InnerPageLayout>
  );
};

export default CreateBlog;
