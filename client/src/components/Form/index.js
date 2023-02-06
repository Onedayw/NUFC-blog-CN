import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormContainer } from './styles';
import FileBase from 'react-file-base64';

import { createPost } from '../../actions/posts';

export function Form() {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    };

    const clear = () => {

    };

    return (
        <FormContainer>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <h1>Creating a blog</h1>
                <input name="creator" label="Creator" value={postData.creator} placeholder="Creator" onChange={ (e) => setPostData({ ...postData, creator: e.target.value })}></input>
                <input name="title" label="Title" value={postData.title} placeholder="Title" onChange={ (e) => setPostData({ ...postData, title: e.target.value })}></input>
                <input name="message" label="Message" value={postData.message} placeholder="Message" onChange={ (e) => setPostData({ ...postData, message: e.target.value })}></input>
                <input name="source" label="Source" value={postData.source} placeholder="Source" onChange={ (e) => setPostData({ ...postData, source: e.target.value })}></input>
                <input name="tags" label="Tags" value={postData.tags} placeholder="Tags" onChange={ (e) => setPostData({ ...postData, tags: e.target.value })}></input>
                <input name="language" label="Language" value={postData.Language} placeholder="Language" onChange={ (e) => setPostData({ ...postData, language: e.target.value })}></input>
                <div>
                    <FileBase type="file" multiple={false} onDone={(base64) => setPostData({ ...postData, selectedFile: base64 })} />
                    <button type="submit">Submit</button>
                    <button onClick={clear}>Clear</button>
                </div>
            </form>
        </FormContainer>
    );
}
