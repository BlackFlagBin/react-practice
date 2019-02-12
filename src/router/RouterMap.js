import React, {Component} from "react"
import {Route, Router, IndexRoute} from "react-router"
import App from "../containers/App"
import Home from "../containers/home/Home"
import City from "../containers/city/City"
import User from "../containers/user/User"
import Search from "../containers/search/Search"
import Detail from "../containers/detail/Detail"
import NotFond from "../containers/NotFond"

class RouterMap extends Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="/city" component={City}/>
                    <Route path="/user" component={User}/>
                    <Route path="/search/:type(/:keyword)" component={Search}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="*" component={NotFond}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap