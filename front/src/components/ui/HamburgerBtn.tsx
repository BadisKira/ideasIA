/**
 * Custom styles
 */
const hamburger = "relative block md:hidden focus:outline-none cursor-pointer w-[24px] h-[24px]  transition-all  duration-200";
const open_hamburger = 'rotate-[90deg]'
const hamburger_lines = "absolute  w-[24px] h-[2px] top-1 left-0  rotate-0 transition duration-300";
const open_hambuger_top = 'rotate-[45deg] translate-x-[1px] translate-y-[10px]'
const open_hambuger_middle = 'hidden ';
const open_hambuger_bottom = 'rotate-[-45deg] translate-x-[1px] translate-y-[10px] '

interface HamburgerProps {
    color:string,
    open:boolean,
    setOpen:(open:boolean)=>void
}

export const HamburgerBtn:React.FC<HamburgerProps> = ({color="black",open=false,setOpen}) => {
    const returnColor = (color: string) => {
        if (color === "black") return "bg-black";
        if (color === "white") return "bg-white";
        return "bg-" + color + "-600";
    }
    return (
        <div className="md:hidden " onClick={() => setOpen(!open)}>
            <div className={`z-40 block focus:outline-none ${hamburger} ${open && open_hamburger} `} id="menu-btn">
                <span className={`${hamburger_lines} ${returnColor(color)} ${open && open_hambuger_top} `}></span>
                <span className={`${hamburger_lines} ${returnColor(color)} translate-y-[7px]   ${open && open_hambuger_middle}`}></span>
                <span className={`${hamburger_lines} ${returnColor(color)}  translate-y-[14px] ${open && open_hambuger_bottom}`}></span>
            </div>
        </div>
    )

}
export default HamburgerBtn;