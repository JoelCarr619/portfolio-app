import Image from 'next/image'
import React from 'react'
import ProjectCard from '../components/ProjectCard';
export default function ProjectsPage() {
      const projects = [
        {name: 'Personal Portfolio', link: 'https://www.google.com', description: ' i hope you can see this.ailuhsdufh laihsuif haldnb uabldibu aibdkjfb ailusbd fjkabiu ldsbfjk adiulfnja knidlufnakn  dlufianud nilanuf lndkansdu  ', videoLink:'video2.mp4'},
        {name: 'Personal Portfolio', link: 'https://www.google.com', description: ' I hope you are able to see this.awfe afafhbah jdbkadfb ajbdhfbak bdfhja bkhdfbahj bdhfbakjb dsfhbahjks bfhjabkhjf bakhjbs dfhkjakbd hb dbu fliv kjrenvj ', videoLink:'video2.mp4'},
        {name: 'Personal Portfolio', link: 'https://www.google.com', description: ' It should be working.lais bkdjfba lidsbjabi usdbclabu sdbjhabs dbh abkuhdbvkab luivjbal ikf vhjabkh  labdlbiuabl alisud blilbasdb a lib asdlbuabusdb  ', videoLink:'video2.mp4'},

      ]
  return (
    <main className='flex flex-col flex-1 bg-slate-100 '> 
      {projects.map((project, projectIndex) => {
        return (
          <ProjectCard key={projectIndex} project={project} index={projectIndex} />
        )
      })}
    </main>
  )
}
