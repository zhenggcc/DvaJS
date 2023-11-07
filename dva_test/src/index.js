import dva from 'dva';
import './index.css';

// 1. Initialize
// import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory as browserHistory } from 'history';

const app = dva({
  history: browserHistory(),
});
// const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
// 引入model
app.model(require('./models/indexTest').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
