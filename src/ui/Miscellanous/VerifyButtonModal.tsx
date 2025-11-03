import { Heritage } from "@/lib/assets/definitions"
import { verifyHeritage } from "@/lib/service/heritageService"
import { ChangeEvent, useEffect, useState } from "react"

interface VerifyButtonModal {
    data:Heritage,
    closeModal:()=>void
    reloadMethod: () => void
}

const VerifyButtonModal = ({data,closeModal,reloadMethod}:VerifyButtonModal)=>{

    const [heritageNameChecked,setHeritageNameChecked] = useState(false)
    const [locationChecked,setLocationNameChecked] = useState(false)
    const [descriptionChecked,setDescriptionNameChecked] = useState(false)
    const [featuresChecked,setFeaturesNameChecked] = useState(false)
    const [currentValueChecked,setCurrentValueChecked] = useState(false)

    const [isVisible,setIsVisible] = useState(false)

     useEffect(() => {
            // Déclenche l'animation après le montage
            setTimeout(() => setIsVisible(true), 10)
        }, [])
    
        const handleClose = () => {
            setIsVisible(false)
            setTimeout(closeModal, 200) // Attend la fin de l'animation
        }
    
    const handleConfirm = async () => {
        const verifyResponse =await verifyHeritage(data.heritageName)
        if(verifyResponse.success)
        {
            alert("Patrimoine verifié avec succes")
            handleClose()
            reloadMethod()
        }
        else
        {
            alert(`Erreur lors de la verification: ${verifyResponse.error}`)
        }
    }


    const activationButton = heritageNameChecked && locationChecked && descriptionChecked && featuresChecked && currentValueChecked
    return(
        <>
           <div className={`fixed inset-0 bg-[rgba(0,0,0,0.14)] grid place-items-center p-6 ${isVisible?'opacity-100':'opacity-0'}`}
           onClick ={handleClose}>

           </div>
           <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[520px] rounded-[18px] shadow-[0px_8px_30px_rgba(0,0,00.12)] border border-[#e5e7eb] overflow-hidden border-solid bg-white z-[1000]
           $${isVisible?'opavity-100 scale-100':'opacity-0 scale-95'}`}>
               <div className="flex items-center justify-between border-b-[#e5e7eb] px-[18px] py-4 border-b border-solid">
                   <h2 className="text-lg font-semibold m-0 text-indigo-600">Verification Patrimoines</h2>
                   <button className="appearance-none text-xl leading-none cursor-pointer p-1.5 rounded-lg border-[none] bg-transparent" aria-label="Close modal" title="Close"
                   onClick={handleClose}>X</button>
               </div>
               <div className="flex items-center justify-between border-b-[#e5e7eb] px-[18px] py-4 border-b border-solid">
                    reconnaissez vous ces informations comme etant authentiques ?
               </div>
               <div className="px-[18px] py-4">
                    <ul className="list-none  grid gap-2.5 m-0 p-0" aria-labelledby="modal-title">
                        <li>
                            <input type="checkbox" name="heritageName" id="heritageName" className="mr-4"
                            checked={heritageNameChecked}
                            onChange={(e:ChangeEvent<HTMLInputElement>)=>{setHeritageNameChecked(e.target.checked)}} />
                            <label htmlFor="heritageName"><span className="font-semibold text-indigo-600">nom du patrimoine</span> :{data.heritageName}</label>
                        </li>
                        <li>
                            <input type="checkbox" name="location" id="location" className="mr-4"
                            checked={locationChecked}
                            onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                                setLocationNameChecked(e.target.checked)}}/>
                            <label htmlFor="heritageName"><span className="font-semibold text-indigo-600">localisation</span>: {data.location}</label>
                        </li>
                        <li>
                            <input type="checkbox" name="description" id="description" className="mr-4"
                            checked={descriptionChecked}
                            onChange={(e:ChangeEvent<HTMLInputElement>)=>{setDescriptionNameChecked(e.target.checked)}}/>
                            <label htmlFor="heritageName"><span className="font-semibold text-indigo-600">description</span> : {data.description}</label>
                        </li>
                        <li>
                            <input type="checkbox" name="features" id="features" className="mr-4"
                            checked={featuresChecked}
                            onChange={(e:ChangeEvent<HTMLInputElement>)=>{setFeaturesNameChecked(e.target.checked)}}/>
                            <label htmlFor="heritageName"><span className="font-semibold text-indigo-600">Caracteristiques</span> : {data.features}</label>
                        </li>
                        <li>
                            <input type="checkbox" name="currentValue" id="currentValue" className="mr-4"
                            checked={currentValueChecked}
                            onChange={(e:ChangeEvent<HTMLInputElement>)=>{setCurrentValueChecked(e.target.checked)}}/>
                            <label htmlFor="heritageName"><span className="font-semibold text-indigo-600">Valeur Actuelle</span> : {data.currentValue} Dhr</label>
                        </li>
                    </ul>
               </div>
               <div className="flex justify-end gap-2.5 border-t-[#e2e5eb] px-[18px] py-3.5 border-t border-solid">
                    <button className="appearance-none border border-[#e2e5eb] cursor-pointer font-semibold px-3.5 py-2.5 rounded-[10px] border-solid disabled:opacity-50 disabled:cursor-not-allowed bg-transparent text-indigo-600" data-action="cancel" 
                    onClick={closeModal}>Non</button>
                    
                    <button className="appearance-none border border-[#e2e5eb] text-white cursor-pointer font-semibold px-3.5 py-2.5 rounded-[10px] border-solid disabled:opacity-50 disabled:cursor-not-allowed
                    bg-indigo-600 " data-action="confirm" disabled={!activationButton} onClick={handleConfirm}>Oui</button>
               </div>
           </div>
        </>
    )
}


export default VerifyButtonModal
