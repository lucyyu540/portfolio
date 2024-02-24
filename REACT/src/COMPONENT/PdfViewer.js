export default function PdfViewer({ path }) {
    return (
        <object
            data={path}
            type="application/pdf"
            width="100%" height="100%"
        >
            <p>Unable to display PDF file.
                <a className='spaceLeft' href={process.env.PUBLIC_URL+path}>
                    Click to download. 
                </a>
            </p>
        </object>
    )
}