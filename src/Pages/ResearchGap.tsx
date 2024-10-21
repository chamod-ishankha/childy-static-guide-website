import React from 'react'

function ResearchGap() {
    return (
        <section className='mt-2' id='researchgap'>
            <h1 style={{ textAlign: 'center' }}>Research Gap</h1>
            <p style={{ textAlign: 'center' }}>Following areas are the research gaps found in most of the recent research on baby monitoring systems.</p>
            <div className="achievements">
                <div className="work">
                    <i className="fas fa-search" style={{color: '#957bda'}}></i>
                    <p className="work-heading">Identification & Classification</p>
                    <p className="work-text">
                        Limited existing research on infant facial expression recognition, 
                        with a focus primarily on adult models. There is a need for 
                        dedicated studies to develop algorithms that accurately classify 
                        infant emotions using facial data.
                        </p>
                </div>
                <div className="work">
                    <i className="fas fa-chart-line" style={{color: '#957bda'}}></i>
                    <p className="work-heading">Severity Assessment</p>
                    <p className="work-text">
                        Current systems primarily offer basic functionalities, such 
                        as notifications for caregivers to check on babies without 
                        assessing the severity of the child's condition or emotional 
                        state.
                    </p>
                </div>
                <div className="work">
                    <i className="fas fa-comments" style={{color: '#957bda'}}></i>
                    <p className="work-heading">Information Sharing</p>
                    <p className="work-text">
                        Existing solutions often lack real-time integration of 
                        facial recognition with cradle sensor data. Most products 
                        provide alerts but do not facilitate direct communication 
                        with guardians or caregivers, limiting immediate support 
                        in critical situations.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ResearchGap