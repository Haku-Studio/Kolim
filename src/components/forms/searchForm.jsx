import FormInput from "../base/formInput";

export default function SearchForm(){
    return (
        <form 
            action=""
            className="space-y-3"
        >
            <div className="grid grid-cols-2 gap-3">
                <FormInput 
                    inputLabel = "Ville de depart"
                    inputType = "text"
                    inputId = "depature_town"
                    required = {true}
                />
                <FormInput 
                    inputLabel = "Ville d'arrivée"
                    inputType = "text"
                    inputId = "arrival_town"
                    required = {true}
                /> 
            </div>
            <FormInput 
                inputLabel = "Poids disponible (en kilos)"
                inputType = "text"
                inputId = "availableWeight"
                required = {true}
            /> 
            <div className="grid grid-cols-2 gap-3">
                <FormInput 
                    inputLabel = "Date de depart"
                    inputType = "date"
                    inputId = "depature_date "
                    required = {false}
                />
                <FormInput 
                    inputLabel = "Date d'arrivée"
                    inputType = "date"
                    inputId = "arrival_date"
                    required = {false}
                />
            </div>
        </form>
    )
}