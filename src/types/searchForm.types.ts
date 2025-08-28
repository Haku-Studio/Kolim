export interface SearchFormData {
  from: string;
  to: string;
  weightAvailable: number;
  departureDate: Date;
  arrivalDate: Date;
}

export interface SearchFormErrors {
  from?: string;
  to?: string;
  weightAvailable?: string;
  departureDate?: string;
  arrivalDate?: string;
  general?: string;
}
