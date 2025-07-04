import React from 'react';
import "./EditCampus.css"

const EditCampus = () => {
    return (
        <main className='edit-campus-container'>
            <h1>Edit Campus </h1>
            <form>
                <label>Campus Name:</label>
                <input
                type='text'
                name='name'
                value=''
                required
                />
                <label>Image:</label>
                <input
                type='text'
                name='img'
                value=''
                />
                <label>Description:</label>
                <textarea
                type='text'
                name='description'
                value=''
                rows={10}
                cols={50}
                />
                <label>Address:</label>
                <input
                type='text'
                name='address'
                value=''/>
            </form>
        </main>
    )
}

export default EditCampus