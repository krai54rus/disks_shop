import React from 'react';
import {
    Link,
  } from "react-router-dom";
function Header(props){
    return(
        <div className="header">
            <div className="container">
            <div className="header-items">
                {/* <div className="header-items__left"> */}
                    <div className="header-items___link header-items__left_link">
                        <Link to="/">HotWheels</Link>
                    </div>
                    {/* <div className="header-items___link header-items__left_link">
                        <span>+7 (989) 989-98-99</span>
                    </div> */}
                {/* </div> */}

                {/* <div className="header-items__right"> */}
                    <div className="header-items___link header-items__right_link">
                        <Link to="/catalog">Диски</Link>
                    </div>
                    <div className="header-items___link header-items__right_link">
                        <Link to="/constructor">Конструктор</Link>
                    </div>
                    <div className="header-items___link header-items__right_link">
                        <Link to="/personal">
                            <img src="/img/user-pers.svg" alt="" />
                            Личный кабинет
                        </Link>
                    </div>
                {/* </div> */}
            </div>
            </div>

        </div>
    )
}
export default Header;
