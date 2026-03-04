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
              <GraduationCap className="text-brand-blue size-5" />
              <h2 className="text-xl font-bold text-brand-blue tracking-wide">Education</h2>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Bachelor of Engineering</h3>
              <p className="text-sm text-neutral mb-1">University of Jammu</p>
              <p className="text-sm text-brand-blue-strong">Aug. 2019 - Feb. 2024</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Background;
