import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TlChipBox from "./ChipBox";

export default {
    title: 'UI/ComboBox',
    component: TlChipBox,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlChipBox>

const Template: ComponentStory<typeof TlChipBox> = (args) => <TlChipBox {...args}/>

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

export const PrototypeChipBox = Template.bind({});
PrototypeChipBox.args = {
    data: data
}
