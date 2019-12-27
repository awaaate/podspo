import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';


import './collection-preview.styles.scss'

const CollectionPreview = ({title,imageUrl , items}) => (
    <div className="collection-preview">
        <div className="title">
            <h2>{title.toUpperCase()}</h2>
        </div>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)
export default CollectionPreview