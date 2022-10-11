import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TlDropdownButton from "./DropdownButton";

export default {
    title: 'UI/Button/Dropdown',
    component: TlDropdownButton,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlDropdownButton>

const Template: ComponentStory<typeof TlDropdownButton> = (args) => <TlDropdownButton {...args} />;

function testFunction(){
    console.log('Hello world')
}

export const ProtoDropdown = Template.bind({});
ProtoDropdown.args = {
    buttonTitle: 'Option test',
    options: [
        { title: 'option1', click: testFunction}, { title: 'option2', click: testFunction }, { title: 'option3', click: testFunction }
    ]
}