import Button from "./Button";
import { useState } from 'react';
import './../STYLE/Project.css';

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
        <div className="content Projects">
            <h1>3D Reconstruction</h1>
            <h2>Aim</h2>
            <p>
                Represent discrete contours defined in 3D space as single volume.
            </p>

            <h2>Project</h2>
            <p>
                Set of ordered sequence of points in patient coordinate systems across multiple planes.
                Below is an illustration for clarity.
            </p>
            <h3>
                1. Single contour
            </h3>
            <img src='/assets/mesh/contour_data.png' />


            <h3>2. Single plane comprising multiple contours</h3>
            <div className="row">
                <div>
                    <p>
                        2. a) Multiple contours on a single plane
                    </p>
                    <img src='/assets/mesh/single_plane.png' />
                </div>
                <div>
                    <p>
                        2. b) A washed representation of the 2D disk.
                        Three of the inner contours are classified as holes (white-washed ovals).
                        The fourth constitutes a valid region.
                    </p>
                    <img src='/assets/mesh/single_plane_xor.png' />
                </div>

            </div>
            <p>
                2. c) Disks (single-plane contours) or first or last planes of a volumes are triangulated using the earcut algorithm.
                Polygons with inner contours, however, must be decomposed first as depicted below so that they are transformed into polygons without holes.
                Once decomposed, earcut triangulation is applied.
            </p>
            <img src='/assets/mesh/single_plane_decom.png' />

            <h3>
                3. Multiple contours across multiple planes
            </h3>
            <div>
                <p>
                    3. a) Building triangulation between contours lying on contiguous planes.
                </p>
                <img src='/assets/mesh/branch.png' />
            </div>


            <h2>
                Result
            </h2>
            <img src='/assets/mesh/mesh.png' />






            {/* <div className="row">
                <Button
                    value={"Previous"}
                    setValue={doPrev}
                />
                <Button
                    value={"Next"}
                    setValue={doNext}
                />
            </div> */}

        </div>
    )
}