import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TlGrid from './Grid';

export default {
    title: 'UI/Grid',
    component: TlGrid,
    argTypes: {
        backgroundColor: { control: 'color' } 
    }
} as ComponentMeta<typeof TlGrid>

const Template: ComponentStory<typeof TlGrid> = (args) => <TlGrid {...args}/>

export const ProtoGrid = Template.bind({});
ProtoGrid.args = {}