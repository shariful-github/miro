import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import tools from '../assets/images/tools.jpg'

const ConnectTools = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 mb-20">
            <div className="order-2 lg:order-1">
                <img src={tools} alt="" />
            </div>
            <div className="flex flex-col items-start justify-center pl-0 lg:pl-16 order-1 lg:order-2">
                <h1 className="text-3xl lg:text-5xl font-bold text-[#050038]">Connect your tools, close your tabs</h1>
                <p className="text-[#696688] text-lg mt-7 mb-8">Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
                <Link className="text-[#4262ff] text-lg flex items-center gap-2">
                    <span className="underline">Learn more</span>
                    <GoArrowRight />
                </Link>
            </div>
        </section>
    );
};

export default ConnectTools;