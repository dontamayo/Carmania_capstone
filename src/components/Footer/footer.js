import React from 'react';
import styles from './footer.css';
import { Link } from 'react-router-dom';

import { CURRENT_YEAR } from '../../config';


const footer = () => (
        <div className={styles.footer}>
            <Link to="/" className={styles.logo}>
                <img alt="nba logo" src="/images/car_logo.png"/>
            </Link>
            <div className={styles.right}>
                @CarMania {CURRENT_YEAR} All rights reserved. 
              DBT Global Enterprises LLC
            </div>
        </div>
)


export default footer;
