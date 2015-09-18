import React from 'react'
import R from 'ramda'

const blocks = (components) => {

    return {

        "heroImage": data => (
            <div className="row">
                { components.editableImage({ src: data.image.value }) }
            </div>
        ),


        "header1": data => (
            <div className="row">
                <h1>{data.header.value}</h1>
            </div>
        ),

        "header2": data => (
            <div className="row">
                <h1>{data.header.value}</h1>
                <h4>{data.text.value}</h4>
            </div>
        ),


        "imageText1": data => (
            <div className="row">
                <div className="five columns">
                    { components.editableImage({ src: data.image.value }) }
                </div>

                <div className="five columns offset-by-two">
                    <p>{data.text.value}</p>
                </div>
            </div>
        ),


        "imageText2": data => (
            <div className="row">
                <div className="five columns">
                    <p>{data.text.value}</p>
                </div>

                <div className="five columns offset-by-two">
                    { components.editableImage({ src: data.image.value }) }
                </div>
            </div>
        ),


        "text": data => (
            <div className="row">
                <p>{data.text.value}</p>
            </div>
        ),



        "imageGallery1": data => (
            <div>
                {
                    R.splitEvery(2, data.images.value).map(([img1, img2]) => (
                        <div className="row">
                            <div className="five columns">
                                <img style={{width:"100%"}} src={img1} />
                            </div>

                            {img2 && <div className="five columns offset-by-two">
                                <img style={{width:"100%"}} src={img2} />
                            </div>}
                        </div>
                    ))
                }
            </div>
        ),


        "imageGallery2": data => (
            <div>
                {
                    R.splitEvery(3, data.images.value).map(([img1, img2, img3]) => (
                        <div className="row">
                            <div className="four columns">
                                <img style={{width:"100%"}} src={img1} />
                            </div>

                            {img2 && <div className="four columns">
                                <img style={{width:"100%"}} src={img2} />
                            </div>}

                            {img3 && <div className="four columns">
                                <img style={{width:"100%"}} src={img3} />
                            </div>}
                        </div>
                    ))
                }
            </div>
        ),

        "seperator": data => <div><hr /></div>
    }
    
}

export default blocks;