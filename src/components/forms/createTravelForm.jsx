import React from "react";

export default function CreateTravelForm({ formData, setFormData, formErrors, isLoading }) {
  return (
    <form className="space-y-3" autoComplete="off" >
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-[6px]">
          <label htmlFor="from" className="text-sm font-dmSansMedium block">
            Ville de départ*
          </label>
          <input
            onChange={e => setFormData({ ...formData, from: e.target.value })}
            name="from"
            type="text"
            id="from"
            value={formData.from}
            className="px-3 py-[13px] border border-solid border-greyScale50 rounded-[10px] bg-greyScale0 focus:outline-none block w-full"
            required
            disabled={isLoading}
          />
          {formErrors.from && <span className="text-red-500 text-xs">{formErrors.from}</span>}
        </div>
        <div className="space-y-[6px]">
          <label htmlFor="to" className="text-sm font-dmSansMedium block">
            Ville d'arrivée*
          </label>
          <input
            onChange={e => setFormData({ ...formData, to: e.target.value })}
            name="to"
            type="text"
            id="to"
            value={formData.to}
            className="px-3 py-[13px] border border-solid border-greyScale50 rounded-[10px] bg-greyScale0 focus:outline-none block w-full"
            required
            disabled={isLoading}
          />
          {formErrors.to && <span className="text-red-500 text-xs">{formErrors.to}</span>}
        </div>
      </div>
      <div className="space-y-[6px]">
        <label htmlFor="weightAvailable" className="text-sm font-dmSansMedium block">
          Poids disponible*
        </label>
        <input
          onChange={e => setFormData({ ...formData, weightAvailable: Number(e.target.value) })}
          name="weightAvailable"
          type="number"
          id="weightAvailable"
          value={formData.weightAvailable}
          className="px-3 py-[13px] border border-solid border-greyScale50 rounded-[10px] bg-greyScale0 focus:outline-none block w-full"
          required
          min={1}
          disabled={isLoading}
        />
        {formErrors.weightAvailable && <span className="text-red-500 text-xs">{formErrors.weightAvailable}</span>}
      </div>
      <div className="space-y-[6px]">
        <label htmlFor="pricePerKg" className="text-sm font-dmSansMedium block">
          Prix du colis (en $)*
        </label>
        <input
          onChange={e => setFormData({ ...formData, pricePerKg: Number(e.target.value) })}
          name="pricePerKg"
          type="number"
          id="pricePerKg"
          value={formData.pricePerKg}
          className="px-3 py-[13px] border border-solid border-greyScale50 rounded-[10px] bg-greyScale0 focus:outline-none block w-full"
          required
          min={1}
          disabled={isLoading}
        />
        {formErrors.pricePerKg && <span className="text-red-500 text-xs">{formErrors.pricePerKg}</span>}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-[6px]">
          <label htmlFor="departureDate" className="text-sm font-dmSansMedium block">
            Date de départ*
          </label>
          <input
            onChange={e => setFormData({ ...formData, departureDate: e.target.value })}
            name="departureDate"
            type="date"
            id="departureDate"
            value={formData.departureDate}
            className="px-3 py-[13px] border border-solid border-greyScale50 rounded-[10px] bg-greyScale0 focus:outline-none block w-full"
            required
            disabled={isLoading}
          />
          {formErrors.departureDate && <span className="text-red-500 text-xs">{formErrors.departureDate}</span>}
        </div>
        <div className="space-y-[6px]">
          <label htmlFor="arrivalDate" className="text-sm font-dmSansMedium block">
            Date d'arrivée*
          </label>
          <input
            onChange={e => setFormData({ ...formData, arrivalDate: e.target.value })}
            name="arrivalDate"
            type="date"
            id="arrivalDate"
            value={formData.arrivalDate}
            className="px-3 py-[13px] border border-solid border-greyScale50 rounded-[10px] bg-greyScale0 focus:outline-none block w-full"
            required
            disabled={isLoading}
          />
          {formErrors.arrivalDate && <span className="text-red-500 text-xs">{formErrors.arrivalDate}</span>}
        </div>
      </div>
    </form>
  );
}