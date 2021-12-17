import React from 'react'

const Cards = ({results}) => {
    let display;

    if (results) {
        display = results.map((item) => {
            let {id, name, image, location} = item;
            
            return (
                <div className="col-4" key={id}>
                    <div className="">
                        <img src={image} alt={name} className='img-fluid' />
                        <div className="content">
                            <div className="fs-4 fw-bold mb-4">
                                {name}
                            </div>
                            <div className="">
                                <div className="fs-6">Last location</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    } else {
        display = <h1>No Characters Found</h1>
    }


    return (
        <>
            {display}
        </>
    )
}

export default Cards
