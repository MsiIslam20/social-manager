import React from 'react';
import './Form.css'

const Form = () => {
    return (
        <>
            <form className="form-main">
                <div className="form-group">
                    <label for="formGroupExampleInput">Creator</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Creator Name"/>
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput">Title</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Title"/>
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput">Message</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Your Message"/>
                </div>  
                <div className="form-group">
                    <label for="formGroupExampleInput">Tags</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Your Tags"/>
                </div>    
                <button className="btn btn-primary w-100 mt-3 mb-4">Submit</button>                            
            </form>
        </>
    );
};

export default Form;