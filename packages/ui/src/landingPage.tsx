export function Landing() {
    return <div className="ui-w-10/12 ui-text-xl ui-flex ui-justify-between ui-ml-24 ui-px-20 ui-pt-24 ui-border-none ui-rounded-3xl ui-bg-[#DEEFFF] ui-pb-12">
        <div className="ui-w-10/12 ui-pr-24">
            <div className="ui-font-medium ui-text-7xl ui-mb-8">
                Fast, safe, social payments
            </div>
            <div className="ui-font-light">
                Pay, get paid, grow a business, and more. Join the tens of millions of people on Venmo.
            </div>
            <div className="ui-mt-28">
                <button className="ui-text-sm ui-font-semibold ui-items-center ui-flex ui-justify-between ui-px-6 ui-py-2 ui-rounded-full ui-text-white ui-bg-[#008cff] ui-shadow-xl ui-shadow-[rgba(175,80,220,.7)]">
                    <span className="ui-pr-2"><svg
                        data-test-id="venmoIcon"
                        width="22"
                        height="25"
                        viewBox="0 0 22 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        >
                        <path
                            d="M20.527 0.917969C21.3712 2.30466 21.75 3.73454 21.75 5.54027C21.75 11.2992 16.816 18.7782 12.8115 24.0295H3.66683L0 2.17963L8.00984 1.42188L9.95772 16.9687C11.7679 14.0271 14.0064 9.40482 14.0064 6.25559C14.0064 4.53018 13.7097 3.35718 13.2458 2.39104L20.527 0.917969Z"
                            fill="currentColor"
                        /></svg>
                    </span>
                    Get Venmo
                </button>
            </div>
        </div>
        <div className="ui-w-fit ui-pr-8 -ui-mr-56">
            <img src="https://images.ctfassets.net/gkyt4bl1j2fs/5up9qIIl3KjCbKRNTo4rA0/dc90bd5478ba48d4109c54965c61f95b/home-hero.png?w=1600&h=1230&q=50&fm=png&bg=transparent" alt="" />
        </div>
    </div>
}