import './../STYLE/Me.css'
export default function Me() {
    return (
        <div className="Me-comp content">
            <div className='row spaceBottom'>
                <div className='header'>
                    Name:
                </div>
                Lucy Jeong Sun, Yu
            </div>

            <div className='row spaceBottom'>
                <div className='header'>
                    Role:
                </div>
                Full Stack Software Engineer
            </div>

            <div className='row spaceBottom'>
                <div className='header'>
                    Education:
                </div>
                <div>
                    <div className='spaceBottom'>
                        <span>
                            B.A. in Computer Science / University Honors Scholar
                        </span>
                       
                        <a href='https://www.nyu.edu/' target="_blank" rel="noreferrer">
                            <i>
                                New York University
                            </i>
                        </a>
                        <a href='https://cs.nyu.edu/home/index.html' target="_blank" rel="noreferrer">
                            <i>
                                NYU Courant
                            </i>
                        </a>
                    </div>
                    <div className='spaceBottom'>
                        International Baccalaureate
                        <a href='https://www.uwcsea.edu.sg/' target="_blank" rel="noreferrer">
                            <i>
                                United World College of South East Asia
                            </i>
                        </a>
                    </div>
                    <div>
                        <a href='https://www.cis.edu.sg/' target="_blank" rel="noreferrer">
                            <i>
                                Canadian Internation School
                            </i>
                        </a>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='header'>
                    Located
                </div>
                <div>
                    <div className='spaceBottom'>
                        Singapore
                        <i>
                            2004 ~ 2015
                        </i>
                    </div>
                    <div className='spaceBottom'>
                        Firenze, Tuscany, Italy
                        <i>
                            2015 ~ 2016
                        </i>
                    </div>
                    <div className='spaceBottom'>
                        New York City, N.Y., U.S.A
                        <i>
                            2016 ~ 2021
                        </i>
                    </div>
                    <div className='spaceBottom'>
                        Seoul, Republic of Korea
                        <i>
                            2021 ~
                        </i>
                    </div>
                </div>
            </div>

        </div>
    )
}