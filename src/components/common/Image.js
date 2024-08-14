import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

const Image = ({src}) => {
    return (
        <div className="col-md-4 col-sm-4 mb-xs-40 content-block pt42" style={{ position: 'relative' }}>
            <img
                alt="OPEX Gyms"
                className="background-image mb-xs-40"
                src={src}
                style={{ width: '100%' }}
            />
        </div>
    )
}

export default Image
