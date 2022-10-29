import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

import { globalStyles } from '../shared/globalStyle'

const cache = createCache({ key: 'next' })

const App = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    {globalStyles}
    <Component {...pageProps} />
  </CacheProvider>
)

export default App
