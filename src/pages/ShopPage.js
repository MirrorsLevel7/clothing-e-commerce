import React, { Component } from 'react'
import { COLLECTION_DATA } from '../Data/CollectionData'
import Preview from '../Components/Preview';

class ShopPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            collections: COLLECTION_DATA
        }
    }

    render() {
        const {collections} = this.state;

        return (
            <div>
                {collections.map(({id, ...collections})=>(
                    <Preview  key={id} {...collections}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;
