import { handleUserDeletion } from "@/lib/service/UserService"

interface DeleteUserModalProps {

    closeModal:() =>void 
    email:string,
    reloadMethod:()=>void
}

export default function DeleteUserModal({closeModal,email,reloadMethod}:DeleteUserModalProps)
{
    return(
        <div className="fixed flex items-center justify-center p-4 inset-0 bg-[rgba(0,0,0,0.12)]">
            <div className="border border-[#e5e5e5] max-w-[420px] bg-white w-full shadow-[0_10px_30px_rgba(0,0,0,0.12)] rounded-xl border-solid" role="document">
                <header id="modal-title" className="h-6 text-indigo-600 flex justify-center items-center font-bold">Confirmer l&apos;action</header>
                <div className="text-[#666666] px-[18px] py-4" id="modal-body">
                    voulez vous supprimer cet entree ?<br/>(cet action est irreversible)
                </div>
                <div className="flex gap-2 justify-end border-t-[#e5e5e5] px-[18px] py-3 border-t border-solid">
                    <button className="border border-[#e5e5e5] text-[#111111] cursor-pointer px-3 py-2 rounded-lg border-solid hover:-translate-y-px bg-[#f9f9f9] transition-[transform background] duration-[120ms] ease-in-out hover:bg-[#f1f1f1]" id="cancel-btn"
                    onClick={closeModal}>Annuler</button>
                    <button className="border border-[#ffd5d5] text-[#b00020] hover:text-white bg-[#ffe9e9] hover:bg-[#ff1111] cursor-pointer px-3 py-2 rounded-lg border-solid hover:-translate-y-px  transition-[transform background] duration-[120ms] ease-in-out " id="confirm-btn"
                    onClick = {()=>{
                        handleUserDeletion(email)
                        closeModal()
                        reloadMethod()
                    }}>Supprimer</button>
                </div>
            </div>

        </div>
    )
}