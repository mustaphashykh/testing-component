import { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Header() {
    const options = [
        'English',
        'German',
        'French',
        'Danish',
        'Italian',
        'Portuguese',
        'Russian',
        'Spanish',
        'Swedish',
        'Turkish',
    ];
    const [selectedOption, setSelectedOption] = useState(options[0]);
    return (
        <div className="bg-white text-highlighted-text text-base w-full flex items-center justify-between p-2 sm:p-0 sm:py-8 sm:px-10">
            <div className='flex items-center gap-x-3'>
                <div className='w-8 h-10 skew-x-[40deg] flex flex-wrap'>
                    <div className='w-[50%] h-[50%]' />
                    <div className='w-[50%] h-[50%] bg-main-purple' />
                    <div className='w-[50%] h-[50%] bg-main-purple' />
                    <div className='w-[50%] h-[50%]' />
                </div>
                <p className="font-medium text-[1.15rem]">IQTEST.ai</p>
            </div>
            <div className="xl:flex items-center gap-x-20 hidden">
                <ul className="flex items-center gap-x-24">
                    <li className="text-main-purple">Home</li>
                    <li>Start Test</li>
                    <li>Check Certificate</li>
                    <li>Pro Pricing</li>
                </ul>
                <div className='flex items-center gap-x-5'>
                    <Dropdown options={options} onChange={setSelectedOption} value={selectedOption} />
                    <button type="button" className="text-sm bg-main-purple text-white rounded-full px-7 py-3 transition-all duration-500 hover:bg-gray-300">Login</button>
                </div>
            </div>
            <div className='w-8 flex flex-col gap-1.5 cursor-pointer xl:hidden'>
                <div className='bar' />
                <div className='bar' />
                <div className='bar' />
            </div>
        </div>
    )
}

export default Header