import React from 'react'
import Navbar from './Navbar'
import Footer from '../layout/Footer'
import Landing from '../layout/Landing'

const Mood = (props) => {
    return (
        <>
            <div className="col-sm-8 col-lg-8 col-lg-md-8 mx-auto">
                <div className="card p-lg-3">
                    <div className="card-body">
                        <h5 className="card-title pb-3">Over the last two weeks have you been feeling
                            down,depressed, irritable, or hopeless?</h5>
                        <div className="card-text d-flex labels">
                            <label className="form-control">
                                <input type="radio" name={props.qnName} value="Not at all" />Not at all
                            </label>

                            <label className="form-control">
                                <input type="radio" name={props.qnName} value="Several Days" />Several Days
                            </label>

                            <label className="form-control">
                                <input type="radio" name={props.qnName} value="More than half the days" />More than half
                                the days
                            </label>

                            <label className="form-control">
                                <input type="radio" name={props.qnName} value="Nearly every day" />Nearly every day
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Comp = () => {
    return (
        <>
            <section id="team" className="team">
                <div className="container" data-aos="fade-up" />

                <div className="section-header">
                    <h2>Mood Tracker Quiz</h2>
                    <p>Answer these simple questions and get your mood chart !</p>
                </div>

                <form id="formid">
                    <div className="row d-grid gap-lg-5">
                        <Mood name="Qn-1" />
                        <Mood name="Qn-2" />
                        <Mood name="Qn-3" />
                        <Mood name="Qn-4" />
                        <Mood name="Qn-5" />
                        <Mood name="Qn-6" />
                        <Mood name="Qn-7" />
                        <Mood name="Qn-8" />
                        <Mood name="Qn-9" />
                        <Mood name="Qn-10" />
                    </div>
                </form>

            </section>
        </>
    )
}


const Mood_Tracking = () => {
    return (
        <>
            <Navbar />
            <Landing />
            <Comp />
            <Footer />

        </>
    )
}

export default Mood_Tracking
