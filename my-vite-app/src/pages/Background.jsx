import SkillsSection from '../components/SkillsSection';
import { GraduationCap, Building2 } from 'lucide-react';

const Background = () => {

  return (
    <section id="background">
      <SkillsSection />
      <div className="p-5">
        {/* Education Section */}
        <section className='self-start'>
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="text-blue-400 size-5" />
              <h2 className="text-xl font-bold text-blue-400 tracking-wide">Education</h2>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Bachelor of Engineering</h3>
              <p className="text-sm text-gray-500 mb-1">University of Jammu</p>
              <p className="text-sm text-blue-300">Aug. 2019 - Feb. 2024</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Background;
