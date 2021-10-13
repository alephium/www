import CMS from 'netlify-cms-app'

import config from './config'

window.CMS_MANUAL_INIT = true
window.CMS_CONFIGURATION = config

CMS.init({ config })
