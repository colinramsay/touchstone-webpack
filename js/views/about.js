var React = require('react'),
    UI = require('touchstonejs').UI,
    Link = require('touchstonejs').Link;

var About = React.createClass({

    render: function() {
        return (
             <UI.FlexLayout className={this.props.viewClassName}>
                <UI.Headerbar>
                    <Link to="home" viewTransition="reveal-from-right" className="Headerbar-button ion-chevron-left" component="button">Back</Link>
                    <div className="Headerbar-label">About</div>
                </UI.Headerbar>
                <UI.FlexBlock>
                    <div className="view-feedback">Content goes here.</div>
                </UI.FlexBlock>
            </UI.FlexLayout>
        );
    }

});

module.exports = About;