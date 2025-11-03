import { Heritage } from "@/lib/assets/definitions"
import { handleHeritageUpdate } from "@/lib/service/heritageService"
import { ChangeEvent, useActionState, useEffect, useState } from "react"

interface EditHeritageFormModalProps
{
    showModalMethod:()=>void
    editableObject:Heritage
    nameObject:string,
    reload:()=>void
}

export default function EditHeritageFormModal({showModalMethod, editableObject, nameObject,reload}:EditHeritageFormModalProps)
{
    const [isVisible, setIsVisible] = useState(false)

    const [heritageName, setHeritageName] = useState(editableObject.heritageName)
    const [location, setLocation] = useState(editableObject.location)
    const [description, setDescription] = useState(editableObject.description)
    const [features, setFeatures] = useState(editableObject.features)
    const [currentValue, setCurrentValue] = useState(editableObject.currentValue)
    
    const [state,formAction,isPending] = useActionState(handleHeritageUpdate, null)

    useEffect(() => {
        // Déclenche l'animation après le montage
        setTimeout(() => setIsVisible(true), 10)
    }, [])

    const handleClose = () => {
        setIsVisible(false)
        setTimeout(showModalMethod, 200) // Attend la fin de l'animation
        reload()
    }

    return(
        <>
            {/* Overlay */}
            <div 
                className={`fixed inset-0 bg-[rgba(0,0,0,0.16)] transition-opacity duration-200 ease-[ease] ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={handleClose}
            ></div>

            {/* Modale */}
            <div 
                id="heritageModal" 
                className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[680px] w-[calc(100%-32px)] border border-neutral-200 shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-5 rounded-xl border-solid bg-white transition-all duration-200 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                role="dialog" 
                aria-modal="true" 
                aria-labelledby="modalTitle" 
                aria-describedby="modalDesc"
            >
                <div className="flex items-center justify-between gap-3">
                    <h2 id="modalTitle" className="text-xl font-semibold">Modifier Patrimoine</h2>
                    <button 
                        id="closeModalBtn" 
                        className="text-2xl leading-none cursor-pointer text-[#666666] bg-transparent border-none hover:text-[#111111] focus-visible:rounded-md focus-visible:outline-[3px_solid_#1a73e8]" 
                        aria-label="Close modal"
                        onClick={handleClose}
                    >
                        &times;
                    </button>
                </div>
                <p id="modalDesc" className="text-[#666] mt-1.5 mb-3.5 mx-0">modifiez votre patrimoine.</p>
                
                <form id="heritageForm" action={formAction}>
                    <div className="mb-3.5">
                        <label className="block font-semibold mb-1.5" htmlFor="heritageName">Nom patrimoine</label>
                        <input 
                            type="text" 
                            id="heritageName" 
                            name="heritageName" 
                            value={heritageName}
                            onChange={(e:ChangeEvent<HTMLInputElement>) =>{setHeritageName(e.target.value)}}
                            required 
                            maxLength={120} 
                            className="w-full border border-[#666] text-[#111] px-3 py-2.5 rounded-lg border-solid font-[inherit] bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <span className="block min-h-[18px] text-xs text-[#b00020] mt-1" data-error-for="heritageName"></span>
                    </div>

                    <div className="mb-3.5">
                        <label className="block font-semibold mb-1.5" htmlFor="location">Localisation</label>
                        <input 
                            type="text" 
                            id="location" 
                            name="location" 
                            value={location}
                            onChange={(e:ChangeEvent<HTMLInputElement>) =>{setLocation(e.target.value)}}
                            required 
                            maxLength={160} 
                            className="w-full border border-[#666] text-[#111] px-3 py-2.5 rounded-lg border-solid font-[inherit] bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <span className="block min-h-[18px] text-xs text-[#b00020] mt-1" data-error-for="location"></span>
                    </div>

                    <div className="mb-3.5">
                        <label className="block font-semibold mb-1.5" htmlFor="description">Description</label>
                        <textarea 
                            id="description" 
                            name="description" 
                            rows={4} 
                            required
                            value={description}
                            onChange={(e:ChangeEvent<HTMLTextAreaElement>) =>{setDescription(e.target.value)}} 
                            maxLength={1000}
                            className="w-full border border-[#666] text-[#111] px-3 py-2.5 rounded-lg border-solid font-[inherit] bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        ></textarea>
                        <span className="block min-h-[18px] text-xs text-[#b00020] mt-1" data-error-for="description"></span>
                    </div>

                    <div className="mb-3.5">
                        <label className="block font-semibold mb-1.5" htmlFor="features">Caracteristiques</label>
                        <textarea 
                            id="features" 
                            name="features" 
                            value={features}
                            onChange={(e:ChangeEvent<HTMLTextAreaElement>) =>{setFeatures(e.target.value)}}
                            rows={3} 
                            maxLength={800} 
                            placeholder="Key characteristics, materials, era, etc."
                            className="w-full border border-[#666] text-[#111] px-3 py-2.5 rounded-lg border-solid font-[inherit] bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        ></textarea>
                        <span className="block min-h-[18px] text-xs text-[#b00020] mt-1" data-error-for="features"></span>
                    </div>
                    <div>
                        <input type="hidden" value={nameObject} name="oldHeritageName"/>
                    </div>

                    <div className="mb-3.5">
                        <label className="block font-semibold mb-1.5" htmlFor="currentValue">Valeur Actuelle (DHR)</label>
                        <input 
                            type="number" 
                            id="currentValue" 
                            name="currentValue"
                            value={currentValue}
                            onChange={(e:ChangeEvent<HTMLInputElement>) =>{setCurrentValue(e.target.value)}} 
                            min={0} 
                            step="0.01" 
                            placeholder="0.00" 
                            className="w-full border border-[#666] text-[#111] px-3 py-2.5 rounded-lg border-solid font-[inherit] bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <span className="block min-h-[18px] text-xs text-[#b00020] mt-1" data-error-for="currentValue"></span>
                    </div>

                    <div className="flex gap-3 justify-end mt-6">
                        <button 
                            type="button" 
                            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors" 
                            onClick={handleClose}
                        >
                            Annuler
                        </button>
                        <button 
                            type="submit" 
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            {isPending ? 'Enregistrement...' : 'Enregistrer les modifications'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

