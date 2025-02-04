const Feedback = () => {
return (
    <div className="feedback-container">
        <div className="feedback-form">
            <span className="feedback-title">Thank you so much for taking the time!</span>
            <span className="feedback-info">Please provide the below details!</span>
            <div style={{marginTop: "30px"}}>
                <div className="label-text-container">
                    <label className="label">First Name: </label>
                    <input className="input"></input>
                </div>
                <div className="label-text-container">
                    <label className="label">Last Name: </label>
                    <input className="input"></input>
                </div>
                <div className="label-text-container">
                    <label className="label">Address: </label>
                    <input className="address"></input>
                </div>
                <div className="label-text-container">
                    <label className="label">Country: </label>
                    <input className="input"></input>
                </div>
                <div className="label-text-container">
                    <label className="label">Email ID: </label>
                    <input className="input"></input>
                </div>
                <div className="label-text-container">
                    <label className="label">Phone Number: </label>
                    <input className="input"></input>
                </div>
            </div>
            <button className="submit-btn">Submit Feedback</button>
        </div>
    </div>
)
}

export default Feedback;