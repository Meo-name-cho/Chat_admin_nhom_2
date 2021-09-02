import React from 'react';
import "./index.css"
import '././FontAwesome/index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function index() {
    return (
        <div>
            <div className="sidebar">
                {/* sidebar */}
                <div className="sidebar__menu">
                    <h2 className="sidebar__menu sidebar__menu--name"><img className="avt" src="https://www.takadada.com/wp-content/uploads/2019/07/avatar-one-piece-0.jpg" alt /></h2>
                    <div className="sidebar__listicon">
                        <div className="sidebar__listicon sidebar__listicon--item">
                            <div className="sidebar__listicon sidebar__listicon--clock "><FontAwesomeIcon class="btn__icon" icon={['fas', 'clock']} /></div>
                        </div>
                        <div className="sidebar__listicon sidebar__listicon--item">
                            <div className="sidebar__listicon sidebar__listicon--check"><FontAwesomeIcon class="btn__icon" icon={['fas', 'calendar-check']} /></div>
                        </div>
                        <div className="sidebar__listicon sidebar__listicon--item">
                            <div className="sidebar__listicon sidebar__listicon--eye"><FontAwesomeIcon class="btn__icon" icon={['fas', 'eye']} /></div>
                        </div>
                        <div className="sidebar__listicon sidebar__listicon--item1">
                            <div className="sidebar__listicon sidebar__listicon--user"><FontAwesomeIcon class="btn__icon" icon={['fas', 'user']} /></div>
                        </div>
                        <div className="sidebar__listicon sidebar__listicon--item">
                            <div className="sidebar__listicon sidebar__listicon--blog"><FontAwesomeIcon class="btn__icon" icon={['fas', 'blog']} /></div>
                        </div>
                        <div className="sidebar__listicon sidebar__listicon--item">
                            <div className="sidebar__listicon sidebar__listicon--cart"><FontAwesomeIcon class="btn__icon" icon={['fas', 'video']} /></div>
                        </div>
                        <img className="avt" src="https://www.takadada.com/wp-content/uploads/2019/07/avatar-one-piece-0.jpg" alt />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
