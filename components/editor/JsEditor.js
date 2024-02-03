import Editor from "@monaco-editor/react";
import { MainContext, useContext } from "@/app/context";

export default function JsEditor() {
    const { jsCode, setJsCode } = useContext(MainContext);

    return (
        <Editor
            height="100%"
            theme="vs-dark"
            defaultLanguage="javascript"
            defaultValue={jsCode}
            onChange={value => setJsCode(value)}
        />
    )
}
