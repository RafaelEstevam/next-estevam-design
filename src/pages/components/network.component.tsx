import styled from 'styled-components';
import { MenuProps } from './menu.component';
import { style } from '../../styles/settings';
import { ContentLink } from './content.component';

const ItemMenu = styled('li')`
    list-style: none;
`

const ItemLink = styled('a')`
    color: ${style.white};
    border-radius: ${style.constAttr * 2.5}px;
    padding: ${style.constAttr * 4}px;
    background: ${style.grayBackground};
    transition: 0.1s linear all;
    opacity: 0.8;
    :hover{
        opacity: 1;
    }
`

const Menu = styled('ul')`
    display: flex;
    gap: ${style.constAttr * 4}px
`

const MeunComponent = ({ networks }: MenuProps) => {
    return (
        <>
            <Menu>
                {networks?.map((item, key) => (
                    <ItemMenu key={key}>
                        <ContentLink href={item.link} target="_blank">{item.name}</ContentLink>
                    </ItemMenu>
                ))}
            </Menu>
        </>
    )
};

export default MeunComponent;