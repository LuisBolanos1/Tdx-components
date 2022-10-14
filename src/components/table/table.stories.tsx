import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TlTable from "./Table";

export default {
    title: 'UI/Table',
    component: TlTable,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlTable>

const Template: ComponentStory<typeof TlTable> = (args) => <TlTable {...args}/>

const rows = [
    {name: 'test1', age: 23 , numer: 3},
    {name: 'test2', age: 23 , numer: 3},
    {name: 'test3', age: 23 , numer: 3},
    {name: 'test4', age: 23 , numer: 3},
    {name: 'test5', age: 23 , numer: 3},
    {name: 'test6', age: 23 , numer: 3},
]
const titles = [ 'name', 'age', 'numer' ]


export const PrincipalTable = Template.bind({});
PrincipalTable.args = {
    rows: rows,
    titles: titles
}


const rows2 = [
    {stack: 'Odyssey', applications: 'Saleforce' , action: 3},
    {stack: 'Merlin', applications: 'Order hub' , action: 3},
    {stack: 'Lorem ipsum', applications: 'Lorem ipsum is simply dummy text' , action: 3},
    {stack: 'Lorem ipsum', applications: 'Lorem ipsum is simply dummy text' , action: 3},
]
const titles2 = [ 'stack', 'applications', 'action' ]

export const SecundaryTable = Template.bind({});
SecundaryTable.args = {
    rows: rows2,
    titles: titles2
}