import { TextEditorModel } from "@/app/models/form";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

const TextEditor = ({ onChange, value }: TextEditorModel) => {
  const editorRef = useRef<any>(null);

  return (
    <div>
      <Editor
        apiKey="ajj87dt2tkk9iay286x5uxdjdb685g4spq516y5lacgqlerz"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=""
        value={value}
        onEditorChange={onChange}
        init={{
          height: 510,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          images_upload_url: `${process.env.REACT_APP_API_URL}/upload-gateway?site=${process.env.REACT_APP_SITE_CODE}`,
          //   images_upload_handler: function (blobInfo, success, failure) {
          //     return setTimeout(function () {
          //       /* no matter what you upload, we will turn it into TinyMCE logo :)*/
          //       success(
          //         "http://moxiecode.cachefly.net/tinymce/v9/images/logo.png"
          //       );
          //     }, 2000);
          //   },
          toolbar:
            " blocks | bold | numlist bullist | link | image media | table",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </div>
  );
};
export default TextEditor;
