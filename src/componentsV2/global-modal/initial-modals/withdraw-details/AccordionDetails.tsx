// @ts-nocheck
import React from 'react'
import get from 'lodash/get'

import { useTypedSelector } from '@hooks/useNewTypedSelector'

import Accordion from '@components/shared/Accordion';
import { TableWithoutHeader } from '@shared/Tables/TableWithoutHeader';

import {
  handleTraitBooleanValue,
  renderDescription,
  renderTraitIndex,
} from '@utils/nftUtils';

export default function AccordionDetails () {
	const {
		description, traits, utilityExperience
	} = useTypedSelector(state => get(state, 'modal.data', {}))

	const parsedAccordionDetails = React.useMemo(() => {
		const list = []
		if (description) {
			list.push({
        title: 'Description',
        content: description
      })
		}
		if (traits && Object.keys(traits).length !== 0) {
			const traitsData = Object.entries(traits).map(([key, value], index) => ({
				id: renderTraitIndex(index),
				title: <span className='text-bold'>{key}:</span>,
				desc: renderDescription(handleTraitBooleanValue(value) + ''),
				other: '',
			}));
			list.push({
        title: 'Traits for NFT',
        content: <TableWithoutHeader rowsTable={traitsData} />
      })
		}
		if (utilityExperience) {
      list.push({
        title: 'Utility Experience',
        content: utilityExperience
      });
    }
		return list
	}, [description, traits, utilityExperience])

	if (parsedAccordionDetails.length === 0) return null

	return (
		<div className='g-mt-25'>
			<Accordion
				size='l'
				color='primary'
				data={parsedAccordionDetails}
			/>
		</div>
	)
}
