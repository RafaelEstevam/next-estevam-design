import styled from 'styled-components';

const CustomWrapper = styled('div') <{ content?: boolean }>`
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    min-height: ${props => props.content && 'calc(100vh - 136px)'};
    display: ${props => props.content && 'flex'};
    justify-content: ${props => props.content && 'center'};
    flex-direction: ${props => props.content && 'column'};
    @media(max-width: 1920px){
        padding: 0px 32px;
    }
`;

const CustomWrapperDivider = styled('div') <{ borderTop?: boolean, margin?: boolean, borderBottom?: boolean }>`
    margin-top: ${props => props.margin && '64px'};
    border-top: ${props => props.borderTop && '4px solid #333'};
    border-bottom: ${props => props.borderBottom && '4px solid #333'};
    padding: 64px 0px;
    background: #121212; 
`

interface WrapperChildren {
    children: React.ReactNode,
    content?: boolean,
    borderTop?: boolean,
    borderBottom?: boolean,
    margin?: boolean,
    id?: string
}

export const WrapperDivider = ({ children, content, borderTop, margin, borderBottom, id }: WrapperChildren) => {
    return (
        <CustomWrapperDivider id={id} borderTop={borderTop} margin={margin} borderBottom={borderBottom}>{children}</CustomWrapperDivider>
    )
}

const Wrapper = ({ children, content, id }: WrapperChildren) => {
    return (
        <CustomWrapper content={content} id={id}>{children}</CustomWrapper>
    )
}

export default Wrapper;