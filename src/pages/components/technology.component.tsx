import styled from 'styled-components';
import Image from 'next/image';

interface LogoItem{
    url: string
  }
  
export interface TechnologyItems{
    id: string,
    name: string,
    description: string,
    skill: string,
    logo: LogoItem
}


export type TechnologyProps = {
    technologies?: TechnologyItems[];
}

const TechnologyComponent = ({technologies}:TechnologyProps) => {
    return (
        <div>
            {technologies?.map((item, key) => (
                <div key={key}>
                    <p>{item.name}</p>
                    <Image alt={item.id} width={100} height={100} key={key} src={item.logo.url} />
                </div>
            ))}
        </div>
    ) 
};

export default TechnologyComponent;