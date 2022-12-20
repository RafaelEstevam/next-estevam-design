import styled from 'styled-components';
import Image from 'next/image';
import { style } from '../../styles/settings';

interface LogoItem {
    url: string
}

export interface TechnologyItems {
    id: string,
    name: string,
    description: string,
    skill: string,
    logo: LogoItem
}


export type TechnologyProps = {
    technologies?: TechnologyItems[];
}

const TechnologyItem = styled('div')`
    border: ${style.constAttr}px solid ${style.grayBackground};
    padding: 16px;
    border-radius: ${style.constAttr * 2.5}px;
    p{
        font-weight: bold;
        text-transform: uppercase;
        color: ${style.white};
    }
`;

const TechnologyWrapper = styled('div')`
    display: flex;
    gap: ${style.constAttr * 4}px;
    flex-wrap: wrap;
`

export const Tech = ({id, description, logo, name, skill}: TechnologyItems) => {
    return (
        <TechnologyItem>
            <p>{name}</p>
        </TechnologyItem>
    )
}

const TechnologyComponent = ({ technologies }: TechnologyProps) => {
    return (
        <TechnologyWrapper>
            {technologies?.map((item:TechnologyItems, key) => (
                <div key={key}>
                    <Tech {...{name: item.name, id: item.id, description: item.description, logo: item.logo, skill: item.skill}} />
                </div>
            ))}
        </TechnologyWrapper>
    )
};

export default TechnologyComponent;