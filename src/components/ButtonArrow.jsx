import { MdArrowRightAlt } from "react-icons/md";

const ButtonArrow = ({ title, type }) => {

    return (
        <button className={`
            btn  
            rounded-3xl px-5
            ${type === 'filled' ?
                'bg-[#4262ff] hover:bg-blue-700  text-white' : ''
            }
            ${type === 'outlined' ?
                'bg-white hover:bg-blue-700 hover:text-white  text-blue-700 border-blue-700' : ''
            }
        `}>
            {title}
            <MdArrowRightAlt />
        </button>
    );
};

export default ButtonArrow;