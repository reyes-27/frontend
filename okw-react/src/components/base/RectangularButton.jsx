const RectangularButton = ({text}) => {
    
    return(
        <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-gradient-to-r from-blue-500 to-[#6554b4] px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
        >
            {text}
        </button>
    )
}