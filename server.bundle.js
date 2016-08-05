/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _reactRedux = __webpack_require__(4);

	var _redux = __webpack_require__(5);

	var _reduxThunk = __webpack_require__(6);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _index = __webpack_require__(7);

	var _index2 = _interopRequireDefault(_index);

	var _routes = __webpack_require__(11);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var express = __webpack_require__(17);
	var path = __webpack_require__(18);

	/*var routes = require('./routes/index');
	var users = require('./routes/users');*/

	//control 
	var data = __webpack_require__(19);
	var center = __webpack_require__(20);

	var app = express();
	console.log('dirname=' + __dirname);
	// view engine setup
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');

	// uncomment after placing your favicon in /public
	//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
	app.use(express.static(path.join(__dirname, 'public')));
	// jsonrouter pagerouter
	/*app.use('/', routes);
	app.use('/users', users);*/
	//control
	app.use('/data', data);
	//路由同构
	/*import compression from 'compression'
	app.use(compression())*/

	//react

	//router
	//redux

	console.log('appRrod.js');
	var store = (0, _redux.createStore)(_index2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));
	function renderPage(appHtml) {
	  return '\n    <!DOCTYPE html>\n    <html>\n    <meta charset=utf-8/>\n    <title>My First React Router App</title>\n    <div id="basePage">' + appHtml + '</div>\n    <script src="/bundle.js"></script>\n    </html>\n   ';
	}
	app.get('*', function (req, res) {
	  console.log('server accept');
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    console.log('match response');
	    if (err) {
	      res.status(500).send(err.message);
	    } else {
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      console.log(appHtml);
	      res.send(renderPage(appHtml));
	    }
	  });
	});

	// catch 404 and forward to error handler
	app.use(function (req, res, next) {
	  var err = new Error('Not Found');
	  err.status = 404;
	  next(err);
	});
	console.log('123123123123');
	// error handlers

	// development error handler
	// will print stacktrace
	if (app.get('env') === 'development') {
	  app.use(function (err, req, res, next) {
	    res.status(err.status || 500);
	    res.render('error', {
	      message: err.message,
	      error: err
	    });
	  });
	}

	// production error handler
	// no stacktraces leaked to user
	app.use(function (err, req, res, next) {
	  res.status(err.status || 500);
	  res.render('error', {
	    message: err.message,
	    error: {}
	  });
	});

	/*module.exports= app;*/

	var debug = __webpack_require__(22)('ggyapp:server');
	var http = __webpack_require__(23);

	/**
	 * Get port from environment and store in Express.
	 */

	var port = normalizePort(process.env.PORT || '3030');
	app.set('port', port);

	/**
	 * Create HTTP server.
	 */

	var server = http.createServer(app);

	/**
	 * Listen on provided port, on all network interfaces.
	 */

	server.listen(port, function () {
	  console.log('server start');
	});
	server.on('error', onError);
	server.on('listening', onListening);

	/**
	 * Normalize a port into a number, string, or false.
	 */

	function normalizePort(val) {
	  var port = parseInt(val, 10);

	  if (isNaN(port)) {
	    // named pipe
	    return val;
	  }

	  if (port >= 0) {
	    // port number
	    return port;
	  }

	  return false;
	}

	/**
	 * Event listener for HTTP server "error" event.
	 */

	function onError(error) {
	  if (error.syscall !== 'listen') {
	    throw error;
	  }

	  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

	  // handle specific listen errors with friendly messages
	  switch (error.code) {
	    case 'EACCES':
	      console.error(bind + ' requires elevated privileges');
	      process.exit(1);
	      break;
	    case 'EADDRINUSE':
	      console.error(bind + ' is already in use');
	      process.exit(1);
	      break;
	    default:
	      throw error;
	  }
	}

	/**
	 * Event listener for HTTP server "listening" event.
	 */

	function onListening() {
	  var addr = server.address();
	  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
	  debug('Listening on ' + bind);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(5);

	var _leftToggle = __webpack_require__(8);

	var _actions = __webpack_require__(9);

	function fetchState() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? { data: {}, status: 0 } : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case _actions.request_post:
	            return Object.assign({}, state, { status: action.status });
	        case _actions.receive_post:
	            return Object.assign({}, state, { status: action.status, data: action.data });
	        default:
	            return state;
	    }
	}

	var App = (0, _redux.combineReducers)({
	    leftToggleActive: _leftToggle.leftToggleActive,
	    fetchState: fetchState
	});

	exports.default = App;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.leftToggleActive = leftToggleActive;

	var _actions = __webpack_require__(9);

	function leftToggleActive() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case _actions.left_toggle_active:
	            return action.index;
	        default:
	            return state;
	    }
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetch_post = exports.receive_post = exports.request_post = exports.left_toggle_active = undefined;
	exports.leftToggleChange = leftToggleChange;
	exports.requestPost = requestPost;
	exports.receivePost = receivePost;
	exports.fetchPost = fetchPost;

	var _isomorphicFetch = __webpack_require__(10);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var left_toggle_active = exports.left_toggle_active = 'left_toggle_active';
	var request_post = exports.request_post = 'request_post';
	var receive_post = exports.receive_post = 'receive_post';
	var fetch_post = exports.fetch_post = 'fetch_post';

	function leftToggleChange(index) {
	    return {
	        type: left_toggle_active,
	        index: index
	    };
	}
	function requestPost(status) {
	    return {
	        type: request_post,
	        status: 1
	    };
	}
	function receivePost(data) {
	    return {
	        type: receive_post,
	        status: 2,
	        data: data
	    };
	}

	function fetchPost(url) {
	    return function (dispatch) {
	        dispatch(requestPost());
	        return (0, _isomorphicFetch2.default)(url).then(function (response) {
	            return response.json();
	        }).then(function (json) {
	            dispatch(receivePost(json));
	        });
	    };
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _page = __webpack_require__(12);

	var _page2 = _interopRequireDefault(_page);

	var _Home = __webpack_require__(15);

	var _Home2 = _interopRequireDefault(_Home);

	var _Article = __webpack_require__(16);

	var _Article2 = _interopRequireDefault(_Article);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//page
	module.exports = _react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/page', component: _page2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/article', component: _Article2.default })
	);
	//router
	//react

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(4);

	var _leftNavigation = __webpack_require__(13);

	var _leftNavigation2 = _interopRequireDefault(_leftNavigation);

	var _actions = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Page = function (_Component) {
	  _inherits(Page, _Component);

	  function Page(props) {
	    _classCallCheck(this, Page);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Page).call(this, props));
	  }

	  _createClass(Page, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var dispatch = _props.dispatch;
	      var leftToggleActive = _props.leftToggleActive;
	      var fetchState = _props.fetchState;

	      console.log('left=' + leftToggleActive);
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_leftNavigation2.default, { index: leftToggleActive, toggle: function toggle(index) {
	            console.log(index);dispatch((0, _actions.leftToggleChange)(index));
	          } }),
	        _react2.default.createElement(
	          'button',
	          { onClick: function onClick(e) {
	              console.log(e.target.tagName);dispatch((0, _actions.fetchPost)('/home/json'));
	            } },
	          ' click '
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          fetchState.status
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          JSON.stringify(fetchState)
	        ),
	        _react2.default.createElement(
	          'a',
	          { href: '/' },
	          'to home'
	        )
	      );
	    }
	  }]);

	  return Page;
	}(_react.Component);

	exports.default = Page;


	function select(state) {
	  return {
	    leftToggleActive: state.leftToggleActive,
	    fetchState: state.fetchState
	  };
	}

	exports.default = (0, _reactRedux.connect)(select)(Page);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Li = __webpack_require__(14);

	var _Li2 = _interopRequireDefault(_Li);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LeftNavigation = function (_Component) {
	    _inherits(LeftNavigation, _Component);

	    function LeftNavigation(props) {
	        _classCallCheck(this, LeftNavigation);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(LeftNavigation).call(this, props));
	    }

	    _createClass(LeftNavigation, [{
	        key: 'render',
	        value: function render() {
	            var propIndex = this.props.index;
	            var arry = ['首页', 'html', 'JavaScript', 'css', 'jquery', 'react', 'node', 'webpack', '黑魔法'];
	            var that = this;
	            var items = arry.map(function (item, index) {
	                if (index == propIndex) {
	                    return _react2.default.createElement(
	                        _Li2.default,
	                        { key: index, index: index, onClick: that.props.toggle },
	                        'active=' + item
	                    );
	                } else {
	                    return _react2.default.createElement(
	                        _Li2.default,
	                        { key: index, index: index, onClick: that.props.toggle },
	                        item
	                    );
	                }
	            });
	            return _react2.default.createElement(
	                'div',
	                { className: 'left-navbar' },
	                items
	            );
	        }
	    }]);

	    return LeftNavigation;
	}(_react.Component);

	exports.default = LeftNavigation;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Li = function (_Component) {
	    _inherits(Li, _Component);

	    function Li(props) {
	        _classCallCheck(this, Li);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Li).call(this, props));
	    }

	    _createClass(Li, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'nav-item', onClick: this.click.bind(this) },
	                this.props.children
	            );
	        }
	    }, {
	        key: 'click',
	        value: function click() {
	            var _props = this.props;
	            var index = _props.index;
	            var onClick = _props.onClick;

	            onClick(index);
	        }
	    }]);

	    return Li;
	}(_react.Component);

	exports.default = Li;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_Component) {
	    _inherits(Home, _Component);

	    function Home(props) {
	        _classCallCheck(this, Home);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));
	    }

	    _createClass(Home, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    'Home'
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/home' },
	                    'home'
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/article' },
	                    'article'
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/page' },
	                    'page'
	                )
	            );
	        }
	    }]);

	    return Home;
	}(_react.Component);

	exports.default = Home;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Article = function (_Component) {
	    _inherits(Article, _Component);

	    function Article(props) {
	        _classCallCheck(this, Article);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Article).call(this, props));
	    }

	    _createClass(Article, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                'Article'
	            );
	        }
	    }]);

	    return Article;
	}(_react.Component);

	exports.default = Article;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var express = __webpack_require__(17);

	var dataRouter = express.Router();
	dataRouter.get('/', function (req, res, next) {
	    res.json({
	        name: 'yujiabin',
	        age: '23'
	    });
	});

	dataRouter.post('/', function (req, res, next) {
	    res.json({
	        name: 'yujiabin',
	        age: '23'
	    });
	});

	module.exports = dataRouter;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var fs = __webpack_require__(21);
	var data = __webpack_require__(19);
	var path = __webpack_require__(18);

	function ControlCenter() {
	    this.array = [];
	}
	var standard = /^[a-zA-z]+(\.js)$/;
	ControlCenter.prototype = {
	    getAll: function getAll() {
	        this.getdir(__dirname);
	    },
	    getdir: function getdir(filePath) {
	        var that = this;
	        fs.readdir(filePath, function (err, files) {
	            if (err) {
	                console.error(err);
	            } else {
	                files.forEach(function (file) {
	                    var newPath = path.join(filePath, file);
	                    fs.stat(newPath, function (err, stats) {
	                        if (err) {
	                            return console.error(err);
	                        }
	                        if (stats.isDirectory()) {
	                            that.getdir(newPath);
	                        } else {
	                            if (standard.test(file)) {
	                                that.array.push(file);
	                            }
	                        }
	                    });
	                });
	            }
	        });
	    }
	};
	var controlCenter = new ControlCenter();
	controlCenter.getAll();
	controlCenter.array.forEach(function (val) {
	    console.log(val);
	});
	console.log('controlcenter getall');
	module.exports = {};
	/* WEBPACK VAR INJECTION */}.call(exports, "control"))

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("debug");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ }
/******/ ]);