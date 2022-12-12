import styled from 'styled-components';
import { GraduationExperiencesItems } from '../../interfaces/graduationExperience.interface';
import { ContentTitle, Content, ContentItem } from './content.component';
import { ExperienceWrapper } from './experience.component';

export type GraduationProps = {
    graduations?: GraduationExperiencesItems[];
}

const GraduationTitle = styled(ContentTitle)`
    text-align: right;
`

const GraduationComponent = ({ graduations }: GraduationProps) => {
    return (
        <ExperienceWrapper>
            {graduations?.map((item, key) => (
                <ContentItem key={key}>
                    <GraduationTitle>{item.name}</GraduationTitle>
                    <Content>{item.description}</Content>
                    <Content>{item.startDate} - {item.endDate}</Content>
                </ContentItem>
            ))}
        </ExperienceWrapper>
    )
};

export default GraduationComponent;