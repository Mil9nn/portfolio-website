import React from 'react';
import SkillsSection from '../components/SkillsSection';
import { GraduationCap, Building2 } from 'lucide-react';

const Background = () => {

  return (
    <section id="background">
      <SkillsSection />
      <div className="flex flex-col sm:flex-row justify-between p-5">
        {/* Education Section */}
        <section className="mx-auto px-6 md:px-12 mb-16">
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-blue-400 w-6 h-6" />
              <h2 className="text-2xl font-bold text-blue-400 tracking-wide">Education</h2>
            </div>
            <div className="mb-3">
              <h3 className="text-xl font-semibold">Bachelor of Engineering</h3>
              <p className="text-sm text-gray-500 mb-1">University of Jammu</p>
              <p className="text-sm text-blue-300">Aug. 2019 - Feb. 2024</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mx-auto px-6 md:px-12">
          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="text-green-400 w-6 h-6" />
              <h2 className="text-2xl font-bold text-green-400 tracking-wide">Experience</h2>
            </div>
            <div className="mb-3">
              <h3 className="text-xl font-semibold">Web Development Intern</h3>
              <p className="text-sm text-gray-500 mb-1">Prodigy Infotech</p>
              <p className="text-sm text-green-300 mb-3">March 2025 – April 2025</p>
              <ul className="space-y-2 list-disc list-inside text-gray-400">
                <li>Built responsive UIs using React and Tailwind CSS</li>
                <li>Collaborated on real-world projects and agile workflows</li>
                <li>Implemented reusable components and maintained clean codebase</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Background;
