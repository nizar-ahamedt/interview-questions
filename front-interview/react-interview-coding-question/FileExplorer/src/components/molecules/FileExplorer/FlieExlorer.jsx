import React, { useState } from 'react'
import { explorer } from "../../../data/folderData"
import Folder from '../../atoms/Folder/Folder'

function FlieExlorer() {

    const [explorerData, setExplorerData] = useState(explorer);
    console.log(explorerData)


    return (
        <div><Folder data={explorerData} key={explorerData.id} /></div>
    )
}

export default FlieExlorer