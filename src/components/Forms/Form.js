import React from 'react';
import { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../Redux/actions/posts';

import './Form.css'

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
    })
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
    }
    return (
        <>
            <form className="form-main" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Creator</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Creator Name" 
                    value={postData.creator} 
                    onChange={(e) => setPostData({...postData, creator: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Title</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Title"
                    value={postData.title} 
                    onChange={(e) => setPostData({...postData, title: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Message</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Your Message"
                    value={postData.message} 
                    onChange={(e) => setPostData({...postData, message: e.target.value})}
                    />
                </div>  
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Tags</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Your Tags"
                    value={postData.tags} 
                    onChange={(e) => setPostData({...postData, tags: e.target.value})}
                    />
                </div>    
                <div className="form-group">
                    <FileBase
                        type= "file"
                        multiple = {false}
                        onDone = {({base64}) => setPostData({...postData, selectedFile: base64})}
                    />
                </div>                
                <button type="submit" className="btn btn-primary w-100 mt-3 mb-4">Submit</button>                            
            </form>
        </>
    );
};

export default Form;