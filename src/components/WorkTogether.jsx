import { Link } from "react-router-dom";
import hybridwork from '../assets/images/hybridwork.jpg'
import { GoArrowRight } from "react-icons/go";

const WorkTogether = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 mb-20">
            <div className="flex flex-col items-start justify-center p-0 lg:pr-16">
                <h1 className="text-3xl lg:text-5xl font-bold text-[#050038]">Work together, wherever you work</h1>
                <p className="text-[#696688] text-lg mt-7 mb-8">In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                <Link className="text-[#4262ff] text-lg flex items-center gap-2">
                    <span className="underline">Learn more</span>
                    <GoArrowRight />
                </Link>
            </div>
            <div>
                <img src={hybridwork} alt="" />
            </div>
        </section>
    );
};

export default WorkTogether;