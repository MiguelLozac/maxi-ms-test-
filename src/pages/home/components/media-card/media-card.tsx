import React from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";

export const MediaCard: React.FC<MediaCardInterface> = ({programType, title}) => {

    const header = (
        <div className="bg-bluegray-900">
             <img className="mx-auto" alt="movie logo" src="https://raw.githubusercontent.com/maxi-ms/frontend-technical-test/main/assets/placeholder.png"/>
        </div>
    )
    const footer = (
        <Link to={`/list/${programType}`} >
            <Button label="Explore"/>
        </Link>
    )
    return(
        <>           
            <Card title={programType} subTitle={title} footer={footer} header={header} className="md:w-25rem"/>
        </>
    )
}

export default MediaCard;