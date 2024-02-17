import React, { useState } from 'react'
import "./folder.css"

const Folder = ({ data }) => {
    console.log(data);
    const [expand, setExpand] = useState(false)
    const [showInput, setShowInput] = useState({ isVisible: false, isFolder: null })
    const [text, setText] = useState("");
    const onChangeAddFolderOrFile = (e, value) => {
        e.stopPropagation()
        setExpand(true)
        setShowInput({ ...showInput, isVisible: true, isFolder: value })

    }
    const onAddFolderOrFile = (e) => {

        if (e.keyCode === 13 && e.target.value) {

            setShowInput({ ...showInput, isVisible: false })
        }

    }


    if (data.isfolder) {
        return (
            <div>
                <div style={{ marginTop: "8px" }}>
                    <div className='Folder' onClick={() => setExpand(!expand)}>
                        <div><span>📁{data.name} </span>
                            <button onClick={(e) => onChangeAddFolderOrFile(e, true)} >Add Folder📁</button>
                            <button onClick={(e) => onChangeAddFolderOrFile(e, false)}>Add File📄</button></div>
                    </div>
                    <div style={{ display: expand ? "block" : "none", paddingLeft: "24px" }}>
                        {showInput.isVisible && <><span>{showInput.isFolder ? "📁" : "📄"}
                        </span> <input autoFocus type='text' onBlur={() => setShowInput({ ...showInput, isVisible: false })} onKeyDown={(e) => onAddFolderOrFile(e)} /></>}
                        {data.items.map((item) => { return (<Folder data={item} key={item.id} />) })}
                    </div>
                </div></div>
        )
    }
    else {
        return (
            <span className='file' >📄{data.name}</span>
        )
    }
}

export default Folder