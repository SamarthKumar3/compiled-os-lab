import React from 'react';
import classNames from './page.module.css';
import Link from 'next/link';

const experiments = [
  { id: 1, title: 'Memory-Management', description: 'Description of Experiment 1', link: '/Memory-Management'},
  { id: 2, title: 'Producer-Consumer', description: 'Description of Experiment 2', link: '/Producer-Consumer' },
  { id: 3, title: 'Experiment 3', description: 'Description of Experiment 3', link: '/Memory-Management' },
  { id: 4, title: 'Experiment 4', description: 'Description of Experiment 4' , link: '/Memory-Management'},
  { id: 5, title: 'Experiment 5', description: 'Description of Experiment 5', link: '/Memory-Management' },
  { id: 6, title: 'Experiment 6', description: 'Description of Experiment 6', link: '/Memory-Management' },
  { id: 7, title: 'Experiment 7', description: 'Description of Experiment 7', link: '/Memory-Management' },
  { id: 8, title: 'Experiment 8', description: 'Description of Experiment 8' , link: '/Memory-Management'},
  { id: 9, title: 'Experiment 9', description: 'Description of Experiment 9' , link: '/Memory-Management'},
];

const ExperimentList = () => {
  return (
    <div className={classNames.cardList}>
      {experiments.map((experiment) => (
        <>
          <div key={experiment.id} className={classNames.card}>
            <h3 className={classNames.experimentName}>{experiment.title}</h3>
            <p className={classNames.experimentDescription}>{experiment.description}</p>
            <Link href={`/Simulations/${experiment.link}`}>Try Experiment</Link>
          </div>
        </>
      ))}
    </div>
  );
};

export default ExperimentList;
