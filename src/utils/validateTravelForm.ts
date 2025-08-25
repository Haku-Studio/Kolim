interface ErrorProps {
  from: string;
  to: string;
  departureDate: string;
  arrivalDate: string;
  weightAvailable: string;
  pricePerKg: string;
};

export function validateTravelForm(formData: any): ErrorProps {
  const errors: ErrorProps = {
    from: "",
    to: "",
    departureDate: "",
    arrivalDate: "",
    weightAvailable: "",
    pricePerKg: "",
  };
  if (!formData.from.trim()) errors.from = "Ville de départ requise";
  if (!formData.to.trim()) errors.to = "Ville d'arrivée requise";
  if (!formData.departureDate) errors.departureDate = "Date de départ requise";
  if (!formData.arrivalDate) errors.arrivalDate = "Date d'arrivée requise";
  if (formData.weightAvailable <= 0)
    errors.weightAvailable = "Poids disponible > 0";
  if (formData.pricePerKg <= 0) errors.pricePerKg = "Prix du kilo > 0";
  if (
    formData.departureDate &&
    formData.arrivalDate &&
    new Date(formData.arrivalDate) < new Date(formData.departureDate)
  ) {
    errors.arrivalDate = "La date d'arrivée doit être après la date de départ";
  }
  return errors;
}