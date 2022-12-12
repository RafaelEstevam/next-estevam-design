import styled from 'styled-components';
import { ContentWrapper, ContentItem, ContentTitle, Content, ContentItemWrapper } from './content.component';

export interface BadgetItems {
    id: string,
    title: string,
    value: string,
}

export type BadgetProps = {
    badgets?: BadgetItems[];
}

export const BadgetWrapper = styled(ContentWrapper)`
    align-items: start;
    jusfity-content: flex-start;
`;

const BadgetComponent = ({ badgets }: BadgetProps) => {
    return (
        <BadgetWrapper>
            {badgets?.map((item, key) => (
                <ContentItem key={key} align='start'>
                    <ContentItemWrapper align='start'>
                        <Content>{item.title}</Content>
                        <ContentTitle>{item.value}</ContentTitle>
                    </ContentItemWrapper>
                </ContentItem>
            ))}
        </BadgetWrapper>
    )
};

export default BadgetComponent;