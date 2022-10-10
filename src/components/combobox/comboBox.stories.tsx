import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TlComboBox from "./ComboBox";

export default {
    title: 'UI/ComboBox',
    component: TlComboBox,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlComboBox>

const Template: ComponentStory<typeof TlComboBox> = (args) => <TlComboBox {...args}/>

const data = [
    {name: 'Test', age: 12},
    {name: 'Test1', age: 12},
    {name: 'Test2', age: 12},
    {name: 'Test3', age: 12},
    {name: 'Test4', age: 12},
    {name: 'Test5', age: 12},
    {name: 'Test6', age: 12},
    {name: 'Test7', age: 12},
    {name: 'Test8', age: 12},
    {name: 'Test9', age: 12},
    {name: 'Test10', age: 12},
]

export const PrototypeComboBox = Template.bind({});
PrototypeComboBox.args = {
    data: data
}