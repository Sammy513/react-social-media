
import {Switch, Route} from 'react-router-dom'

import {UserList} from '../pages/User/index'
import {Profile} from '../pages/Profile/index'

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={UserList}/>
            <Route path="/profile/:profile+" component={Profile}/>
        </Switch>
    )
}

export default Routes