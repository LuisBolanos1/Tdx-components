import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TlTitleTextField from "./TitleTextField";

export default {
    title: 'UI/TextField/Titles',
    component: TlTitleTextField,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlTitleTextField>

const Template: ComponentStory<typeof TlTitleTextField> = (args) => <TlTitleTextField {...args}/>

export const MyTitleTextField = Template.bind({});
MyTitleTextField.args = {
    title: 'Title test'
}