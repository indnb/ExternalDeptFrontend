export const PopupContainer = ({ children, closeModal }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-800 p-6 rounded-lg relative">
                <button className="absolute top-2 right-2 text-black" onClick={closeModal}>×</button>
                {children}
            </div>
        </div>
    );
};
