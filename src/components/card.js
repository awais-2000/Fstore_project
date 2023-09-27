import React from 'react'

export default function card(props) {
  const { CategoryName, description, img, name } = props.data;
  return (
    <div>
      <div>
        <div className="card mt-3" style={{"width": "18rem"}}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <div className='container w-100'>
                  <select className="m-2 h-100 bg-success rounded" >
                    {
                      Array.from(Array(6),(e,i) =>{
                        return(
                          <option key={i+1} value={i+1}> {i+1} </option>
                        )
                      })
                    }
                  </select>
                  <select className="m-2 h-100 bg-success rounded">
                    <option value="half">Half</option>
                    <option value="full">Full</option>
                  </select>
                  <div className='d-inline fs-5'>
                    Total Price 
                  </div>
              </div>
            </div>
      </div>
      </div>
    </div>
  )
}
