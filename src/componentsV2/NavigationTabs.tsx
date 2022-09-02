// @ts-nocheck
import React from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'

import { profileTabs } from '@constants/my-profile'

export default React.memo(function NavigationTabs ({ className = '', activeTab }) {
	return (
		<StyledWrapper className={className}>
			{profileTabs.map(({ id, href, label }) => {
				return (
					<li
						key={id}
						className={`item ${id === activeTab ? 'active' : ''}`}
					>
						<NextLink
							href={href}
							scroll={false}
						>
							{label}
						</NextLink>
					</li>
				)
			})}
		</StyledWrapper>
	)
})

const StyledWrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  list-style-type: none;
  @media only screen and (max-width: 480px) {
    margin: 0 0 30px;
    flex-direction: column;
    border: none
  }
  .item {
    padding: 0 0 0 6.45%;
    @media only screen and (max-width: 480px) {
      padding: 0;
    }
    a {
      position: relative;
      display: block;
      padding: 10px 0;
      border: none;
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
      color: ${({ theme }) => theme.text.white};
      text-decoration: none;
      z-index: 2;
      @media only screen and (max-width: 480px) {
        padding: 20px 20px;
        border-bottom: 1px solid transparent;
        border-bottom-color: rgba(255, 255, 255, 0.1);
      }
      :not(:first-child) {
        margin-top: 20px;
      }
      :before {
        content: '';
        position: absolute;
        bottom: -1px;
        height: 2px;
        border-radius: 2px 2px 0 0;
        left: -5px;
        right: -5px;
        @media only screen and (max-width: 480px) {
          left: 20px;
          right: 20px;
        }
      }
    }
  }
  .item.active {
    a {
      color: ${({ theme }) => theme.text.secondary};
      &:before {
        background: ${({ theme }) => theme.text.secondary};
      }
    }
  }
`
