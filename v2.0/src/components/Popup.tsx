type HidePopupFunction = () => void

const Popup = ({hide}: {hide: HidePopupFunction}) => {
  return (
    <div className={`absolute min-w-[180px] top-14 left-4 z-10 border border-shade-six rounded-sm`}>
        <div className="bg-white rounded-lg p-4 shadow-lg">
            <p className="text-shade-three">Click here to switch between roles</p>
            <div className="flex justify-end">
              <button onClick={hide} className="bg-shade-two text-white px-4 py-1 rounded-lg mt-4 text-sm">Close</button>
            </div>
        </div>
      <div className="absolute w-3 h-3 bg-white transform rotate-45 -translate-x-1/2 -top-2 left-[50%] border-t border-l border-shade-six" />
    </div>
  );
};

export default Popup;