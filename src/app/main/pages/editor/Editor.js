// Home.js
import React, { useState, useEffect } from 'react';

import './FileEditor.css';


export default function Editor() {
    const [files, setFiles] = useState([]);
    const [activeFileIndex, setActiveFileIndex] = useState(null);

    const handleFileChange = (event) => {
        const selectedFiles = event.target.files;
        const newFiles = Array.from(selectedFiles).map(file => ({
            name: file.name,
            content: ''
        }));
        setFiles([...files, ...newFiles]);
        setActiveFileIndex(files.length); // 가장 최근에 추가된 파일을 활성화
    };

    const handleTabClick = (index) => {
        setActiveFileIndex(index);
    };

    const handleFileContentChange = (index, content) => {
        const updatedFiles = [...files];
        updatedFiles[index].content = content;
        setFiles(updatedFiles);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} multiple />
            <div className="tabs">
                {files.map((file, index) => (
                    <div key={index} className={index === activeFileIndex ? 'tab active' : 'tab'} onClick={() => handleTabClick(index)}>
                        {file.name}
                    </div>
                ))}
            </div>
            {files.length > 0 && activeFileIndex !== null && (
                <div className="file-content">
                    <textarea
                        value={files[activeFileIndex].content}
                        onChange={(event) => handleFileContentChange(activeFileIndex, event.target.value)}
                        rows={20}
                        cols={80}
                    />
                </div>
            )}
        </div>
    );
};


