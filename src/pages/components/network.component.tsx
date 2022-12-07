import styled from 'styled-components';
import { MenuProps } from './menu.component';
import { style } from '../../styles/settings';

const ItemMenu = styled('li')`
    list-style: none;
`

const ItemLink = styled('a')`
    color: #fff;
    border-radius: ${style.constAttr * 2.5}px;
    padding: ${style.constAttr * 4}px;
    transition: 0.1s linear all;
    background: ${style.grayBackground};
    :hover{
        background: ${style.grayBackground};
    }
`

const Menu = styled('ul')`
    display: flex;
    gap: 16px
`

const MeunComponent = ({ networks }: MenuProps) => {
    return (
        <>
            <Menu>
                {networks?.map((item, key) => (
                    <ItemMenu key={key}>
                        <ItemLink href={item.link}>{item.name}</ItemLink>
                    </ItemMenu>
                ))}
            </Menu>
        </>
    )
};

export default MeunComponent;