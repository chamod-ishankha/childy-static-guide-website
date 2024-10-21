import React from 'react'

function MeetOurTeam() {
    const ourTeam = [
        {
            name: 'Ms. Dinithi Pandithage',
            position: 'Supervisor',
            image: 'https://static.sliit.lk/profile/dinithip-1677747689.jpeg',
            department: 'Faculty of Computing & Computer Systems Engineering'
        },
        {
            name: 'Ms. Akshi De Silva',
            position: 'Co_Supervisor',
            image: 'https://github.com/chamod-ishankha/childy-app-contents/blob/master/images/profile2.jpg?raw=true',
            department: 'Faculty of Computing & Information Technology'
        },
        {
            name: 'Chamod Ishankha K.',
            position: 'Group Leader',
            image: 'https://github.com/chamod-ishankha/childy-app-contents/blob/master/images/chamod-profile.jpg?raw=true',
            department: 'Faculty of Computing & Information Technology'
        },
        {
            name: 'Lakmini Pabasara',
            position: 'Group Member',
            image: 'https://github.com/chamod-ishankha/childy-app-contents/blob/master/images/lakmini-profile.jpg?raw=true',
            department: 'Computer Science & Information Technology'
        },
    ]

    return (
        <section className='mt-5 meetteam' id='aboutus'>
            <h1 style={{ textAlign: 'center' }}>Meet Our Team !</h1>
            <div className="container mt-5">
                <div className="row">
                    {ourTeam.map((ourTeamm) => (
                        <div className="col-xs-12 col-sm-3">
                            <div className="card d-flex flex-column h-100">
                                <a className="img-card">
                                    <img src={ourTeamm?.image} alt='' />
                                </a>
                                <div className="card-content">
                                    <h4 className="card-title mb-3"> {ourTeamm?.name}</h4>
                                    <img className='mb-2' src={`https://img.shields.io/badge/-${ourTeamm?.position}-807e7e`} />
                                    <p style={{ fontSize: '14px' }}>
                                        Sri Lanka Institute of Information Technology
                                    </p>
                                    <p style={{ fontSize: '14px' }}>
                                        <span style={{ fontWeight: '700' }}>Department</span>
                                        <br />
                                        {ourTeamm?.department}
                                    </p>
                                </div>
                                <div className="card-read-more">
                                    <a href="/" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block ms-2">
                                        <i className="fab fa-google me-1 mb-5"></i> G-Scholar
                                    </a>
                                    <a href="/" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block">
                                        <i className="fas fa-envelope-open-text me-1 mt-5"></i> E-Mail
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MeetOurTeam
