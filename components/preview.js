"use client";

import { useMemo } from 'react';
import { MainContext, useContext } from '@/app/context';

export default function Preview() {
    const { htmlCode, cssCode, jsCode } = useContext(MainContext);

    const srcDoc = useMemo(() => {
        if (!htmlCode && !cssCode && !jsCode) return false;
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Code Editor</title>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script type="text/javascript">${jsCode}</script>
        </body>
        </html>`;
    }, [htmlCode, cssCode, jsCode]);

    return (
        <div className="preview">
            {srcDoc && <iframe srcDoc={srcDoc} />}
            {!srcDoc && (
                <div className="content">
                    <p><b>./mengucek</b></p>
                    <p>code editor</p>
                </div>
            )}
        </div>
    )
}
