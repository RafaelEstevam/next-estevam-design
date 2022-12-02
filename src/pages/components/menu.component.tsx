import styled from 'styled-components';

interface MenuItems{
    label: string,
    link: string
}

export type MenuProps = {
    items: MenuItems[];
}

const ItemMenu = styled('li')`
    list-style: none;
`

const ItemLink = styled('a')`
    color: #fff;
`

const Menu = styled('ul')`
    display: flex;
    gap: 16px
`

const MeunComponent = ({items}:MenuProps) => {
    return (
        <>
            <div>
                <Menu>
                    {items?.map((item, key) => (
                        <ItemMenu key={key}><ItemLink href={item.link}>{item.label}</ItemLink></ItemMenu>
                    ))}
                </Menu>
            </div>
        </>
    )
};

export default MeunComponent;