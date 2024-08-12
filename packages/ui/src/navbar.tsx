import NavbarArrow from "./navbarArrow";
import venmoLogo from "./venmoLogo";

export function Navbar(): JSX.Element {
    return (
        <div className="ui-p-6 ui-flex ui-items-center ui-justify-between ui-text-xl">
            <div className="ui-pl-40">
                <img src={venmoLogo()} alt="Venmo" width={150} />
            </div>
            <div className="ui-flex">
                <NavbarButton placeholder="Log in" />
                <button className="ui-ml-6 ui-border-2 ui-rounded-full ui-px-10 ui-py-2 ui-border-black">Merchant login</button>
            </div>
        </div>
    )
}

function NavbarButton({placeholder} : {
    placeholder: string;
}): JSX.Element {
    return <button className="ui-flex ui-items-center ui-justify-between">
    <div>{placeholder}</div>
</button>
}