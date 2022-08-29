import React from 'react'

import Basic from './Basic'
import Spaces from './Spaces'
import Display from './Display'
import Lines from './Lines'
import Text from './Text'
import Utility from './Utility'

export default React.memo(function GlobalStyles () {
  return (
    <>
      <Basic />
      <Spaces />
      <Display />
      <Lines />
      <Text />
      <Utility />
    </>
  )
})
