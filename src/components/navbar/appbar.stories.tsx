import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TlAppBar from './Appbar';

export default {
    title: 'UI/Bar/AppBar',
    component: TlAppBar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlAppBar>

const Template: ComponentStory<typeof TlAppBar> = (args) => <TlAppBar {...args}/>

export const ProtoAppBar = Template.bind({})
ProtoAppBar.args = {}