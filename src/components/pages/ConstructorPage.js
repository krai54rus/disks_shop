import React from 'react';
import ConstructorFilter from '../constructor/ConstructorFilter';
import ConstructorPicture from '../constructor/ConstructorPicture';
// import ConstructorDisks from '../constructor/ConstructorDisks';
function ConstructorPage(){
    return(
        <div className="constructor-page">
            <div className="container">
                <div className="constructor-wrapper">
                <ConstructorFilter />
                <ConstructorPicture />
                {/* <ConstructorDisks /> */}
                </div>
            </div>
        </div>
    )
}
export default ConstructorPage;
