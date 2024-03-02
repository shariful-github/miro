import brainstorm from '../assets/images/brainstorm.jpg'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import design from '../assets/images/design.jpg'
import { TiTick } from "react-icons/ti";
import img1 from '../assets/images/built-for-all/1.png'
import img2 from '../assets/images/built-for-all/2.png'
import img3 from '../assets/images/built-for-all/3.png'
import img4 from '../assets/images/built-for-all/4.png'


const BuiltForAll = () => {
    return (
        <section className='my-20'>
            <div>
                <h1 className="text-3xl lg:text-5xl font-bold text-[#050038]">Built for all kinds of teams</h1>
                <div className='mt-10'>
                    <button className="btn my-1 lg:my-auto rounded-3xl px-4 mr-3">UX & Design</button>
                    <button className="btn my-1 lg:my-auto bg-white rounded-3xl px-4 mr-3">Marketing</button>
                    <button className="btn my-1 lg:my-auto bg-white rounded-3xl px-4 mr-3">Product Management</button>
                    <button className="btn my-1 lg:my-auto bg-white rounded-3xl px-4 mr-3">Engineering</button>
                    <button className="btn my-1 lg:my-auto bg-white rounded-3xl px-4 mr-3">Consultants</button>
                    <button className="btn my-1 lg:my-auto bg-white rounded-3xl px-4 mr-3">Agile Coaches</button>
                    <button className="btn my-1 lg:my-auto bg-white rounded-3xl px-4 mr-3">Sales</button>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 mt-7'>
                    <div className='lg:col-span-4 pt-5'>
                        <div className='mt-10 flex items-center gap-5'>
                            <div>
                                <TiTick />
                            </div>
                            <span className='text-[#696688] text-lg'>Build low-fi wireframes</span>
                        </div>
                        <div className='my-4 flex items-center gap-5'>
                            <div>
                                <TiTick />
                            </div>
                            <span className='text-[#696688] text-lg'>Involve stakeholders in the design process</span>
                        </div>
                        <div className='my-4 flex items-center gap-5'>
                            <div>
                                <TiTick />
                            </div>
                            <span className='text-[#696688] text-lg'>Run engaging design workshops</span>
                        </div>
                        <Link className="text-[#4262ff] text-lg flex items-center mt-7 gap-2">
                            <span className="underline">Learn more</span>
                            <GoArrowRight />
                        </Link>
                        <p className='text-[#696688] text-lg mt-16'>Integrate your favorite tools</p>
                        <div className='flex gap-9 mt-5'>
                            <Link>
                                <img src={img1} alt="" />
                            </Link>
                            <Link>
                                <img src={img2} alt="" />
                            </Link>
                            <Link>
                                <img src={img3} alt="" />
                            </Link>
                            <Link>
                                <img src={img4} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className='lg:col-span-8'>
                        <img className='mx-auto' src={design} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuiltForAll;