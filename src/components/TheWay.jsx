import theWay from '../assets/images/the-way.jpg'
import brainstorm from '../assets/images/brainstorm.jpg'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const TheWay = () => {
    return (
        <section className='my-20'>
            <div>
                <img src={theWay} alt="" />
            </div>
            <div>
                <h1 className="text-3xl lg:text-5xl font-bold text-[#050038]">Built for the way you work</h1>
                <div className='mt-10'>
                    <button className="btn my-1 lg:my-auto rounded-3xl px-4 mr-3">Brainstorming</button>
                    <button className="btn my-1 lg:my-auto bg-white rounded-3xl px-4 mr-3">Diagramming</button>
                    <button className="btn my-1 lg:my-auto bg-white rounded-3xl px-4 mr-3">Meetings & Workshops</button>
                    <button className="btn my-1 lg:my-auto bg-white rounded-3xl px-4 mr-3">Scrum Events</button>
                    <button className="btn my-1 lg:my-auto bg-white rounded-3xl px-4 mr-3">Mapping</button>
                    <button className="btn my-1 lg:my-auto bg-white rounded-3xl px-4 mr-3">Research & Design</button>
                    <button className="btn my-1 lg:my-auto bg-white rounded-3xl px-4 mr-3">Strategic Planning</button>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 mt-7'>
                    <div className='lg:col-span-4 pt-5'>
                        <h5 className='text-xl text-[#050038]'>Brainstorming</h5>
                        <p className='text-[#696688] text-lg my-10'>Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</p>
                        <Link className="text-[#4262ff] text-lg flex items-center gap-2">
                            <span className="underline">Learn more</span>
                            <GoArrowRight />
                        </Link>
                    </div>
                    <div className='lg:col-span-8'>
                        <img className='mx-auto' src={brainstorm} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheWay;