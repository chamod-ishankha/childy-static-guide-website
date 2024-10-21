import React from 'react'

function Downloads() {

    const documents = [
        {
            name: 'Topic Assessment',
            submittionDate: '2024-10-21',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1QdAl5UBDAg0O3JyNyYjiDflg6snliOrN/view?usp=sharing'
            
        },
        {
            name: 'Project Charter',
            submittionDate: '2024-10-21',
            grouporindi: 'Group',
            link: ''
        },
        {
            name: 'Project Proposal Reports',
            submittionDate: '2024-10-21',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/10d1ASoH9MMrrzEQQe1rlVpAAryYhvFHX?usp=sharing'
        },
        {
            name: 'Status Documents I',
            submittionDate: '2024-10-21',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/19V-LUdng6Kla7mgmVfGZUN_U5qLtHgHB?usp=sharing'
        },
        {
            name: 'Status Documents II',
            submittionDate: '2024-10-21',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/1o99fDdxAbqQkacijrI-v6ecZ2-ENICFk?usp=sharing'
            
        },
        {
            name: 'Research Paper',
            submittionDate: '2024-10-21',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1J5wVzmuzdlqDZm3FBck3z8L3Dkgdyfuj?usp=sharing'
        },
        {
            name: 'Final Report',
            submittionDate: '2024-10-21',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1J5wVzmuzdlqDZm3FBck3z8L3Dkgdyfuj?usp=sharing'
        },
        {
            name: 'Poster',
            submittionDate: '2024-10-21',
            grouporindi: 'Group',
            link: ''
        }
    ]

    const presentations = [
        {
            name: 'Project Proposal',
            submittionDate: '2024-10-21',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1j4AKXaZDehz2Zo5biFhVqI86hpykAz-D/view?usp=sharing'
        },
        {
            name: 'Progress Presentation I',
            submittionDate: '2024-10-21',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1gGzgx9h9RCwdd8WUMhXlZTLeiFXFS4VF/view?usp=sharing'
        },
        {
            name: 'Progress Presentation II',
            submittionDate: '2024-10-21',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1tG4fd2TAAXbfSg_gkcYaTgOV939YDBve/view?usp=sharing'
        },
        {
            name: 'Final Presentation',
            submittionDate: '2024-10-21',
            grouporindi: 'Group',
            link: ''
        }
    ]

    return (
        <section className='mt-5 meetteam' style={{ backgroundColor: '#d3c8f1', padding: '30px' }} id='Documents'>
            <h1 style={{ textAlign: 'center' }} className='mb-5'>Downloads</h1>

            <h4 style={{ marginLeft: '14%' }}>Documents</h4>
            <p style={{ marginLeft: '14%' }}>Please find all documents related to this project below.</p>
            <div className="mt-4" style={{ marginInlineStart: '14%', marginInlineEnd: '14%' }}>
                <div className="row">
                    {documents.map((document) => (
                        <div className="col-xs-12 col-sm-3 mb-5">
                            <div className="card carddowndolad d-flex flex-column h-100">
                                <div className="card-content" style={{ height: '150px' }}>
                                    <h5 className=" mb-3"> <i className="fas fa-file-alt me-2 docicon"></i> {document?.name}</h5>
                                    <p style={{ fontSize: '14px', color: "gray" }}>
                                        Submitted on {document?.submittionDate}
                                    </p>

                                </div>
                                <div className="card-read-more">
                                    <p style={{ fontSize: '15px', color: 'black', textDecoration: 'none', fontWeight: '500' }} className="btn btn-link btn-block ms-2">
                                        {document?.grouporindi}
                                    </p>
                                    <p style={{ fontSize: '15px', color: 'green', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block" onClick={() => { window.open(`${document?.link}`) }}>
                                        <i className="fas fa-download me-1"></i> Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h4 style={{ marginLeft: '14%' }} id='Presentations'>Presentations</h4>
            <p style={{ marginLeft: '14%' }}>Please find all presentations related this project below.</p>
            <div className=" mt-4" style={{ marginInlineStart: '14%', marginInlineEnd: '14%' }}>
                <div className="row">
                    {presentations.map((presentation) => (
                        <div className="col-xs-12 col-sm-3 mb-5">
                            <div className="card carddowndolad d-flex flex-column h-100">
                                <div className="card-content" style={{ height: '150px' }}>
                                    <h5 className=" mb-3"> <i className="fas fa-file-alt me-2 docicon"></i> {presentation?.name}</h5>
                                    <p style={{ fontSize: '14px', color: "gray" }}>
                                        Submitted on {presentation?.submittionDate}
                                    </p>

                                </div>
                                <div className="card-read-more">
                                    <p style={{ fontSize: '15px', color: 'black', textDecoration: 'none', fontWeight: '500' }} className="btn btn-link btn-block ms-2">
                                        {presentation?.grouporindi}
                                    </p>
                                    <p style={{ fontSize: '15px', color: 'green', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block" onClick={() => { window.open(`${presentation?.link}`) }}>
                                        <i className="fas fa-download me-1"></i> Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Downloads