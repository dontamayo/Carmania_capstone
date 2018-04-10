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
            <div className={styles.shopcart}>
              <div className={styles.shopright}>
                <a href="https://dontamayo.github.io/Q1_cars_2nd/" target="_blank"><strong>More on CarMania</strong></a>
              </div>
           </div>
        </div>
    </div>
)

export default teamNfo;
