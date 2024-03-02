import ButtonArrow from "./ButtonArrow";
import img from '../assets/images/flowchart.png'
import { Rating, ThinRoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import icon from '../assets/images/getapp.svg';

const Banner = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 mt-14">
            <div className="lg:col-span-5 flex flex-col justify-center">
                <h1 className="text-3xl text-center lg:text-left lg:text-5xl font-bold text-[#050038]">Take ideas from better to best</h1>
                <p className="text-[#4b4770] mt-4 mb-6">Miro is your team's visual platform to connect, collaborate, and create — together.</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full rounded-3xl mb-3" />
                <ButtonArrow
                    title='Sign up free'
                    type='filled'
                ></ButtonArrow>
                <p className="text-[#9b99af] text-sm mt-1">Collaborate with your team within minutes</p>
                {/* rating */}
                <div className="flex justify-between items-center w-5/6 py-3 px-6 bg-[#f5f5f7] rounded-xl mt-8">
                    <div>
                        <Rating
                            style={{ maxWidth: 90 }}
                            value={4.5}
                            readOnly
                            itemStyles={{
                                itemShapes: ThinRoundedStar,
                                activeFillColor: '#ff9d48',
                                inactiveFillColor: '#fad7a7'
                            }}
                        />
                        <p className="text-[#050038] text-xs">Based on 5149+ reviews:</p>
                    </div>
                    <div>
                        <img className="inline mr-3" src={icon} alt="" />
                        <span className="font-bold text-sm">GetApp</span>
                    </div>
                    <span className="font-bold text-sm">Capterra</span>
                </div>
            </div>
            <div className="lg:col-span-7">
                <img src={img} alt="" />
            </div>
        </section>
    );
};

export default Banner;