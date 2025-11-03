
interface ModalProps {
    isOpen:boolean,
    onClose:()=>void,
    children:React.ReactNode,
    customClass:string,
}


const Modal = ({ isOpen, onClose, children, customClass }:ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Ajout de "max-h-[80vh]" pour limiter la hauteur et "overflow-y-auto" pour pouvoir défiler le contenu */}
      <div className={`bg-white rounded-lg p-8 shadow-lg relative ${customClass ? customClass : 'w-full max-w-sm'} max-h-[90vh] overflow-y-auto`}>
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &#10005;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal