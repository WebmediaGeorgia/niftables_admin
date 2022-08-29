export const getPagesCnt = (totalPages: number, limit: number) =>
  Math.ceil(totalPages / limit);

export const getOffset = (page: number, limit: number) => (page - 1) * limit;

export const DEFAULT_NOTIFICATION_LIMIT = 12;
