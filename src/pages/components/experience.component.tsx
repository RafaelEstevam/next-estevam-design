import styled from 'styled-components';
import { GraduationExperiencesItems } from '../../interfaces/graduationExperience.interface';
import { ContentItem } from './content.component';

export type ExperienceProps = {
    experiences?: GraduationExperiencesItems[];
}

const ExperienceItem = styled(ContentItem)`
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
    align-items: start;
    h2{
        font-size: 2.5rem;
        margin-bottom: 16px;
    }
    p{
        text-align: left;
    }
`

const ExperienceComponent = ({ experiences }: ExperienceProps) => {
    return (
        <div style={{ width: '50%' }}>
            {experiences?.map((item, key) => (
                <ExperienceItem key={key}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p>{item.startDate} - {item.endDate}</p>
                </ExperienceItem>
            ))}
        </div>
    )
};

export default ExperienceComponent;