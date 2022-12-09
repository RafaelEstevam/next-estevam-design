import styled from 'styled-components';
import { style } from '../../styles/settings';

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
    margin-bottom: ${style.constAttr *16}px;
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
    align-items: end;
    color: ${style.white};
    h2{
        font-size: 2.5rem;
        margin-bottom: ${style.constAttr * 4}px;
    }
    p{
        text-align: right;
        color: ${style.textLight};
    }
`;

const ContentItemWrapper = styled('div')`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: end;
`

const ContentComponent = ({ contents }: ContentProps) => {
    return (
        <ContentWrapper>
            {contents?.map((item, key) => (
                <ContentItem key={key}>
                    <ContentItemWrapper>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                    </ContentItemWrapper>
                </ContentItem>
            ))}
        </ContentWrapper>
    )
};

export default ContentComponent;