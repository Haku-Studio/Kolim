import { SearchFormData, SearchFormErrors } from "../types/SearchForm.types";

export const validateSearchForm = (
  formData: SearchFormData
): SearchFormErrors => {
  const errors: SearchFormErrors = {};

  // Vérifie qu'au moins un champ est rempli
  const hasAtLeastOneField = Object.values(formData).some(
    (value) => {
       console.log("formData", formData);
      return value && value.toString().trim().length > 0;
    }
  );

  if (!hasAtLeastOneField) {
    errors.general =
      "Veuillez remplir au moins un champ pour effectuer la recherche";
    return errors;
  }

  // Validation des dates si renseignées
  if (formData.departureDate && formData.arrivalDate) {
    const departureDate = new Date(formData.departureDate);
    const arrivalDate = new Date(formData.arrivalDate);

    if (arrivalDate < departureDate) {
      errors.arrivalDate =
        "La date d'arrivée doit être après la date de départ";
    }
  }

  // Validation du poids si renseigné
  if (formData.weightAvailable) {
    const weight = Number(formData.weightAvailable);
    if (isNaN(weight) || weight <= 0) {
      errors.weightAvailable = "Le poids doit être un nombre positif";
    }
  }

  return errors;
};
