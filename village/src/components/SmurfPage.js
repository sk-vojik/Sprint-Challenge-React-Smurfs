import React from "react"

function SmurfPage(props) {
  console.lop(props)
  const id = props.match.params.id;
  const singleSmurf = props.smurfs.find(smurf => `${smurf.id}` === id)
  return (
    <div>
      <h2>{singleSmurf.name}</h2>
      <h2>hello</h2>

      
    </div>
  )

  }

export default SmurfPage