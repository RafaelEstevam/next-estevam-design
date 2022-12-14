import {useContext} from 'react';
import styled from 'styled-components';
import { GraduationExperiencesItems } from '../../interfaces/graduationExperience.interface';
import { ContentItem, ContentTitle, Content } from './content.component';

import { language } from '../../services/translate';
import { LangContext } from '../templates/landingPage.template';
import { style } from '../../styles/settings';

export type ExperienceProps = {
    experiences?: GraduationExperiencesItems[];
}

export const ExperienceWrapper = styled('div')`
    width: 50%;
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
`

export const ExperienceContent = styled(Content)<{current?: string}>`
    text-align: left;
    background: ${props => props.current === 'true' ? style.grayBackground: 'transparent'};
    padding: ${props => props.current === 'true' && style.constAttr * 2}px;
    border-radius: ${style.constAttr * 2.5}px;
`

export const ExperienceDate = styled('div')`
    display: flex;
    align-items: center;
    gap: ${style.constAttr * 2}px;
`

const ExperienceComponent = ({ experiences }: ExperienceProps) => {

    const lang = useContext(LangContext);

    return (
        <ExperienceWrapper>
            {experiences?.map((item, key) => (
                <ContentItem current={item?.current.toString()} key={key} justifyContent='flex-end' align='start'>
                    <ContentTitle>{item.name}</ContentTitle>
                    <ExperienceContent>{item.description}</ExperienceContent>
                    <ExperienceDate>
                        <ExperienceContent>{item.startDate}</ExperienceContent>-<ExperienceContent current={item?.current.toString()}>{item?.current ? language('Current', lang) : item.endDate}</ExperienceContent>
                    </ExperienceDate>
                </ContentItem>
            ))}
        </ExperienceWrapper>
    )
};

export default ExperienceComponent;