import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  { TlTextFieldTitle } from "./TextField";

export default {
    title: 'UI/TextField/Title',
    component: TlTextFieldTitle,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlTextFieldTitle>

const Template: ComponentStory<typeof TlTextFieldTitle> = (args) => <TlTextFieldTitle {...args}/>

export const PrototypeTextField = Template.bind({});
PrototypeTextField.args = {
    placeholder: 'Text here',
    title: 'Title test'
}