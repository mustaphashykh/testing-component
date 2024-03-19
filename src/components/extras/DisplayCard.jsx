import { NavigatorsList } from "../common"
import SubscriptionFrom from "./SubscriptionFrom"

function DisplayCard() {
    return (
        <div className="bg-main-black text-white p-10 md:p-20" style={{ borderRadius: '2.3rem' }}>
            <div className="border-b-[1px] border-highlighted-text flex flex-col xl:flex-row">
                <div className="w-full xl:w-1/2 space-y-12 pb-16 text-center">
                    <div className="w-20 h-20 drop-shadow-md bg-main-purple text-white rounded-full flex items-center justify-center mx-auto xl:mx-0"><i className="fa-regular fa-envelope-open text-2xl"></i></div>
                    <p className="text-4xl xl:text-6xl">Keep up with the latest</p>
                    <p className="text-lg">Join our newslatter to stay up to date on features and releases.</p>
                </div>
                <div className="w-full xl:w-1/2 pb-16">
                    <SubscriptionFrom />
                </div>
            </div>
            <div className="pt-20 px-2 flex flex-col xl:flex-row gap-8 xl:gap-0 justify-between">
                <div className="w-full xl:w-[35%] space-y-5">
                    <div className='flex items-center gap-x-3'>
                        <div className='w-10 h-10 skew-x-[45deg] flex flex-wrap'>
                            <div className='w-[50%] h-[50%]' />
                            <div className='w-[50%] h-[50%] bg-main-purple' />
                            <div className='w-[50%] h-[50%] bg-main-purple' />
                            <div className='w-[50%] h-[50%]' />
                        </div>
                        <p className="font-medium text-3xl">IQTEST.ai</p>
                    </div>
                    <p className="text-highlighted-text text-lg">Test your IQ in a very few easy and simple step not complex.</p>
                </div>
                <div className="flex items-start justify-between xl:justify-normal xl:gap-32">
                    <NavigatorsList title={'IQTEST'} navigators={['Quiz', 'Results', 'Pricing']} />
                    <NavigatorsList title={'Support'} navigators={['Help', "FAQ", "Contact"]} />
                    <NavigatorsList title={'Legal'} navigators={['Privacy Policy', 'Terms of Service', 'Cookies Policy']} />
                </div>
            </div>
        </div>
    )
}

export default DisplayCard