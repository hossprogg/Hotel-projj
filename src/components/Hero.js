import React from 'react'

export const Hero = ({children,hero}) => {
    return <header className={hero}>{children}</header>
}
//if no props is set 
Hero.defaultProps = {
    hero : "defaultHero"
}
