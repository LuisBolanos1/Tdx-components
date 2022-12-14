import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ConstantsDropdownButtons } from "../Constants";
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
    ],
    styles: ConstantsDropdownButtons.WhiteButton
}

export const Proto2Dropdown = Template.bind({});
Proto2Dropdown.args = {
    buttonTitle: 'Option test',
    options: [
        { title: 'option1', click: testFunction}, { title: 'option2', click: testFunction }, { title: 'option3', click: testFunction }
    ],
    styles: ConstantsDropdownButtons.PurpleButton
}