function SubscriptionFrom() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <form className="w-full text-center space-y-8" onSubmit={(e) => e.preventDefault()}>
                <p className="text-xl font-semibold">Stay up to date</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <input type="text" placeholder="Enter Your email" className="w-80 h-[3.7rem] px-6 rounded-full" />
                    <button type="submit" className="w-80 md:w-40 h-[3.7rem] text-xl bg-main-purple text-white rounded-full">Subscribe</button>
                </div>
                <p className="text-lg">By subscribing you agree with our Privacy Policy</p>
            </form>
        </div>
    )
}

export default SubscriptionFrom