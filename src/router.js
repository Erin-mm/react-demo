
import App from './App'
import Pages from './frame/PageLayout'
import Components from './frame/CompLayout'
import Header from './components/Header'
import Toast from './components/Toast'
import Message from './components/Message'
import Switch from './components/Switch'

export default [
  {
    path: '/',
    component: App,
    key: 'app',
    routes: [
      {
        path: '/page/:id',
        component: Pages,
        key: 'pages',
      },
      {
        path: '/components',
        component: Components,
        key: 'components',
        routes: [
          {
            path: '/components/toast',
            component: Toast,
            key: 'toast',
          },
          {
            path: '/components/message',
            component: Message,
            key: 'message',
          },
          {
            path: '/components/switch',
            component: Switch,
            key: 'switch',
          },
          {
            path: '/',
            component: Header,
            key: 'header',
          }
        ]
      },
      {
        path: '/',
        component: Components,
        key: 'components'
      }
    ]
  }
]