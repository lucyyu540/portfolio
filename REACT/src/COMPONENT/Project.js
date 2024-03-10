import { useState } from 'react';
import '../STYLE/Project.css';
import Button from './Button';


const m_3d_mesh = '3D Mesh';
const m_dicom = 'Web DICOM Viewer';
const m_home8 = 'NYC House Sharing'
const m_bill = 'Hospital Payment System'
const items = [
    m_3d_mesh,
    m_dicom,
    m_home8,
    m_bill
]
export default function Project() {
    const [index, setIndex] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div id='projects' className="content Projects">


            {/**TOP BAR SECTION */}
            <div className='topBar'>
                <button className='menu' onClick={(e) => setSidebarOpen(true)}>
                    <img
                        src={process.env.PUBLIC_URL + '/assets/ic_menu.svg'}
                        alt=''
                    />
                </button>

                <div className='navigator'>
                    <Button
                        disabled={index === 0 ? true : false}
                        value={
                            index === 0 ? '' :
                                (<span>
                                    <img src={`${process.env.PUBLIC_URL}/assets/ic_prev.svg`} alt='' />
                                    {items[index - 1]}
                                </span>)
                        }
                        setValue={() => { setIndex(index - 1); }}
                    />
                    <Button
                        disabled={index === items.length - 1 ? true : false}
                        value={
                            index === items.length - 1 ? '' :
                                (<span>
                                    {items[index + 1]}
                                    <img src={`${process.env.PUBLIC_URL}/assets/ic_next.svg`} alt='' />
                                </span>)
                        }
                        setValue={() => { setIndex(index + 1); }}
                    />
                </div>
            </div>

            <SideBar
                open={sidebarOpen}
                setOpen={setSidebarOpen}
                setIndex={setIndex}
            />

            {/**PROJECT CONTENTS */}
            {(() => {
                switch (items[index]) {
                    case m_3d_mesh:
                        return <P1_MESH />;
                    case m_dicom:
                        return <P2_WEBDICOM />;
                    case m_home8:
                        return <P3_HOME8 />;
                    case m_bill:
                        return <P4_PAYMENT_SYS/>;
                    default:
                        return null;
                }
            })()}

        </div>
    )
}
function SideBar({ open, setOpen, setIndex }) {

    function chooseItem(e, index) {
        if (e) {
            e.stopPropagation();
        }
        setIndex(index)
    }

    function doClose(e) {
        setOpen(false);
    }

    if (open) return (
        <div
            className='background'
            onClick={doClose}
        >

            <div className="sidebar">
                {items.map((it, index) => (
                    <div
                        key={it}
                        className="item"
                        onClick={e => chooseItem(e, index)}>
                        {it}
                    </div>
                ))}
            </div>
        </div>

    )
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

            <Section name='Worklow' />
            <img className='imgLarge' src={process.env.PUBLIC_URL + '/assets/mesh/mesh_diagram.png'} alt='' />


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
                        Whether there are differences in topology between the two contours (holes form, merge, etc.)
                        - a change in topology signifies the need for a unique surface modeling approach.
                    </li>
                </ol>

                <img className='imgMed' src={process.env.PUBLIC_URL + '/assets/mesh/multi_plane.png'} alt='' />
                <img className='imgMed' src={process.env.PUBLIC_URL + '/assets/mesh/branch.png'} alt='' />

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
                <img className='imgMed' src={process.env.PUBLIC_URL + '/assets/mesh/complex_poly.png'} alt='' />
                <img className='imgMed' src={process.env.PUBLIC_URL + '/assets/mesh/decom.png'} alt='' />

            </div>

            {/***/}

            <Section name='III. Planar Reconstruction' />
            <div>
                <p>
                    Steps I and II produce a triangle mesh, which,
                    in the context of this project,
                    is used to mark regions of interest (e.g. brain, lung) on multiplanar and 3D renderings derived from the patient's medical images.
                    This concluding phase of the project involves extracting the outline of the orthogonal/non-orthogonal planar intersection (cross-section polygon) by sequentially traversing through
                    neighboring triangles of the mesh.
                </p>
                <img className='imgMed' src={process.env.PUBLIC_URL + '/assets/mesh/plane_cut.png'} alt='' />
                <img className='imgMed' src={process.env.PUBLIC_URL + '/assets/mesh/planar_intersection.png'} alt='' />
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
            <h5>
                Tech stack: JavaSript, HTML5 Canvas, WebGL, React
            </h5>

            <Section name='Project Summary' />
            <img className='imgMed' src={process.env.PUBLIC_URL + '/assets/dicom_web/mr.png'} alt='' />

            <p>
                <i>Disclaimer:
                    The project screenshot above is taken directly from public marketing materials,
                    and I am not disclosing any confidential information by sharing it.
                </i>
                <ol>
                    <li>Visualization of Hounsfield values on HTML5 Canvas</li>
                    <li>Voxelization</li>
                    <li>3D Rendering</li>
                    <li>Volume Handling</li>
                    <li>Optimization</li>
                </ol>
            </p>
            <Section name='Hounsfield Value Representation and DICOM Support' />
            <ul>
                <li>
                    Scale Hounsfield values stored as 8, 16, or 32 bits
                    to renderable RGB values
                </li>
                <li>
                    Parse DICOM standardized data and represent header or raw values as components
                    on volume data (e.g. dose beams on patient images, contour data around regions of interest)
                </li>
            </ul>

            <Section name='Voxelizaiton (Multi-Planar Representaion)' />
            <img className='imgMed' src={process.env.PUBLIC_URL + '/assets/dicom_web/volume.png'} alt='' />
            <img className='imgMed' src={process.env.PUBLIC_URL + '/assets/dicom_web/mpr.png'} alt='' />


            <Section name='3D Rendering' />
            <ul>
                <li>
                    Apply WebGL and web thread workers to represent rich image data on HTML5 Canvas Elements
                </li>
                <li>
                    Build volumes from slices of axial images and
                    compute sagittal and coronal intersectional views
                </li>
                <li>
                    Instantiate a virtual camera to perform 3D transformations -
                    namely, rotation, translation, and scaling - on volumetric images
                </li>
            </ul>
            <img src={process.env.PUBLIC_URL + '/assets/dicom_web/camera.png'} alt='' />

            <Section name='Volume Data Handling' />
            <p>
                Merge, sum, and extract orthogonal and non-orthogonal volum data of differing spatial
                orientation and position. (Diagram 1: one orthogonal volume and one non-orthogonal volume /
                diagram 2: non-orthogonal volume spatially mapped onto the orthogonal volume)
            </p>
            <img className='imgMed' src={process.env.PUBLIC_URL + '/assets/dicom_web/twoVols.png'} alt='' />
            <img className='imgMed' src={process.env.PUBLIC_URL + '/assets/dicom_web/mergedVols.png'} alt='' />



            <Section name='Optimization' />
            <p>
                DICOM objects tend to be heavy (as heavy as 250 MB or more)
                and a single job can require transferring bulks of such objects over the network. The following
                are some of the optimization procedures implemented in the project for network traffic,
                memory load, and computational optimization.
            </p>
            <ul>
                <li>
                    Lossy compression on voxel data
                </li>
                <li>
                    Point reduction
                </li>
                <li>
                    Data chunking
                </li>
                <li>
                    Browser caching using IndexedDB
                </li>
            </ul>

        </div>
    )
}

function P3_HOME8() {
    return (
        <div>
            <h1>
                Web Application for Matching Compatible Housemates
            </h1>
            <h5>
                Tech stack: JavaSript, React, Node, AWS, MYSQL
            </h5>

            <ul>
                <li>
                    Had been deployed and tested on AWS
                </li>
                <li>
                    Google Map React
                </li>
            </ul>

            <img className='imgLarge' src='https://github.com/lucyyu540/home8/blob/master/ex1.png?raw=true' alt='' />
            <img className='imgLarge' src='https://github.com/lucyyu540/home8/blob/master/ex2.png?raw=true' alt='' />
            
            <Section name='ER Diagram' />
            <img className='imgLarge' src={process.env.PUBLIC_URL + '/assets/home8/erd.png'} alt='' />

        </div>
    )

}
function P4_PAYMENT_SYS() {
    return (
        <div>
            <h1>
                Hospital Payment System 
            </h1>
            <h5>
                Tech stack:Jave, JavaSript, Vue, Spring, MYSQL
            </h5>
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