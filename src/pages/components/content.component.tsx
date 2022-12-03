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
        <div>
            {contents?.map((item, key) => (
                <div key={key}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    ) 
};

export default ContentComponent;