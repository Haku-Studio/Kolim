import { useState } from 'react'

export default function Tabs() {
    const [activeTab, setActiveTab] = useState('position') // 'position' ou 'everywhere'

    return (
        <div className="border-y border-y-solid border-greyScale100 grid grid-cols-2">
            <button 
                className={`flex items-center justify-center py-[12px] text-sm ${
                    activeTab === 'position' 
                        ? 'font-dmSansSemibold border-b border-b-solid border-[#6791C8]' 
                        : ''
                }`}
                onClick={() => setActiveTab('position')}
            >
                <span>A partir de ma position</span>
            </button>
            <button 
                className={`flex items-center justify-center py-[12px] text-sm ${
                    activeTab === 'everywhere' 
                        ? 'font-dmSansSemibold border-b border-b-solid border-[#6791C8]' 
                        : ''
                }`}
                onClick={() => setActiveTab('everywhere')}
            >
                <span>Partout</span>
            </button>
        </div>
    )
}