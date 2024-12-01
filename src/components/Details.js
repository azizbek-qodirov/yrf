import { Award, Calendar, Coffee, MapPin, Users } from 'lucide-react';
import React from 'react';

const DetailCard = ({ icon: Icon, title, children }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 text-blue-600 mr-3" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="text-gray-600">
      {children}
    </div>
  </div>
);

const Details = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Competition Details</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DetailCard icon={Users} title="Who Can Participate">
            <p>Open to students from Grades 7 to 11. Join us in this exciting opportunity to showcase your research skills!</p>
          </DetailCard>
          
          <DetailCard icon={Calendar} title="Important Dates">
            <ul className="space-y-2">
              <li>Registration Deadline: December 10</li>
              <li>Research Period: 7 days</li>
              <li>Final Presentation: December 18</li>
            </ul>
          </DetailCard>
          
          <DetailCard icon={MapPin} title="Location">
            <p>The competition will be held at School No. 5. All participants will have access to necessary facilities.</p>
          </DetailCard>
          
          <DetailCard icon={Award} title="Awards">
            <ul className="space-y-2">
              <li>🥇 1st Place: 500,000 UZS + Certificate</li>
              <li>🥈 2nd Place: 300,000 UZS + Certificate</li>
              <li>🥉 3rd Place: 200,000 UZS + Certificate</li>
            </ul>
          </DetailCard>
          
          <DetailCard icon={Coffee} title="Networking">
            <p>Enjoy coffee breaks and networking sessions with business professionals. Build connections while sharing ideas!</p>
          </DetailCard>
        </div>
      </div>
    </div>
  );
};

export default Details;