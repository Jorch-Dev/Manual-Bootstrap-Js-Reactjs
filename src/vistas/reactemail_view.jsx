import React, { useRef, useState } from "react";
import EmailEditor from "react-email-editor";

export const EditemailView = () => {
  const emailEditorRef = useRef(null);
  const [template, setTemplate] = useState({Design:{}})

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };


  const exportjsl = () => {
    emailEditorRef.current.editor.saveDesign((design) => {
        setTemplate({...template,Design:{design}})
        alert('Diseño exportado en formato Json, Genera una funcion para que carge el diseño');
      });
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    const templateJson = template.Design;
    //console.log(templateJson)
    //emailEditorRef.current.editor.loadDesign(templateJson);
  };

  const onReady = () => {
    // editor is ready
    //emailEditorRef.current.editor.ready (templateJson);
    console.log("onReady");
  };
console.log('saveDesign', template);
  return (
    <div>
      <div className="d-flex">
        <button onClick={exportHtml}>Exporta tu HTML</button>
        <button onClick={exportjsl}>Guarda tu diseño</button>
      </div>

      <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
    </div>
  );
};
