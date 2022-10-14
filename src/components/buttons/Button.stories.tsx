import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import  TlButton  from './Button';


export default {
    title: 'UI/Button',
    component: TlButton,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlButton>

function testFunction(){
    console.log('Hello world')
}


const Template: ComponentStory<typeof TlButton> = (args) => <TlButton {...args} />;

export const FirstButton = Template.bind({});
FirstButton.args = {
    label: 'First Button',
    styles: {
        backgroundColor: '#FFFFFF',
        borderColor: '#4B286D',
        myColor: '#4B286D',
        backgroundHover: '#4B286D',
        colorHover: '#FFFFFF',
        borderHover: '#4B286D'    
    },
};

export const AlternativeButton = Template.bind({});
AlternativeButton.args = {
    label: 'Alternative Button',
    styles: {
        backgroundColor: '#4B286D',
        borderColor: '#FFFFFF',
        myColor: '#FFFFFF',
        backgroundHover: '#FFFFFF',
        colorHover: '#4B286D',
        borderHover: '#4B286D'    
    },
}

export const SuccessButton = Template.bind({});
SuccessButton.args = {
    label: 'Success button',
    styles: {
        backgroundColor: '#2B8000',
        borderColor: '#2B8000',
        myColor: '#FFFFFF',
        backgroundHover: '#FFFFFF',
        colorHover: '#2B8000',
        borderHover: '#2B8000'            
    },
}

export const RedButton = Template.bind({});
RedButton.args = {
    label: 'Red button',
    styles: {
        backgroundColor: '#FFFFFF',
        borderColor: '#C12335',
        myColor: '#C12335',
        backgroundHover: '#C12335',
        colorHover: '#FFFFFF',
        borderHover: '#C12335'    
    },
}

export const CancelButton = Template.bind({});
CancelButton.args = {
    label: 'Cancel Button',
    styles: {
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        myColor: '#676E73',
        backgroundHover: '#676E73',
        colorHover: '#FFFFFF',
        borderHover: '#676E73'    
    },
}