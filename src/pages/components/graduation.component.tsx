import styled from 'styled-components';
import { GraduationExperiencesItems } from '../../interfaces/graduationExperience.interface';
import { ContentItem } from './content.component';

export type GraduationProps = {
    graduations?: GraduationExperiencesItems[];
}

const GraduationItem = styled(ContentItem)`
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
    align-items: end;
    h2{
        font-size: 2.5rem;
        margin-bottom: 16px;
    }
`

const GraduationComponent = ({ graduations }: GraduationProps) => {
    return (
        <div style={{ width: '50%' }}>
            {graduations?.map((item, key) => (
                <GraduationItem key={key}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p>{item.startDate} - {item.endDate}</p>
                </GraduationItem>
            ))}
        </div>
    )
};

export default GraduationComponent;