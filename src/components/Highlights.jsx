import { Link } from "react-router-dom";
import ButtonArrow from "./ButtonArrow";

const Highlights = () => {
    return (
        <section className="my-20">
            <h1 className="text-[#050038] text-center text-3xl lg:text-5xl font-bold relative w-[300px] lg:w-[500px] mx-auto">Collaborate without <br /> constraints
                <span className="bg-yellow-400 font-bold text-xs px-3 py-1 rounded-lg absolute rotate-12 -right-12 -top-10">YOUR IDEA STARTS HERE</span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-12">
                <div>
                    <h3 className="text-2xl font-bold text-[#050038] mb-5">Free forever</h3>
                    <p className="text-[#696688]">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our <Link className="text-[#4262ff] font-semibold">pricing plans</Link> for more features.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-[#050038] mb-5">Easy integrations</h3>
                    <p className="text-[#696688]">Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our <Link className="text-[#4262ff] font-semibold">Marketplace.</Link></p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-[#050038] mb-5">Security first</h3>
                    <p className="text-[#696688]">We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more
                        at our <Link className="text-[#4262ff] font-semibold">Trust Center.</Link></p>
                </div>
            </div>
            <div className="text-center mt-14">
                <ButtonArrow
                    title={'Sign up free'}
                    type={'filled'}
                ></ButtonArrow>
            </div>
        </section>
    );
};

export default Highlights;