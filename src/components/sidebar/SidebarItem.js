import React from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
// import { Icon } from '@material-ui/core';
import '../../styles/SidebarItem.css';

const SidebarItem = ({arrow, icon, label}) => {
    return (
        <div className='sidebarItem'>
            <div clasName="sidebarItem__arrow">
                {arrow && (<ArrowRightIcon />)}
            </div>
            
            <div className="sidebarItem__main">
                {icon}
                <p>(label)</p>
            </div>

        </div>
    )
}

export default SidebarItem
