import styled from 'styled-components';
import { GraduationExperiencesItems } from '../../interfaces/graduationExperience.interface';
import { ContentWrapper, ContentItem, ContentTitle, Content, ContentItemWrapper } from './content.component';


export type ExperienceProps = {
    experiences?: GraduationExperiencesItems[];
}


export const ExperienceWrapper = styled('div')`
    width: 50%;
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
`

const ExperienceContent = styled(Content)`
    text-align: left;
`

const ExperienceComponent = ({ experiences }: ExperienceProps) => {
    return (
        <ExperienceWrapper>
            {experiences?.map((item, key) => (
                <ContentItem key={key} justifyContent='flex-end' align='start'>
                    <ContentTitle>{item.name}</ContentTitle>
                    <ExperienceContent>{item.description}</ExperienceContent>
                    <ExperienceContent>{item.startDate} - {item.endDate}</ExperienceContent>
                </ContentItem>
            ))}
        </ExperienceWrapper>
    )
};

export default ExperienceComponent;