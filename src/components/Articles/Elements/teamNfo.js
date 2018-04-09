import React from 'react';
import styles from '../articles.css';


const teamNfo = (props) => (
    <div className={styles.articleTeamHeader}>
        <div className={styles.left}
            style={{
                background:`url('/images/teams/${props.team.logo}')`
            }}
        >
        </div>
        <div className={styles.right}>
            <div>
              <strong>
                <span>{props.team.city} {props.team.name}</span>
              </strong>
            </div>
            <div>
                    Used {props.team.stats[0].wins}__
                     New {props.team.stats[0].defeats}

            </div>
            <div className="shop">
             <a href="http://sellacar.carnationautobuyers.com/?gclid=Cj0KCQjwnqzWBRC_ARIsABSMVTMYwXCBBAPD4yqj-NrL2EajEHG5VnWrRxqb6bu547D8Ctd-f-WgDw0aAqVxEALw_wcB" target="_blank">Visit our Car Shop</a>
           </div>
        </div>
    </div>
)

export default teamNfo;
