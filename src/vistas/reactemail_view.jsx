import React, { useRef } from "react";
import EmailEditor from "react-email-editor";
import sample from "../utils/json/sample.json";

export const EditemailView = () => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    //exporta html con css
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };

  const exportjsl = () => {
    //guarda tu diseño
    emailEditorRef.current.editor.saveDesign((design) => {
      localStorage.setItem("TemplateEmail", JSON.stringify(design));
      alert(
        "Diseño exportado en formato Json, Generá la lógica para que carge el diseño"
      );
    });
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    let designJson = JSON.parse(localStorage.getItem("TemplateEmail"));

    if (designJson != null) {
      emailEditorRef.current.editor.loadDesign(designJson);
    }
  };

  const onReady = () => {
    // editor is ready
    //emailEditorRef.current.editor.ready(templateJson);
    console.log("onReady");
  };

  return (
    <div>
      <div className="h-100 d-flex bg-gray justify-content-center align-items-center">
        <button className="btn btn-primary" onClick={exportHtml}>
          Exporta tu HTML
        </button>
        <button className="btn btn-success" onClick={exportjsl}>
          Guarda tu diseño
        </button>
      </div>

      <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
    </div>
  );
};

export const EditMailexampleView = () => {
  const emailEditorRef = useRef(null);
  console.log("emailEditorRef 1", emailEditorRef);
  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log("emailEditorRef 2", emailEditorRef);
      console.log("exportHtml", html);
      alert("Output HTML has been logged in your developer console.");
    });
  };

  const saveDesign = () => {
    emailEditorRef.current.editor.saveDesign((design) => {
      console.log("saveDesign", JSON.stringify(design, null, 4));
      alert("Design JSON has been logged in your developer console.");
    });
  };

  const onDesignLoad = (data) => {
    console.log("onDesignLoad", data);
  };

  const onLoad = () => {
    emailEditorRef.current.editor.addEventListener(
      "onDesignLoad",
      onDesignLoad
    );
    emailEditorRef.current.editor.loadDesign(sample);
  };

  return (
    <div className="w-100">
      <div>
        <button className="btn btn-primary" onClick={saveDesign}>Save Design</button>
        <button className="btn btn-success" onClick={exportHtml}>Export HTML</button>
      </div>

      <EmailEditor
        ref={emailEditorRef}
        onLoad={onLoad}
        appearance={{ theme: "dark" }}
        minHeight="900px"
      />
    </div>
  );
};
