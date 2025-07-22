export default function DepatureWrapper(){
    return (
        <div className="flex items-start space-x-[10px] pb-3 border-b border-b-solid border-b-greyScale25">
            <div className="w-16 h-16 bg-[#FDF4DC] rounded-[8px] flex items-center justify-center">
                <span className="text-md text-greyScale800 text-center">DLA</span>
            </div>
            <div className="space-y-1">
                <h3 className="font-dmSansMedium text-md ">Istanbul - Douala</h3>
                <p className="text-sm text-greyScale800">23 kilos * 2 disponibles - Ethipian Airlines</p>
                <span className="text-xs text-greyScale300">17 août 2024 9h00</span>
            </div>
        </div>
    )
}