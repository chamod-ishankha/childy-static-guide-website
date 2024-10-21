import React from 'react'

function ResearchProblem() {
    return (
        <section className='mt-1' id="Problem">
            <h1 style={{ textAlign: 'center' }}>Research Problem & Solution</h1>
            <br /><br />
            <div className="container-fluid " id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h5 style={{ fontWeight: '700' }} className='ms-3'>Proposed Problem</h5>
                            <h5 style={{ fontWeight: '700', color: '#957bda' }} className='ms-3'>What challenges do parents face in ensuring quality childcare for their children due to busy schedules?</h5>
                            <p style={{ textAlign: 'justify' }} className='ms-3 mt-4'>
                                Busy schedules often lead parents to lose track of essential interactions with 
                                their children, negatively impacting their growth and well-being. As a result, 
                                parents frequently hire nannies or leave their children in childcare centers, 
                                which may not provide the necessary individualized attention.

                                <br /><br />
                                How does the quality of care from nannies and childcare centers affect 
                                children's development? Nannies may be distracted or inadequately trained, 
                                impacting the quality of care provided. Additionally, baby-care centers often 
                                struggle with high child-to-caregiver ratios, compromising the attention and 
                                support each child receives.

                                <br /><br />
                                What obstacles prevent parents from assessing their children's well-being 
                                while they are away? Parents often lack real-time updates on their children's 
                                mental state, leading to concerns that hinder effective parent-child 
                                communication and understanding.

                            </p>
                        </div>
                        <div className="col-lg-6 pb-4 pb-lg-0">
                            <h5 style={{ fontWeight: '700' }} className='ms-3 mt-3'>Proposed Solution</h5>
                            <p style={{ textAlign: 'justify' }} className='ms-3 mt-4'>
                                Develop a Baby Monitoring System with an Arduino-based smart cradle 
                                that utilizes facial expression recognition and cradle sensor data 
                                to monitor infants' emotions. This system will notify guardians of the 
                                child's current mental state, fostering better communication and 
                                understanding between parents and their children, 
                                even when they are apart.
                            </p>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResearchProblem