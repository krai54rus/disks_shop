import React from 'react';
function CatalogFilterMobile(props){

    function mobileFilter(){
      if (props.showFilter) {
        props.toggleFilter(false);
      }else{
        props.toggleFilter(true);
      }
    }

    return (
        <div className="catalog-filter__mobile">
                  <div className={`catalog-filter__mobile_btn ${props.showFilter ? "mobclick" : ""}`} onClick={() => mobileFilter()}>
                    <div className="mobile-filter-button">
                      <span>Фильтр</span>
                    </div>
                    <div className="mobile-button_img">
                      {
                        props.showFilter
                        ? <img src="./img/filter.svg" alt="" />
                        : <img src="./img/filter-white.svg" alt="" />
                      }
                    </div>
                  </div>
          </div>
    );
}
export default CatalogFilterMobile;
