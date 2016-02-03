/**
 * Created by z672626 on 2016/1/11.
 */
(function () {
    debug = true;

    require('./public/base.css');
    window.React = require('react');
    var ReactDOM = require('react-dom');
    window.$ = require('./node_modules/zepto/zepto.min');
    window.AJ = require('httpServer');
    window.SH = require('share');
    window.CF = require('./public/const');


    window.injectTapEventPlugin = require("react-tap-event-plugin");
    injectTapEventPlugin();
    var ReactRouter = require('react-router');

    var Router = ReactRouter.Router;
    var browserHistory = ReactRouter.browserHistory;

    var rootRoute = {
        childRoutes: [
            {
                path: '/',
                component: require('loading')
            },
            {
                path: 'expect',
                getComponent: function (location, cb) {
                    require.ensure([], function (require) {
                        cb(null, require('expect'));
                    });
                }
            },
            {
                path: 'bind',
                getComponent: function (location, cb) {
                    require.ensure([], function (require) {
                        cb(null, require('bind'));
                    });
                }
            },
            {
                path: 'index',
                getComponent: function (location, cb) {
                    require.ensure([], function (require) {
                        cb(null, require('start'));
                    });
                }
            },
            {
                path: 'describe',
                getComponent: function (location, cb) {
                    require.ensure([], function (require) {
                        cb(null, require('describe'));
                    });
                }
            },
            {
                path: 'help',
                getComponent: function (location, cb) {
                    require.ensure([], function (require) {
                        cb(null, require('help'));
                    });
                }
            }
        ]
    };

    ReactDOM.render(
        <Router history={browserHistory} routes={rootRoute}/>,
        document.getElementById("main")
    );

})();