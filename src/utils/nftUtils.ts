import { INFT } from '@type/nft';
import { format, isValid } from 'date-fns';

export const getNFTOwnerId = (nft: INFT): number | undefined => {
  if (!nft || !nft.tokens || nft.tokens.length === 0) {
    return;
  }

  return nft?.tokens?.[0].user?.id;
};

export const renderTraitIndex = (index: number): string => {
  if (index < 9) {
    return `0${index + 1}.`;
  }
  return `${index + 1}.`;
};

export const renderDescription = (
  value: string,
  dateFormat = 'dd/MM/yyyy'
): string => {
  const valueArr = value.split('-');
  if (valueArr.length !== 3) {
    return value;
  }
  const date = new Date(+valueArr[0], +valueArr[1] - 1, +valueArr[2]);
  if (!isValid(date)) {
    return value;
  }
  return format(date, dateFormat || 'dd/MM/yyyy');
};

export const handleTraitBooleanValue = (value): string => {
  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }
  return value;
};
