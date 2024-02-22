import Button from "./Button";
import { useState } from 'react';

export default function Project() {
    const pages = 5;
    const [page, setPage] = useState(1);

    function doNext() {
        if (page < 5) {
            setPage(p => p + 1);
        }
    }
    function doPrev() {
        if (page > 1) {
            setPage(p => p - 1);
        }
    }
    return (
        <div className="content">

            {/**3D mesh */}

            <h1>Problem</h1>

            <h1>Project</h1>


            <div className="row">
                <Button
                    value={"Previous"}
                    setValue={doPrev}
                />
                <Button
                    value={"Next"}
                    setValue={doNext}
                />
            </div>

        </div>
    )
}