
import { handleHeritageCreation } from "@/lib/service/heritageService"
import { ChangeEvent, useActionState, useState } from "react"

const PropertyRegistrationForm = ()=>{
    
    const [heritageName,setHeritageName] = useState("")
    const [location,setLocation] = useState("")
    const [description,setDescription] = useState("")
    const [currentValue,setCurrentValue] = useState(0)
    const [state,formAction,isPending] = useActionState(handleHeritageCreation, null)
    return(
        <div className="overflow-y-auto max-h-screen">
            <div className={`p-8  w-96`}>
              <h2 className="text-2xl font-bold mb-6">Ajouter Un Patrimoine</h2>
                <form action={formAction}>
                    <div className="mb-4">
                        <label htmlFor="nom" className="block text-gray-700 mb-2">
                        Nom
                        </label>
                            <input
                        id="nom"
                        name="heritageName"
                        type="text"
                        placeholder={"Entrez le nom du patrimoine"}
                        value={heritageName}
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>{setHeritageName(e.target.value)}}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="localisation" className="block text-gray-700 mb-2">
                        Localisation
                        </label>
                            <input
                        id="localisation"
                        name="location"
                        type="text"
                        placeholder={"Localistion du patrimoine"}
                        value={location}
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>{setLocation(e.target.value)}}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 mb-2">
                           Description
                        </label>
                            <input
                        id="description"
                        name="description"
                        type="text"
                        placeholder={"decrivez votre patimoine"}
                        value={description}
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>{setDescription(e.target.value)}}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="features" className="block text-gray-700 mb-2">
                        Caracteristiques
                        </label>
                            <textarea
                        id="features"
                        name="features"
                        placeholder={"quels sont les caractristiques de votre patrimoine !"}
                        value={heritageName}
                        onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>{setHeritageName(e.target.value)}}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="currentValue" className="block text-gray-700 mb-2">
                        Valeur Actuelle
                        </label>
                            <input
                        id="currentValue"
                        name="currentValue"
                        type="number"
                        min={0}
                        value={currentValue}
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>{setCurrentValue(e.target.valueAsNumber)}}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    </div>
                    <button
          type="submit"
          className="w-full px-4 py-3 mt-4 bg-linear-to-r from-green-500 to-teal-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >{isPending ? "Ajout en cours..." : "Ajouter le Patrimoine"}</button>
                </form>
            </div>
        </div>
    )
}

export default PropertyRegistrationForm


