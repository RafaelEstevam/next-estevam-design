import styled from 'styled-components';
import { style } from '../../styles/settings';

export interface SlideItem {
    title: string,
    subtitle: string,
    description: string
}

export type SlideProps = {
    items: SlideItem[];
}

const SlideWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SlideContent = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${style.constAttr * 8}px;
    border: 4px solid ${style.grayBackground};
    border-radius: ${style.constAttr * 2.5}px;
    background: ${style.black};
`

const Title = styled('h1')`
    font-size: 3.5rem;
    color: ${style.white};
`

const Subtitle = styled('h2')`
    font-size: 3.5rem;
    color: ${style.white};
`

const Description = styled('h2')`
    font-size: 1.5rem;
    font-weight: normal;
    color: ${style.white};
`

const SlideComponent = ({ items }: SlideProps) => {

    return (
        <>
            <SlideWrapper>
                {items?.map((item, key) => (
                    <SlideContent key={key}>
                        <Subtitle key={key}>{item.title}</Subtitle>
                        <Title key={key}>{item.subtitle}</Title>
                        <Description key={key}>{item.description}</Description>
                    </SlideContent>
                ))}
            </SlideWrapper>
        </>
    )
}

export default SlideComponent