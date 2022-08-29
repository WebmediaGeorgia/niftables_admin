// @ts-nocheck
import { AppProps } from 'next/app'
import { FC, useEffect } from 'react'
import { ThemeProvider } from "styled-components"

import 'src/injector/injectAll'
import { wrapper } from 'src/storage/configureStore'

import theme from 'src/styled-styles/theme'
import GlobalStyles from 'src/styled-styles/global-styles'

import { useNoInitialEffect } from '@hooks/useNoInitialEffect'
import { useRouter } from 'next/router'
import { useTypedSelector } from '@hooks/useNewTypedSelector'
import {
  DEFAULT_NOTIFICATION_LIMIT,
  // getQueryKeys,
} from '@utils/pagination'
import { useDispatch } from 'react-redux'
import { isLoggedIn } from '@utils/token'
import { userInfoRequest } from '@entities/user/redux/actions'
import { toast, ToastContainer } from 'react-toastify'

import '@styles/globalStyles.scss'

// import '@styles/colors/default.scss'
import '@styles/colors/jungle.scss'

import { parseJwt } from '@utils/jwt'

import classNames from 'classnames'
import { logOut, logOutFrom2FA } from '@entities/auth/redux/actions'
import { resetAuthState } from '@entities/auth/redux/slice'
import { resetUserState } from '@entities/user/redux/slice'
import { getUserNotificationsRequest } from '@entities/notification/redux/actions'
import { getNavigationConfigRequest } from '@entities/configuration/redux/actions'
import useInterval from '@hooks/useInterval'
import GlobalLoader from '@componentsV2/GlobalLoader'
import GlobalModal from '@componentsV2/global-modal'
import GlobalPreview from '@componentsV2/GlobalPreview'
import { isFewSecondsAgo } from '@utils/date-utils'

const FORCE_LOGOUT_ROUTES = ['/email-change-confirmation']

const WHITE_LABEL_ID = 1

declare global {
  interface Window {
    ethereum: any
  }
  interface Navigator {
    brave: {
      isBrave(): boolean
    }
  }
  interface Global {
    document: Document
    window: Window
    navigator: Navigator
  }
}

export const BasicLayout: FC = ({ children }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { user, error } = useTypedSelector((state) => state.user)
  const { token } = useTypedSelector((state) => state.auth)
  const { notificationList, isUnreadNotification } = useTypedSelector(
    (state) => state.notification
  )

  useEffect(() => {
    if (FORCE_LOGOUT_ROUTES.includes(router.route)) {
      // no need to get user info if we will do force logout
      return
    }
    if (isLoggedIn() && !user && !error) {
      dispatch(userInfoRequest({}))
    }
  }, [user, error])

  useEffect(() => {
    dispatch(getNavigationConfigRequest(WHITE_LABEL_ID))
  }, [])

  useEffect(() => {
    const needToForceLogout = token && !isLoggedIn()
    if (needToForceLogout) {
      dispatch(logOut())
      dispatch(resetAuthState())
      dispatch(resetUserState())
    }
  }, [router.asPath])

  useInterval(() => {
    isLoggedIn() &&
      dispatch(
        getUserNotificationsRequest({
          skip: Number(0),
          take: Number(DEFAULT_NOTIFICATION_LIMIT),
          sort: String('createdAt'),
          order: String('DESC'),
        })
      )
  }, 10000)

  useNoInitialEffect(() => {
    if (token && !router.pathname.includes('signin')) {
      const jwt = parseJwt(token)
      if (user?.settings?.twoFactorAuthEnabled && !jwt.twoFactorPassed) {
        dispatch(logOutFrom2FA())
        dispatch(resetAuthState())
        dispatch(resetUserState())
      }
    }
  }, [token, router.pathname])

  useEffect(() => {
    if (notificationList?.length) {
      const lastNotification = notificationList[0]
      if (isFewSecondsAgo(lastNotification.createdAt)) {
        toast(lastNotification.message)
      }
    }
  }, [notificationList, isUnreadNotification])

  const nameClass = router.pathname == '/signin' ? 'signIn' : ''
  return <div className={classNames('basicLayout', nameClass)}>{children}</div>
}

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
			<ToastContainer />
			<BasicLayout>
				<Component {...pageProps} />
				<GlobalModal />
        <GlobalPreview />
				<GlobalLoader />
			</BasicLayout>
    </ThemeProvider>
  )
}

export default wrapper.withRedux(App)
