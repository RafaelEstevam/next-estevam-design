import styled from 'styled-components';

export interface SlideItem {
    title: string,
    subtitle: string,
    description: string
}

export type SlideProps = {
    items: SlideItem[];
}

const SlideWrapper = styled('div')`
    padding: 128px 0px;
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
`

const Title = styled('h1')`
    font-size: 3.5rem;
`

const Subtitle = styled('h2')`
    font-size: 3.5rem;
`

const Description = styled('h2')`
    font-size: 1.5rem;
    font-weight: normal;
`

const SlideComponent = ({items}:SlideProps) => {

    return (
        <>
            <SlideWrapper>
                {items?.map((item, key) => (
                    <SlideContent key={key}>
                        <Title key={key}>{item.title}</Title>
                        <Subtitle key={key}>{item.subtitle}</Subtitle>
                        <Description key={key}>{item.description}</Description>
                    </SlideContent>
                ))}
            </SlideWrapper>
        </>
    )
}

export default SlideComponent