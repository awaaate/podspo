import React from 'react';

import SHOP_DATA from './shop.data'

import CollectionPreview from './../../components/collection-preview/collection-preview.component'


class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }
    render (){
        const { collections } = this.state
        console.log('hola')
        return(
            <div className="shop-preview">
                {collections.map( ({id, ...collectionProps}) => (
                    <CollectionPreview key={id} {...collectionProps}/>
                ))}
            </div>
        )
    }
}
export default ShopPage