import React from 'react'

const components = {

    editableImage: ({ src }) => (

        <div style={{outline:"10px solid red"}}>
            <img style={{width:"100%"}} src={src} />
        </div>

    )

}

export default components;

