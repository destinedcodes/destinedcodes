import Image from 'next/image';

import SocialList from '@/components/social-list';

const About = () => {
  return (
    <div id="about" className="flex flex-col lg:flex-row py-24">
      <div className="lg:block lg:w-[50%]">
        <Image
          src={'/images/destiny-saturday.png'}
          alt="Destiny Saturday"
          width={94}
          height={94}
          className="float-left mr-4 rounded-full hidden lg:flex"
        />
        <div className="font-bold text-5xl md:text-7xl lg:text-8xl">
          I build <span className="text-secondary">scalable software</span>
        </div>
      </div>
      <div className="py-8 lg:p-0 lg:pl-20">
        <div className="text-lg/8 md:text-2xl/10">
          A proficient software engineer specializing in DevOps, Full Stack, and
          Web3 development. Open to opportunities and collaboration. Feel free
          to reach out!
        </div>
        {/* Social Links */}
        <SocialList />
      </div>
    </div>
  );
};

export default About;