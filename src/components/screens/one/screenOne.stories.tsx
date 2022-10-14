import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TlScreenOne from './ScreenOne';

export default {
    title: 'UI/Screens/One',
    component: TlScreenOne,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlScreenOne>

const Template: ComponentStory<typeof TlScreenOne> = (args) => <TlScreenOne {...args}/>

export const FirstScreen = Template.bind({})
FirstScreen.args = {}