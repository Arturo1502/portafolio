import React from 'react';
import './Dashboard.css';
import Photo from "/yo5.jpg";


const Dashboard  = () => {
    return (
        <>
            <div className="presentacion">
                <h1>
                    Hi 👋, <br />
                    My name is <br />
                    Arturo Alvarez <br />
                    I build things for web <br />
                </h1>
                <img src={Photo} alt="Master Developer" className="ProfilePhoto" />
            </div>
        </>
    )
}



export default Dashboard;
