"use client";

import React from 'react';
import Link from 'next/link';

import { MainContext, useContext } from '@/app/context';
import HtmlEditor from '@/components/editor/HtmlEditor';
import CssEditor from '@/components/editor/CssEditor';
import JsEditor from '@/components/editor/JsEditor';
import Webcam from 'react-webcam';
import useMediaRecorder from '@wmik/use-media-recorder';
import { Resizable } from 'react-resizable';
import { BsCameraVideoFill, BsCameraVideoOffFill, BsDownload, BsFillRecordCircleFill } from "react-icons/bs";

export default function Codebar() {
    const { activeTab, setActiveTab, webcam, setWebcam, codebarWidth, setCodbarWidth } = useContext(MainContext);

    const videoConstraints = {
        facingMode: "user"
    };

    const { status, mediaBlob, stopRecording, startRecording } = useMediaRecorder({
        recordScreen: true, blobOptions: { type: 'video/webm' }, mediaStreamConstraints: { audio: true, video: true }
    });

    const onResize = (event, { node, size, handle }) => {
        setCodbarWidth(size.width);
    };

    return (
        <Resizable height={30} width={codebarWidth} onResize={onResize}>
            <div className="codebar" style={{ width: `${codebarWidth}px` }}>
                <nav>
                    <ul>
                        <li className={activeTab == 'html' ? 'active' : ''} onClick={() => setActiveTab('html')}>HTML</li>
                        <li className={activeTab == 'css' ? 'active' : ''} onClick={() => setActiveTab('css')}>CSS</li>
                        <li className={activeTab == 'js' ? 'active' : ''} onClick={() => setActiveTab('js')}>JS</li>
                    </ul>
                </nav>
                <div className="editor">
                    {activeTab == 'html' && <HtmlEditor />}
                    {activeTab == 'css' && <CssEditor />}
                    {activeTab == 'js' && <JsEditor />}
                </div>
                <div className="footer">
                    <div className="camera">
                        {webcam && <Webcam audio={false} width={120} height={84} videoConstraints={videoConstraints} />}
                    </div>
                    <div className="buttons">
                        {mediaBlob && (
                            <div className="btn">
                                <Link href={URL.createObjectURL(mediaBlob)} target="_blank" download="video.mp4">
                                    <BsDownload />
                                </Link>
                            </div>
                        )}
                        {(status === 'idle' || status === 'stopped' || status === 'failed') && (
                            <div className="btn">
                                <BsFillRecordCircleFill fill='#0b0' onClick={startRecording} />
                            </div>
                        )}
                        {status === 'recording' && (
                            <div className="btn">
                                <BsFillRecordCircleFill fill='#b00' onClick={stopRecording} />
                            </div>
                        )}
                        <div className="btn">
                            {webcam && <BsCameraVideoOffFill onClick={() => setWebcam(!webcam)} /> || <BsCameraVideoFill onClick={() => setWebcam(!webcam)} />}
                        </div>
                    </div>
                </div>
            </div>
        </Resizable>
    )
}
