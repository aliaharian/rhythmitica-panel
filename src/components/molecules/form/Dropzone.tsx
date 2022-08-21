import { useEffect, useRef, useState } from "react";
import styles from "@scss/molecules/dropzone.module.scss";
import ImageSample from "@icons/ImageSample";
import Icon from "@/components/atoms/Icon";
import { DropzoneModel } from "@/app/models/form";

const Dropzone = ({ onChange }: DropzoneModel) => {
  const dropzoneRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const imageSampleRef = useRef<HTMLImageElement>(null);
  const [currentFiles, setCurrentFiles] = useState<any>();
  useEffect(() => {
    //add dragover event listener
    dropzoneRef?.current?.addEventListener("dragover", handleDragOver);
    //add drop event listener
    dropzoneRef?.current?.addEventListener("drop", handleDrop);
    //add dragleave event listener
    dropzoneRef?.current?.addEventListener("dragleave", handleDragLeave);
    return () => {
      //remove dragover event listener
      dropzoneRef?.current?.removeEventListener("dragover", handleDragOver);
      //remove drop event listener
      dropzoneRef?.current?.removeEventListener("drop", handleDrop);
      //remove dragleave event listener
      dropzoneRef?.current?.removeEventListener("dragleave", handleDragLeave);
    };
  }, []);
  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (imageSampleRef.current) {
      imageSampleRef.current.style.transform = "scale(0.5)";
    }
  };
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e?.dataTransfer?.files || [];
    if (dropzoneRef.current) {
      setCurrentFiles(files);
      onChange(files);
      var fr = new FileReader();
      fr.onload = function () {
        if (imageRef.current) {
          imageRef.current.src = fr.result as string;
        }
      };
      fr.readAsDataURL(files[0]);
      if (imageSampleRef.current) {
        imageSampleRef.current.style.transform = "scale(1)";
      }
    }
    if (files.length > 0) {
      console.log(files);
    }
  };
  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (imageSampleRef.current) {
      imageSampleRef.current.style.transform = "scale(1)";
    }
  };
  const handleClick = () => {
    if (currentFiles) {
      setCurrentFiles(null);
      onChange(null);
    } else {
      if (inputRef.current) {
        inputRef.current.click();
      }
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files || [];
    if (files.length > 0) {
      setCurrentFiles(files);
      onChange(files);

      var fr = new FileReader();
      fr.onload = function () {
        if (imageRef.current) {
          imageRef.current.src = fr.result as string;
        }
      };
      fr.readAsDataURL(files[0]);
    }
  };

  return (
    <div onClick={handleClick} ref={dropzoneRef} className={styles.dropzone}>
      <input type="file" onChange={handleChange} ref={inputRef} hidden />
      <div className={currentFiles && styles.removeBorder}>
        {currentFiles ? (
          <div className={styles.imageContainer}>
            <img ref={imageRef} />
            <div className={styles.overlay}>
              <Icon icon="delete" />
            </div>
          </div>
        ) : (
          <div ref={imageSampleRef}>
            <ImageSample />
          </div>
        )}
      </div>
    </div>
  );
};
export default Dropzone;
