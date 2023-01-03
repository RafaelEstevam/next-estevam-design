import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {Tech} from '../pages/components/technology.component';

export default {
    title: 'Site/Tech Label',
    component: Tech,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    
} as ComponentMeta<typeof Tech>;

const Template: ComponentStory<typeof Tech> = (args) => <Tech {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    name: 'Tech Label',
};