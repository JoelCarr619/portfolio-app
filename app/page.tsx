import Image from 'next/image'
import React from 'react'
import DescriptionMap from './components/DescriptionMap'

export default function Home() {
  const link = [
    {name: 'Email' , link: '', content: 'JoelCarr619@gmail.com'},
    {name: 'GitHub' , link: '', content: 'JoelCarr619'},
    {name: 'LinkedIn' , link: '', content: 'JoelCarr2'},  
  ]

  const skills = [
    {name: 'JavaScript',content: ['React', 'NodeJs', 'React Native']},
    {name: 'Typescript', content: ['React', 'NodeJs', 'React Native']},
    {name: 'Web', content: ['HTML', 'CSS', 'SASS', 'TailwindCSS', 'MYSQL', 'GitHub', 'MUI']},
    {name: 'Design', content: ['Figma', 'Adobe', 'Unlayer']},
  ]
    const experience = [
      {name: 'Ripe Metrics (May 2023 - Present) ', content: 'Web Developer'},
      {name: 'Ripe Metrics (May 2023 - Present) ', content: 'Web Developer '},
      {name: ' Ripe Metrics (May 2023 - Present) ', content: 'Web Developer '},
      {name: ' Ripe Metrics (May 2023 - Present) ', bio: 'Web Developer '},
      {name: ' Ripe Metrics (May 2023 - Present) ', content: 'Web Developer '},
      {name: ' Ripe Metrics (May 2023 - Present) ', content: 'Web Developer '},
      {name: ' Ripe Metrics (May 2023 - Present) ', content: 'Web Developer '}
    ]

    const education = [
      {name: 'Customer Success Apprenticeship (Nov 2021 - Jan 2022) ', bio: 'Customer Success Manager'},
      {name: 'University Of Phoenix (Aug 2011 - Dec 2015) ', bio: 'Bachelors of Science in Business Marketing'},
    ]
  return (
    <main> 
      <h2>Digital Resume</h2>
      <h4> Joel Carr - Web Developer </h4>
      <section>
       <DescriptionMap list={link} type={'link'} />
      </section>
      <section>
      <h4> Skills </h4>
      <DescriptionMap list={skills} type={'skills'} />
      </section>
      <section>
      <h4> Projects </h4>
      <p>Check out my latest <a>projects</a></p>
      </section>

      <section>
      <h4> Experience </h4>
      <p>Check out my latest <a>projects</a></p>
      <DescriptionMap list={experience} type={'experience'} />
      </section>

      <section>
      <h4> Education </h4>
      <p>Check out my latest <a>projects</a></p>
      <DescriptionMap list={education} type={'education'} />
      </section>
    </main>
  )
}
 