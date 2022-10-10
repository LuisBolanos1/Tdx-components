import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  { TlTextField } from "./TextField";

export default {
    title: 'UI/TextField',
    component: TlTextField,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlTextField>

const Template: ComponentStory<typeof TlTextField> = (args) => <TlTextField {...args}/>

export const PrototypeTextField = Template.bind({});
PrototypeTextField.args = {
    placeholder: 'Text here'
}