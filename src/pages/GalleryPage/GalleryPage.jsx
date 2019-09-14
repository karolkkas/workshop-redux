import React from 'react';
import {useSelector} from "react-redux";

function GalleryPage () {
    const count = useSelector(state => state.count);
    return (
        <div>
            <h1>Count</h1>
            <div>{count}</div>
        </div>
    );
}

export default GalleryPage;