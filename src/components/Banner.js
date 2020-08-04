import React from 'react'

export const Banner = ({children,title,subtitle}) => {

    return (//what does children mean ? what is its func ?
        <div className="banner">
            <h1>{title}</h1>
            <div></div>{/* if u wanna make a ligne use div plus some css */}
            <p>{subtitle}</p>
            {children}
        </div>
    )
}
