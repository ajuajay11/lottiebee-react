import React, { useState, useEffect } from "react";

const API_DATA = 'https://jsonplaceholder.typicode.com/todos/1/photos';

function AccToggleData() {
    const [thumbnailUrl, setThumbnailUrl] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(API_DATA);
                const data = await res.json();
                setThumbnailUrl(data[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []);

    return (
        <div className="">
            <img className="" src={thumbnailUrl} />
        </div>
    );
}

export default AccToggleData;
