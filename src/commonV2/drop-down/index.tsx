// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

import useOutsideClick from '@hooks/useOutsideClick'

import SelectLabel from './SelectLabel'
import OptionsList from './OptionsList'

export default function DropDown ({
  className = '', options = [], value, changeHandler
}) {
  const ref = React.useRef(null)
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleOptions = React.useCallback(() => setIsOpen((current) => !current), [setIsOpen])
  const closeOptions = React.useCallback(() => setIsOpen((current) => !current), [setIsOpen])

  useOutsideClick(ref, () => {
    if (isOpen) {
      closeOptions()
    }
  })

  const selectedOption = React.useMemo(() => {
    return options.find((option) => option.value === value) || options[0]
  }, [options, value])

  return (
    <StyledWrapper
      ref={ref}
      className={className}
    >
      <SelectLabel
        isOpen={isOpen}
        toggleOptions={toggleOptions}
        selectedOption={selectedOption}
      />
      <OptionsList
        isOpen={isOpen}
        options={options}
        selectedOption={selectedOption}
        changeHandler={changeHandler}
        closeOptions={closeOptions}
      />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: relative;
  display: inline-flex;
`
