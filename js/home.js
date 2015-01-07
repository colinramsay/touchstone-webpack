var React = require('react'),
    Navigation = require('touchstonejs').Navigation,
    Link = require('touchstonejs').Link,
    UI = require('touchstonejs').UI;

var Home = React.createClass({
    mixins: [Navigation],
    
    render: function() {
        return (
            <UI.FlexLayout className={this.props.viewClassName}>
                <UI.Headerbar label="TouchstoneJS" />
                <UI.FlexBlock scrollable>
                    <div className="panel-header text-caps">Bars</div>
                    <div className="panel">
                        <Link component="div" to="about" viewTransition="show-from-right" className="list-item is-tappable">
                            <div className="item-inner">about</div>
                        </Link>
                    </div>
                </UI.FlexBlock>
            </UI.FlexLayout>
        );
    }

});

module.exports = Home;