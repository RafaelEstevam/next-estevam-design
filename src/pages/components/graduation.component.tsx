import styled from 'styled-components';
import { GraduationExperiencesItems } from '../../interfaces/graduationExperience.interface';

export type GraduationProps = {
    graduations?: GraduationExperiencesItems[];
}

const GraduationComponent = ({graduations}:GraduationProps) => {
    return (
        <div>
            {graduations?.map((item, key) => (
                <div key={key}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    ) 
};

export default GraduationComponent;