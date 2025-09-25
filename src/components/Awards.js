import React from 'react';
import { Award, Trophy, Medal } from 'lucide-react';

const Awards = () => {
  const highlights = [
    {
      icon: <Award size={32} />,
      title: 'SPOT Award',
      description: 'An internal recognition for the best team player and outstanding execution'
    },
    {
      icon: <Trophy size={32} />,
      title: 'Star of the Month',
      description: 'Best performer'
    },
    {
      icon: <Medal size={32} />,
      title: 'Rising Star Award',
      description: 'Best performer based on ratings, project delivery metrics, and leadership feedback'
    },
  ];

  return (
    <section id="awards" className="about-awards">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Awards</h2>
          <p className="section-subtitle">
            A collection of achievements and honors that reflect my dedication, continuous growth, and the positive impact I’ve made along my professional journey
          </p>
        </div>

        <div className="about-awards-content">
          <div className="about-awards-highlights">
            <div className="highlights-grid">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">
                    {item.icon}
                  </div>
                  <h4 className="highlight-title">{item.title}</h4>
                  <p className="highlight-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;