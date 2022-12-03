import styled from 'styled-components';
import { GraduationExperiencesItems } from './interfaces/graduationExperience.component.interface';

export type ExperienceProps = {
    experiences?: GraduationExperiencesItems[];
}

const ExperienceComponent = ({experiences}:ExperienceProps) => {
    return (
        <div>
            {experiences?.map((item, key) => (
                <div key={key}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    ) 
};

export default ExperienceComponent;