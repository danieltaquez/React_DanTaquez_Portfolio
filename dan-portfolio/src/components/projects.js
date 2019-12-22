import React, {Component} from 'react';
import {Tabs,Tab, Grid, Cell, Card, CardText, CardTitle, CardMenu, CardActions, Button, IconButton} from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }
    
    toggleCategories() {

        if(this.state.activeTab === 0){
        return(
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>HTML/CSS Templates</CardTitle>
                <CardText>Lorem ajdndjs n sjdfjsjsdjsdj j njjsnsdj3 newfubiuefawekjf b ehjkfbaekhjbsaekjfh ehjfbaefj</CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton share/>
                </CardMenu>
            </Card>
          )
      } else if(this.state.activeTab === 1){
        return (
            <div><h1>This is Python</h1></div>
          )
      } else if(this.state.activeTab === 2){
        return (
            <div><h1>This is Javascript</h1></div>
          )
      } else if(this.state.activeTab === 3){
        return (
            <div><h1>This is MongoDB</h1></div>
          )
    }
};

    

    render () {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Python</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>Node.js</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid  className= "projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
                </section>
            </div>
        )
    }
};


export default Projects;