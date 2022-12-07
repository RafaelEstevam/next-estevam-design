import styled from 'styled-components';

export interface ContentItems {
    id: string,
    title: string,
    text: string,
    typeOfContent: string
}

export type ContentProps = {
    contents?: ContentItems[];
}

export const ContentWrapper = styled('div')`
    width: 33.33%
`

export const ContentItem = styled('div')`
    margin-bottom: 64px;
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
    align-items: end;
    h2{
        font-size: 2.5rem;
        margin-bottom: 16px;
    }
    p{
        text-align: right;
    }
`

const ContentComponent = ({ contents }: ContentProps) => {
    return (
        <ContentWrapper>
            {contents?.map((item, key) => (
                <ContentItem key={key}>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                </ContentItem>
            ))}
        </ContentWrapper>
    )
};

export default ContentComponent;