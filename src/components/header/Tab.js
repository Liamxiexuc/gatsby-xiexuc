import React, { useState } from 'react';
import Annotation from '../Annotation';
import { Link } from 'gatsby';
import headerStyles from "./header.module.scss"

export const Tab = ({ route }) => {
    const [hovered, setHovered] = useState(false);

    const onMouseOver = () => {
        setHovered(true);
    };

    const onMouseLeave = () => {
        setHovered(false);
    };

    return (
        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to={route.url}>
            <li onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                <Annotation strokeWidth="2" type="box" show={hovered}>
                    <span>{route.name}</span>
                </Annotation>
            </li>
        </Link>
    );
};

export default Tab;