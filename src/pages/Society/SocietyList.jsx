import React, { Component } from 'react'

const list=["D'Lang Chaps THE LITERARY SOCIETY","Divine Circle","E.T.C, Cult Society","Hello World","DSC","Sports Society","T.S.G, Tech Society"]

export class SocietyList extends Component {
    render() {
        return (
            <div >
               {list.map(item=>(
                   <div className="my-2 border p-1">{item}</div>
               ))}
            </div>
        )
    }
}

export default SocietyList 
