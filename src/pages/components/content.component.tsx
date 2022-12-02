import styled from 'styled-components';

export interface ContentItems{
    id: string,
    title: string,
    text: string,
    typeOfContent: string
}

export type ContentProps = {
    contents?: ContentItems[];
}

const ContentComponent = ({contents}:ContentProps) => {
    return (
        <>
            <div></div>
        </>
    ) 
};

export default ContentComponent;