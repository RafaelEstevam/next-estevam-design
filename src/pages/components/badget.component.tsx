import styled from 'styled-components';

export interface BadgetItems{
    id: string,
    title: string,
    value: string,
}

export type BadgetProps = {
    badgets?: BadgetItems[];
}

const BadgetComponent = ({badgets}:BadgetProps) => {
    return (
        <div>
            {badgets?.map((item, key) => (
                <div key={key}>
                    <p>{item.title}</p>
                    <h3>{item.value}</h3>
                </div>
            ))}
        </div>
    ) 
};

export default BadgetComponent;