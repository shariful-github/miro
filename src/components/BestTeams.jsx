import ButtonArrow from "./ButtonArrow";
import vmware from '../assets/images/best-team/vmware.png'
import docusign from '../assets/images/best-team/docusign.png'
import frog from '../assets/images/best-team/frog.png'
import person1 from '../assets/images/best-team/person1.png'
import person2 from '../assets/images/best-team/person2.png'
import person3 from '../assets/images/best-team/person3.png'

const BestTeams = () => {
    return (
        <section className="my-20">
            <h1 className="text-3xl lg:text-5xl font-bold text-[#050038] text-center">Loved by the world's best teams</h1>
            <div className="text-center mt-7">
                <ButtonArrow
                    title={'See all customer stories'}
                    type={'outlined'}
                ></ButtonArrow>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-12">
                <div>
                    <img className="mb-5" src={vmware} alt="" />
                    <p className="text-[#696688] text-lg">“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”</p>
                    <div className="flex gap-5 items-center mt-10">
                        <img src={person1} alt="" />
                        <div>
                            <p className="text-[#696688] text-sm">Roxanne Mustafa</p>
                            <p className="text-[#696688] text-sm">Design Team Lead at VMware</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img className="mb-5" src={docusign} alt="" />
                    <p className="text-[#696688] text-lg">“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”</p>
                    <div className="flex gap-5 items-center absolute bottom-0">
                        <img src={person2} alt="" />
                        <div>
                            <p className="text-[#696688] text-sm">Roxanne Mustafa</p>
                            <p className="text-[#696688] text-sm">Design Team Lead at VMware</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img className="mb-5" src={frog} alt="" />
                    <p className="text-[#696688] text-lg">“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”</p>
                    <div className="flex gap-5 items-center absolute bottom-0">
                        <img src={person3} alt="" />
                        <div>
                            <p className="text-[#696688] text-sm">Roxanne Mustafa</p>
                            <p className="text-[#696688] text-sm">Design Team Lead at VMware</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestTeams;