import React from 'react'

const ShowImage = ({item, url}) => {
    return (
        <div className="product-img">
            <img src={`/api/${url}/photo/${item._id}`} alt={item.name} className="mb-3" style={{maxHeight:"200px", maxWidth: "100%",justifyContent:"center", alignItems:"center", display:"block", margin:"auto"}}/>
        </div>
    )
}

export default ShowImage
