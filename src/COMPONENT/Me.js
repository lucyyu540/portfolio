import './../STYLE/Me.css'
export default function Me() {
    return (
        <div className="Me-comp content">            
            <div className='row spaceBottom'>
                <div className='header'>
                    Name:
                </div>
                Jeong Sun, Yu
            </div>

            <div className='row spaceBottom'>
                <div className='header'>
                    Role:
                </div>
                Full Stack Software Engineer
            </div>

            <div className='row'>
                <div className='header'>
                    Education:
                </div>
                <div>
                    <div className='spaceBottom'>
                        B.A. in Computer Science
                        <a href='https://www.nyu.edu/' target="_blank">
                            <i>
                                New York University
                            </i>
                        </a>
                        <a href='https://cs.nyu.edu/home/index.html' target="_blank">
                            <i>
                                NYU Courant
                            </i>
                        </a>

                    </div>
                    <div>
                        International Baccalaureate
                        <a href='https://www.uwcsea.edu.sg/' target="_blank" >
                            <i>
                                United World College of South East Asia
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}