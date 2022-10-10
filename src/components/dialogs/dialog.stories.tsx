import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TlDialog } from "./Dialog";

export default {
    title: 'UI/Dialog',
    component: TlDialog,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof TlDialog>

const Template: ComponentStory<typeof TlDialog> = (args) => <TlDialog {...args}/>

export const ProtoDialog = Template.bind({});
ProtoDialog.args = {}