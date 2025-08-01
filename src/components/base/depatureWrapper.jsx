import { useAppStore } from "../../store/useAppStore";

export default function DepatureWrapper() {

    const openDetailsModal = useAppStore(state => state.openDetailsModal)

  const colors = ["#FDF4DC", "#DCFDE6", "#FDDCDC"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div 
        className="flex items-start space-x-[10px] pb-3 border-b border-b-solid border-b-greyScale25"
        onClick={openDetailsModal}
    >
      <div
        className="w-16 h-16 rounded-[8px] flex items-center justify-center"
        style={{ backgroundColor: randomColor }}
      >
        <span className="text-sm text-greyScale800 text-center">DLA</span>
      </div>
      <div className="space-y-1">
        <h3 className="font-dmSansMedium text-sm">Istanbul - Douala</h3>
        <div>
          <p className="text-xs text-greyScale800">
            23 kilos * 2 disponibles - Ethiopian Airlines
          </p>
          <span className="text-xxs text-greyScale300">
            17 août 2024 9h00
          </span>
        </div>
        
      </div>
    </div>
  );
}
