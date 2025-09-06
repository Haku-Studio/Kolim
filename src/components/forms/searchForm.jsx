import FormInput from "../base/formInput";

export default function SearchForm({ searchData, setSearchData, errors }) {

  return (
    <div className="space-y-3">
      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-3">
          <FormInput
            inputLabel="Ville de depart"
            inputType="text"
            inputId="from"
            // value={searchData.departure_town}
            onChange={(e) => { setSearchData({ ...searchData, from: e.target.value }) }}
            error={errors.from}
          />
          <FormInput
            inputLabel="Ville d'arrivée"
            inputType="text"
            inputId="to"
            // value={searchData.arrival_town}
            onChange={(e) => { setSearchData({ ...searchData, to: e.target.value }) }}
            error={errors.to}
          />
        </div>
        <FormInput
          inputLabel="Poids disponible (en kilos)"
          inputType="number"
          inputId="weightAvailable"
        //   value={searchData.weightAvailable}
          onChange={(e) => { setSearchData({ ...searchData, weightAvailable: e.target.value }) }}
          error={errors.weightAvailable}
        />
        <div className="grid grid-cols-2 gap-3">
          <FormInput
            inputLabel="Date de depart"
            inputType="date"
            inputId="departureDate"
            // value={searchData.departureDate}
            onChange={(e) => { setSearchData({ ...searchData, departureDate: e.target.value }) }}
            error={errors.departureDate}
          />
          <FormInput
            inputLabel="Date d'arrivée"
            inputType="date"
            inputId="arrivalDate"
            // value={searchData.arrivalDate}
            onChange={(e) => { setSearchData({ ...searchData, arrivalDate: e.target.value }) }}
            error={errors.arrivalDate}
          />
        </div>
      </form>
      {errors.general && (
        <p className="text-red-500 text-sm mt-2">{errors.general}</p>
      )}
    </div>
  );
}
