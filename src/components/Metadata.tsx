import React from "react";
import "./style.css";

type MetadataProps = {
    metadata: string;
};

function Metadata({ metadata }: MetadataProps): JSX.Element {
    return (
        <div className="box">
            <div className="metadata">
                <div className="overlap-group">
                    <div className="text-wrapper">
                        {metadata}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Metadata;

