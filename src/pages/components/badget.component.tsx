import styled from 'styled-components';
import { ContentWrapper, ContentItem } from './content.component';

export interface BadgetItems {
    id: string,
    title: string,
    value: string,
}

export type BadgetProps = {
    badgets?: BadgetItems[];
}

export const BadgetItem = styled(ContentItem)`
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

const BadgetComponent = ({ badgets }: BadgetProps) => {
    return (
        <ContentWrapper>
            {badgets?.map((item, key) => (
                <BadgetItem key={key}>
                    <p>{item.title}</p>
                    <h2>{item.value}</h2>
                </BadgetItem>
            ))}
        </ContentWrapper>
    )
};

export default BadgetComponent;