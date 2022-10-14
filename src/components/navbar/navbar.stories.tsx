import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TlNavbar from "./Navbar";

export default {
    title: 'UI/Bar/Navbar',
    component: TlNavbar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlNavbar>

const Template: ComponentStory<typeof TlNavbar> = (args) => <TlNavbar {...args} />

export const ProtoNavbar = Template.bind({});
ProtoNavbar.args = {

}