import React from 'react'
import Background from './assets/backdrop2.png'
import './contact.css'

function Home() {
    console.log('Home component rendered');
    return (
        <div>
            <div className="w3-display-container w3-center w3-padding-0">
                <img 
                    src={Background} 
                    style={{
                        marginLeft: "calc(-50vw + 50%)", 
                        marginRight: "calc(-50vw + 50%)",
                        width: "100vw",
                        maxWidth: "100vw"
                    }} 
                    alt="Background"
                />
                <div className='w3-display-middle'>
                    <h1 style={{textDecoration: "underline", textDecorationStyle: "dotted", color: "white"}}>
                    The deepest economic foundation of imperialism is monopoly.
                    </h1>
                </div>
            </div>
            <div className='w3-container w3-center w3-padding-24'>
                <h1><b>Contact Us</b></h1>
                <h2 style={{color: "gray", margin: "0px"}}><i>Interested in submitting or collaborating?</i></h2>
                <hr style={{width: "50%", marginRight: "auto", marginLeft: "auto"}} />
            </div>
            <div className='w3-container w3-center'>
                <form id="form1">
                    <label htmlFor="fname">Name or Pseudonym:   </label>
                    <input type="text" id="fname" name="fname" /><br />
                    <label htmlFor="lname">Contact Email:   </label>
                    <input type="text" id="lname" name="lname" /><br />
                    <label htmlFor="subject">Subject:   </label>
                    <input type="text" id="subject" name="lname" /><br />
                </form>
                <form id="form2">
                    <label htmlFor="query">What would you like to talk about?</label><br />
                    <textarea type="textarea" id="query" name="query" /><br />
                </form>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Home;