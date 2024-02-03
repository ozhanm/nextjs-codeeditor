"use client";

import { createContext, useContext, useState } from 'react';

const MainContext = createContext();

export default function ThemeProvider({ children }) {
    const [activeTab, setActiveTab] = useState('html');
    const [htmlCode, setHtmlCode] = useState('');
    const [cssCode, setCssCode] = useState('');
    const [jsCode, setJsCode] = useState('');
    const [webcam, setWebcam] = useState(false);
    const [codebarWidth, setCodbarWidth] = useState(600);

    // Context data
    const contextData = {
        sitename: 'Code Editor',
        activeTab, setActiveTab,
        htmlCode, setHtmlCode,
        cssCode, setCssCode,
        jsCode, setJsCode,
        webcam, setWebcam,
        codebarWidth, setCodbarWidth
    }

    return (
        <MainContext.Provider value={contextData}>
            {children}
        </MainContext.Provider>
    )
}

export {
    MainContext,
    useContext
}