import styled from 'styled-components';
import { style } from '../../styles/settings';

interface HTMLContent {
    html: string
}
export interface ContentItems {
    id: string,
    title: string,
    text: string,
    typeOfContent: string,
    content: HTMLContent
}

export type ContentProps = {
    contents?: ContentItems[];
}

export const ContentWrapper = styled('div')`
    width: 33.33%
`

export const ContentItem = styled('div') <{ align?: string, justifyContent?: string, current?: string }>`
    margin-bottom: ${style.constAttr * 16}px;
    justify-content: ${props => props.justifyContent || 'flex-end'};
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align || 'end'};
    color: ${style.white};
    gap: ${style.constAttr * 4}px;
    // border: ${style.constAttr}px solid transparent;
    // padding: ${style.constAttr * 8}px;
    // border-radius: ${style.constAttr * 2.5}px;
    // border-color: ${props => props.current === 'true' ? style.grayBackground : 'transparent'}
`;

export const ContentItemWrapper = styled('div') <{ align?: string }>`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align || 'end'};
`;

export const ContentTitle = styled('h2') <{ marginBottom?: number }>`
    font-size: 2.5rem;
    margin-bottom: ${props => style.constAttr * (props.marginBottom || 4)}px;
    color: ${style.white};
`

export const Content = styled('p') <{ align?: string }>`
    text-align: ${props => props.align || 'left'};
    color: ${style.textLight};
`
const ContentHtml = styled('div')`
    p{
        text-align: right;
        color: ${style.textLight};
    }
`

const ContentComponent = ({ contents }: ContentProps) => {
    return (
        <ContentWrapper>
            {contents?.map((item, key) => (
                <ContentItem key={key}>
                    <ContentItemWrapper align='end'>
                        <ContentTitle>{item.title}</ContentTitle>
                        <ContentHtml dangerouslySetInnerHTML={{ __html: item?.content?.html }} />
                    </ContentItemWrapper>
                </ContentItem>
            ))}
        </ContentWrapper>
    )
};

export default ContentComponent;