import './Editor.css';


export default function Editor({ openedFileNames, setOpenedFileNames, currentFileName, setCurrentFileName }) {

    return (
        <div className='Editor'>
            <div className="Tabs">
                {openedFileNames.map((fileName, index) => (
                    <div key={index} className='Tab'>
                        {fileName}
                    </div>
                ))}
            </div>
        </div>
    );
};


