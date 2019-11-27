import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render () {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col= {12}>
                        <img
                        src= "https://images.pexels.com/photos/2315712/pexels-photo-2315712.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="avatar"
                        ClassName= "avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Dev.</h1>

                            <hr/>

                            <p>HTML/CSS |Semantic UI | JavaScript | React | Node.js | Express | MongoDB </p>

                        </div>
                    </Cell>
                </Grid> 
            </div>
         )
    }
};

export default Landing;