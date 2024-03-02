import twitter from '../assets/images/footer-logo/twitter.svg'
import facebook from '../assets/images/footer-logo/facebook.svg'
import youtube from '../assets/images/footer-logo/youtube.svg'
import bgLogo from '../assets/images/footer-logo/bglogo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#02033b]">
            <div className="max-w-screen-lg py-20 grid grid-cols-1 lg:grid-cols-2 mx-10 lg:mx-auto">
                <div className='text-white text-xs'>
                    <div className="grid grid-cols-12">
                        {/* col-1 */}
                        <div className="col-span-7">
                            <h4 className='font-bold text-2xl'>Scan. Detect. Remove.</h4>
                            <div className='flex gap-10 my-10'>
                                <Link><img src={twitter} alt="" /></Link>
                                <Link><img src={facebook} alt="" /></Link>
                                <Link><img src={youtube} alt="" /></Link>
                            </div>
                            <Link className='mr-7 text-xs underline'>Privacy Policy</Link>
                            <Link className='text-xs underline'>Terms of Service</Link>
                            <p className='text-xs mt-10'>Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
                            <p className='text-xs mt-5'>Designed & developed by <Link className='underline'>Bigger Picture</Link></p>
                        </div>
                        {/* col-2 */}
                        <div className="col-span-5 pl-7 lg:pl-16">
                            <h2 className='text-4xl font-bold mb-7'>Miro.</h2>
                            <hr />
                            <Link className='block text-yellow-500 text-xl font-bold mt-12'>
                                <span className='mr-2'>-</span>
                                iPhone
                            </Link>
                            <Link className='block text-yellow-500 text-xl font-bold mt-5'>
                                <span className='mr-2'>-</span>
                                Android
                            </Link>
                            <Link className='block text-yellow-500 text-xl font-bold mt-5'>
                                <span className='mr-2'>-</span>
                                Help
                            </Link>
                            <Link className='block text-yellow-500 text-xl font-bold mt-5'>
                                <span className='mr-2'>-</span>
                                About
                            </Link>
                            <Link className='block text-yellow-500 text-xl font-bold mt-5'>
                                <span className='mr-2'>-</span>
                                Insights
                            </Link>
                        </div>
                    </div>
                    <p className='mt-16'>Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
                </div>
                {/* col-3 */}
                <div className="pl-0 pt-10 lg:pt-0 lg:pl-14">
                    <div className='bg-[#ffc247] h-64 lg:h-60 rounded-3xl lg:rounded-[40px] relative'>
                        <img className='h-full mx-auto' src={bgLogo} alt="" />
                        {/* bg content */}
                        <div className='absolute top-5 lg:top-10 px-6 lg:px-10 w-[330px] lg:w-full'>
                            <h3 className='text-2xl font-bold'>Sign up to our newsletter</h3>
                            <p className='font-semibold mt-2 mb-3 lg:mb-7'>Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                            <div className="flex flex-col lg:flex-row pr-3 gap-2 lg:gap-0">
                                <input className="h-10 grow input input-bordered rounded-full lg:rounded-l-full lg:rounded-e-none" placeholder="Email address" />
                                <button className="h-10 px-5 rounded-full lg:rounded-r-full lg:rounded-s-none bg-[#02033b] text-white hover:bg-blue-900 active:bg-lime-600">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;