import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import  CustomButton  from './Button';


export default {
    title: 'UI/Button',
    component: CustomButton,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CustomButton>

const Template: ComponentStory<typeof CustomButton> = (args) => <CustomButton {...args} />;

export const FirstButton = Template.bind({});
FirstButton.args = {
    label: 'First Button',
    backgroundColor: '#FFFFFF',
    borderColor: '#4B286D',
    myColor: '#4B286D',
    backgroundHover: '#4B286D',
    colorHover: '#FFFFFF',
    borderHover: '#4B286D'
};

export const AlternativeButton = Template.bind({});
AlternativeButton.args = {
    label: 'Alternative Button',
    backgroundColor: '#4B286D',
    borderColor: '#FFFFFF',
    myColor: '#FFFFFF',
    backgroundHover: '#FFFFFF',
    colorHover: '#4B286D',
    borderHover: '#4B286D'
}

export const SuccessButton = Template.bind({});
SuccessButton.args = {
    label: 'Success button',
    backgroundColor: '#2B8000',
    borderColor: '#2B8000',
    myColor: '#FFFFFF',
    backgroundHover: '#FFFFFF',
    colorHover: '#2B8000',
    borderHover: '#2B8000'
}

export const RedButton = Template.bind({});
RedButton.args = {
    label: 'Red button',
    backgroundColor: '#FFFFFF',
    borderColor: '#C12335',
    myColor: '#C12335',
    backgroundHover: '#C12335',
    colorHover: '#FFFFFF',
    borderHover: '#C12335'
}

export const CancelButton = Template.bind({});
CancelButton.args = {
    label: 'Cancel Button',
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    myColor: '#676E73',
    backgroundHover: '#676E73',
    colorHover: '#FFFFFF',
    borderHover: '#676E73'

}