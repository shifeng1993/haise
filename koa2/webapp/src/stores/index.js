import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const composedCreateStore = compose(
    applyMiddleware(thunk),
    // 只支持 chrome 插件的方式，不引入其它代码
    window.devToolsExtension && window.devToolsExtension()
)(createStore);

function configureStore(initialState = {}) {
    // store => reducers && initialState
    const store = composedCreateStore(reducers, initialState);
    // 以下是热启动
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept(reducers, () => {
            // We need to require for hot reloadign to work properly.
            const nextReducer = reducers;  // eslint-disable-line global-require

            store.replaceReducer(nextReducer);
        });
    }

    return store;
}

export default configureStore;
