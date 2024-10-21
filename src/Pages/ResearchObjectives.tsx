import React from 'react'

function ResearchObjectives() {
    return (
        <section className='mt-5 objectives ' id="Objectives">
            <h1 style={{ textAlign: 'center' }}>Research Objectives</h1>
            <div className="mt-5" style={{ marginLeft: '15%', marginRight: '15%' }}>
                <div className="container mt-5">

                    <div className="row align-items-center  d-flex">
                        <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">1</div>
                        </div>
                        <div className="col-6">
                            <h5> Baby Movement Tracking Component</h5>
                            <p style={{ textAlign: 'justify' }}>The objective of this component is to incorporate sensors that track the baby's movements, providing data on their activity levels and alerting parents to any changes in normal routines.</p>
                        </div>
                    </div>

                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner top-right"></div>
                        </div>
                        <div className="col-8">
                            <hr />
                        </div>
                        <div className="col-2">
                            <div className="corner left-bottom"></div>
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-end  d-flex">
                        <div className="col-6 text-right">
                            <h5> Facial Expression Analysis Component</h5>
                            <p style={{ textAlign: 'justify' }}>This component aims to incorporate a camera system equipped with computer vision algorithms to analyze the baby's facial expressions, offering insights into their emotional state.</p>
                        </div>
                        <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">2</div>
                        </div>
                    </div>

                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner right-bottom"></div>
                        </div>
                        <div className="col-8">
                            <hr />
                        </div>
                        <div className="col-2">
                            <div className="corner top-left"></div>
                        </div>
                    </div>

                    <div className="row align-items-center  d-flex">
                        <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">3</div>
                        </div>
                        <div className="col-6">
                            <h5>Vocalization Monitoring Component</h5>
                            <p style={{ textAlign: 'justify' }}>The purpose of this component is to implement microphones that capture the baby’s vocalizations and cries, helping parents understand their child's needs and emotions.</p>
                        </div>
                    </div>

                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner top-right"></div>
                        </div>
                        <div className="col-8">
                            <hr />
                        </div>
                        <div className="col-2">
                            <div className="corner left-bottom"></div>
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-end  d-flex">
                        <div className="col-6 text-right">
                            <h5>Ambient Condition Monitoring Component</h5>
                            <p style={{ textAlign: 'justify' }}>This component's objective is to include sensors that monitor ambient conditions, such as light levels and sounds, to create a more comfortable environment for the baby.
                            </p>
                        </div>
                        <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">4</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ResearchObjectives