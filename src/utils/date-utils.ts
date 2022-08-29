import * as dateFunctions from 'date-fns';

export const DATE_FIELDS_ARRAY = [
  'createdAt',
  'updatedAt',
  'deletedAt',
  'expiredAt',
  'blockedTo',
];

export const parseEntityDates = (entityObj: any): any => {
  const clonedObj = { ...entityObj };
  DATE_FIELDS_ARRAY.forEach((value) => {
    if (!entityObj[value]) return;
    const newDate = new Date(entityObj[value]);
    if (!dateFunctions.isValid(newDate)) return;
    clonedObj[value] = newDate;
  });
  return clonedObj;
};

export const getNowUTCTime = () => {
  const date = new Date();
  return Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
};

export const isDateValid = (value: Date | string) =>
  dateFunctions.isValid(new Date(value));

export const parseValidDate = (value: Date | string): Date | null => {
  if (!isDateValid(value)) {
    console.error('a valid date should be passed');
    return null;
  }
  return new Date(value);
};

export const dateParse = (date: any, format = `dd.MM.yyyy`) =>
  `${dateFunctions.format(new Date(date), format)}`;

export const dateParseToMinutesAgo = (
  date: any,
  format: string = `dd.MM.yyyy hh:mm a`
) => {
  const now = new Date();

  const diff = dateFunctions.differenceInHours(
    now,
    new Date(dateFunctions.parseISO(date))
  );
  const oneDay = 24;

  if (diff <= oneDay) {
    return dateFunctions.formatDistance(new Date(date), now, {
      addSuffix: true,
      includeSeconds: true,
    });
  } else {
    return dateParse(date, format);
  }
};

export const isFewSecondsAgo = (
  date: any,
  milliSecondsForToastify: number = 8000
) => {
  const diff = Date.now() - new Date(date).getTime();
  return diff < milliSecondsForToastify;
};
