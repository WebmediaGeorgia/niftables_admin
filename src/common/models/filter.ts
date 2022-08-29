type NumberOrNull = number | null;
type StringOrNull = string | null;

export interface IFilterState {
  page: number;
  limit: number;
  collectionId: NumberOrNull;
  minPrice: NumberOrNull;
  maxPrice: NumberOrNull;
  rarities: string[];
  traits: StringOrNull;
  fromDate: StringOrNull;
  toDate: StringOrNull;
  utilities: string[];
  mergeable: StringOrNull;
  generative: string[];
  status: string[];
  dropDateFrom: StringOrNull;
  dropDateTo: StringOrNull;
  distributions: string[];
  isResetAction: boolean;
  isLoading: boolean;
  search: StringOrNull;
  sort: StringOrNull;
  order: StringOrNull;
  type?: StringOrNull;
  dropDownValue: StringOrNull;
}
