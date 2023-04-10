import { innerPageLayoutProps } from "@models/list";
import styles from "@scss/templates/innerPageLayout.module.scss";
import Icon from "@components/atoms/Icon";
import IconButton from "@components/atoms/IconButton";
import React, {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  Key,
} from "react";

const InnerPageLayout = ({
  children,
  breadcrumb,
  handleDelete,
  handleBack,
}: innerPageLayoutProps) => {
  return (
    <div className={styles.innerPageLayout}>
      <div className={styles.header}>
        <div className={styles.breadcrumbContainer}>
          <IconButton icon={"arrow_back_ios"} />
          <div className={styles.breadcrumb}>
            {breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                <span>{item}</span>
                {index !== breadcrumb.length - 1 && (
                  <Icon icon="arrow_forward_ios" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};
export default InnerPageLayout;
