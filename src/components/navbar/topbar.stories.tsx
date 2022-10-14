import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TlTopBar from "./Topbar";

export default {
    title: 'UI/Bar/TopBar',
    component: TlTopBar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlTopBar>

const Template: ComponentStory<typeof TlTopBar> = (args) => <TlTopBar {...args}/>

export const ProtoTopBar = Template.bind({});
ProtoTopBar.args = {}