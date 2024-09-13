import React from "react";

const button = ({ url, text }) => (
        <div>
            <button className="button" href={url}>{text}</button>
        </div>
);

export default button;