import { useState } from 'react';
import '../STYLE/Project.css';


const m_3d_mesh = '3D Mesh';
const m_dicom = 'Web DICOM Viewer';

const items = [
    m_3d_mesh,
    //m_dicom
]
export default function Project() {
    const [item, setItem] = useState(items[0]);
    return (
        <div id='projects' className="content Projects">

            <SideBar setItem={setItem} />

            {(() => {
                switch (item) {
                    case m_3d_mesh:
                        return <P1_MESH />;
                    case m_dicom:
                        return <P2_WEBDICOM />;
                    default:
                        return null;
                }
            })()}

        </div>
    )
}
function SideBar({ setItem }) {
    const [open, setOpen] = useState(true);

    function chooseItem(e, item) {
        if (e) {
            e.stopPropagation();
        }
        setItem(item);
        doClose();
    }

    function doClose(e) {
        console.log(e)
        setOpen(false);
    }
    function doOpen() {
        setOpen(true);
    }


    if (open) return (
        <div
            className='background'
            onClick={doClose}
        >

            <div className="sidebar">
                {items.map(it => (
                    <div
                        key={it}
                        className="item"
                        onClick={e => chooseItem(e, it)}>
                        {it}
                    </div>
                ))}
            </div>
        </div>

    )
    else {
        return (
            <img className='menu'
                src={process.env.PUBLIC_URL + '/assets/ic_menu.svg'}
                alt=''
                onClick={doOpen}
            />
        )
    }
}

function P1_MESH() {
    return (
        <div>
            <h1>3D Reconstruction of Contour Data</h1>
            <h5>
                Tech stack: C++, MFC
            </h5>
            <img
                src={process.env.PUBLIC_URL + '/assets/mesh/mesh.png'}
                alt=''
            />


            <Section name='Project Summary' />
            <p>
                Reconstructing 2D contour data into a renderable 3D surface expressed by a triangle mesh.
            </p>

            {/**3D*/}

            <Section name='I. Branching between Planes' />

            <div>
                <p>
                    Triangulation between two contours lying on continguous planes needs to consider two types of conditions
                </p>
                <ol>
                    <li>
                        Whether the two contours overlap along the z axis
                        - if they don't overlap there is no branching between the two contours
                    </li>
                    <li>
                        Whether there are differences in topology between the two contours
                        - a change in topology signifies a need to partition the volume
                    </li>
                </ol>

                <img src={process.env.PUBLIC_URL + '/assets/mesh/multi_plane.png'} alt='' />
                <img src={process.env.PUBLIC_URL + '/assets/mesh/branch.png'} alt='' />

            </div>


            {/**2D*/}
            <Section name='II. Decomposition of Polygons' />
            <div>
                <p>
                    Polygons lying on the first or last planes need to be "capped" to completely close the surace of the volume.
                </p>
                <p>
                    Regular polygons,
                    namely contours without any holes,
                    are decomposed by the earcut algorithm,
                    a recursive method of cutting away triangles from a shape in the order of the smallest angles formed by three points
                </p>

                <p>
                    Complex polygons, however,
                    must be partitioned first, as depicted below, and changed into regular polygons
                    before applying the earcut triangulation.
                </p>
                <img src={process.env.PUBLIC_URL + '/assets/mesh/complex_poly.png'} alt='' />
                <img src={process.env.PUBLIC_URL + '/assets/mesh/decom.png'} alt='' />

            </div>

            {/***/}

            <Section name='III. Planar Reconstruction' />
            <div>
                <p>
                    Steps I and II produce a triangle mesh, which,
                    in the context of this project,
                    is used to mark regions of interest (e.g. brain, lung) on multiplanar and 3D renderings derived from the patient's medical images.
                    This concluding phase of the project involves extracting the outline of the orthogonal/non-orthogonal planar intersections by sequentially traversing through
                    neighboring triangles of the mesh.
                </p>
                <img src={process.env.PUBLIC_URL + '/assets/mesh/plane_cut.png'} alt='' />
                <img src={process.env.PUBLIC_URL + '/assets/mesh/planar_intersection.png'} alt='' />
            </div>



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

function P2_WEBDICOM() {
    return (
        <div>
            <h1>
                Web DICOM Viewer
            </h1>

            <Section name='Orthogonal and non orthogonal representation' />
            <Section name='DICOM Lossy compression' />
            <Section name='DICOM VTK Rendering' />
            <Section name='' />
            <Section name='' />
            <Section name='' />

        </div>
    )
}

function Section({ name }) {
    return (
        <div className="section">
            {name}
        </div>
    )
}