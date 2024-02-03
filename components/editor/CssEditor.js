import Editor from "@monaco-editor/react";
import { MainContext, useContext } from "@/app/context";


export default function CssEditor() {
    const { cssCode, setCssCode } = useContext(MainContext);

    return (
        <Editor
            height="100%"
            theme="vs-dark"
            defaultLanguage="css"
            defaultValue={cssCode}
            onChange={value => setCssCode(value)}
        />
    )
}
