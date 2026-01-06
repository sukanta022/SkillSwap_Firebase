import React from 'react';
import useSkills from '../hooks/useSkills';
import SkillCard from '../Component/SkillCard';

const Skills = () => {
    const {skills, loading} = useSkills()
    if(loading){
        return <p>Loading</p>
    }
    return (
        <div className='w-11/12 mx-auto space-y-15 py-10'>
            <h1 className='text-center text-4xl text-[#001931] font-bold'>All Categories Skills</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                {
                    skills.map(skill => <SkillCard className='hover:scale-110' key={skill.skillId} skill={skill}></SkillCard>)
                }
            </div>
        </div>
    );
};

export default Skills;