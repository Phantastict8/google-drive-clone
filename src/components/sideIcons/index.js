import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import '../../styles/SideIcons.css';

const index = () => {
    return (
        <div className="sideIcons">
            <div className="sideIcons__top">
                <img
                    src="https://i.pinimg.com/originals/6e/09/90/6e099088b3deb805b68d83676af6f067.png"
                    alt="google calendar"
                />
                <img
                    src="https://cdn.iconscout.com/icon/free/png-512/google-keep-2-569459.png"
                    alt="google keep"
                />
                <img
                    src="https://static.thenounproject.com/png/38699-200.png"
                    alt="google task"
                />
            </div>

            <hr />

            <div className="sideIcons__plusIcon">
                <AddIcon />
            </div>

        </div>
    );
};

export default index;
