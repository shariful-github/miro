import walmart from '../assets/images/trusted-organization/walmart.svg'
import cisco from '../assets/images/trusted-organization/cisco.svg'
import volvo from '../assets/images/trusted-organization/volvo.svg'
import deloitte from '../assets/images/trusted-organization/deloitte.svg'
import okta from '../assets/images/trusted-organization/okta.svg'

const TrustedOrganizations = () => {
    return (
        <section className='my-24'>
            <h4 className='text-center text-[#696688] mb-10'>Trusted by 45M+ users</h4>
            <div className='flex justify-evenly border'>
                <div>
                    <img className='w-full' src={walmart} alt="" />
                </div>
                <div>
                    <img className='w-full' src={cisco} alt="" />
                </div>
                <div>
                    <img className='w-full' src={volvo} alt="" />
                </div>
                <div>
                    <img className='w-full' src={deloitte} alt="" />
                </div>
                <div>
                    <img className='w-full' src={okta} alt="" />
                </div>
            </div>
        </section>
    );
};

export default TrustedOrganizations;