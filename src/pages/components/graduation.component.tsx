import {useContext} from 'react';
import styled from 'styled-components';
import { GraduationExperiencesItems } from '../../interfaces/graduationExperience.interface';
import { ContentTitle, Content, ContentItem, ContentLink } from './content.component';
import { ExperienceWrapper } from './experience.component';
import { language } from '../../services/translate';

import {formatDate} from '../../services/time';
import { PageContext } from '../templates/landingPage.template';

export type GraduationProps = {
    graduations?: GraduationExperiencesItems[];
}

const GraduationTitle = styled(ContentTitle)`
    text-align: right;
`

const GraduationComponent = ({ graduations }: GraduationProps) => {

    const page = useContext(PageContext);

    return (
        <ExperienceWrapper>
            {graduations?.map((item, key) => (
                <ContentItem key={key}>
                    <GraduationTitle>{item.name}</GraduationTitle>
                    <Content align='right'>{item.description}</Content>
                    <Content align='right'>
                        {language('Institution', page?.lang)}: <ContentLink href={item.link} target="_blank"><strong>{item.company}</strong></ContentLink>
                    </Content>
                    <Content>{formatDate(item.startDate)} - {formatDate(item.endDate)}</Content>
                </ContentItem>
            ))}
        </ExperienceWrapper>
    )
};

export default GraduationComponent;