/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ConnectableContextMenuConnectable
// ====================================================

export interface ConnectableContextMenuConnectable_Text_can {
  __typename: "BlockCan";
  mute: boolean | null;
}

export interface ConnectableContextMenuConnectable_Text_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface ConnectableContextMenuConnectable_Text {
  __typename: "Text";
  can: ConnectableContextMenuConnectable_Text_can | null;
  source: ConnectableContextMenuConnectable_Text_source | null;
}

export interface ConnectableContextMenuConnectable_Image_can {
  __typename: "BlockCan";
  mute: boolean | null;
}

export interface ConnectableContextMenuConnectable_Image_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface ConnectableContextMenuConnectable_Image {
  __typename: "Image";
  can: ConnectableContextMenuConnectable_Image_can | null;
  source: ConnectableContextMenuConnectable_Image_source | null;
  find_original_url: string | null;
}

export interface ConnectableContextMenuConnectable_Link_can {
  __typename: "BlockCan";
  mute: boolean | null;
}

export interface ConnectableContextMenuConnectable_Link_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface ConnectableContextMenuConnectable_Link {
  __typename: "Link";
  can: ConnectableContextMenuConnectable_Link_can | null;
  source: ConnectableContextMenuConnectable_Link_source | null;
}

export interface ConnectableContextMenuConnectable_Embed_can {
  __typename: "BlockCan";
  mute: boolean | null;
}

export interface ConnectableContextMenuConnectable_Embed_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface ConnectableContextMenuConnectable_Embed {
  __typename: "Embed";
  can: ConnectableContextMenuConnectable_Embed_can | null;
  source: ConnectableContextMenuConnectable_Embed_source | null;
}

export interface ConnectableContextMenuConnectable_Attachment_can {
  __typename: "BlockCan";
  mute: boolean | null;
}

export interface ConnectableContextMenuConnectable_Attachment_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface ConnectableContextMenuConnectable_Attachment {
  __typename: "Attachment";
  can: ConnectableContextMenuConnectable_Attachment_can | null;
  source: ConnectableContextMenuConnectable_Attachment_source | null;
}

export interface ConnectableContextMenuConnectable_PendingBlock_can {
  __typename: "BlockCan";
  mute: boolean | null;
}

export interface ConnectableContextMenuConnectable_PendingBlock {
  __typename: "PendingBlock";
  can: ConnectableContextMenuConnectable_PendingBlock_can | null;
}

export interface ConnectableContextMenuConnectable_Channel_can {
  __typename: "ChannelCan";
  mute: boolean | null;
}

export interface ConnectableContextMenuConnectable_Channel {
  __typename: "Channel";
  can: ConnectableContextMenuConnectable_Channel_can | null;
}

export type ConnectableContextMenuConnectable = ConnectableContextMenuConnectable_Text | ConnectableContextMenuConnectable_Image | ConnectableContextMenuConnectable_Link | ConnectableContextMenuConnectable_Embed | ConnectableContextMenuConnectable_Attachment | ConnectableContextMenuConnectable_PendingBlock | ConnectableContextMenuConnectable_Channel;
