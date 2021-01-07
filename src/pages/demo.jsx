import React from 'react';
const ThemeContext = React.createContext('light');
class App extends React.Component {
    render() {
        let them = "them";
        return (
            <div className="app">
                <ThemeContext.Provider value="dark">
                    <Tab them={them}></Tab>
                </ThemeContext.Provider>
            </div>
        )
    }
}
function Tab(props) {
    console.log(props);
    return (
        <div className="tab">
            this is a tab component
            <TabBar them={props.them}></TabBar>
        </div>
    )
}
class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.static = {
            contextType: ThemeContext
        }
    }
    render() {
        console.log('this.context',this.context)
        return (
            <div className="tab-bar" them={this.static.contextType._currentValue}>
                this is a tabbar component
            </div>
        )
    }
}
TabBar.contextType = ThemeContext;
export default App;