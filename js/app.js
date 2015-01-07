var React = require('react/addons'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    Touchstone = require('touchstonejs');

require('../less/app.less');

var views = {
    'home': require('./views/home'),
    'about': require('./views/about')
};

var App = React.createClass({
    
    mixins: [Touchstone.createApp(views)],

    getInitialState: function() {
        return {
            currentView: 'home'
        };
    },

    gotoDefaultView: function() {
        this.showView('home', 'fade');
    },

    render: function() {
        return <div>
            <ReactCSSTransitionGroup transitionName={this.state.viewTransition.name} transitionEnter={this.state.viewTransition.in} transitionLeave={this.state.viewTransition.out}>
                    {this.getCurrentView()}
            </ReactCSSTransitionGroup>
        </div>
    }
});


React.render(<App />, document.getElementById('app'));