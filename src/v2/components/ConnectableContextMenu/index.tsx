import React from 'react'

import { ContextMenu } from 'v2/components/ContextMenu'
import { ConnectableContextMenuRemoveConnection } from 'v2/components/ConnectableContextMenu/components/ConnectableContextMenuRemoveConnection'
import { ConnectableContextMenuMuteBlock } from 'v2/components/ConnectableContextMenu/components/ConnectableContextMenuMuteBlock'
import { ConnectableContextMenuReorderConnections } from 'v2/components/ConnectableContextMenu/components/ConnectableContextMenuReorderConnections'

interface Props {
  channel: any
  connectable: any
  onRemove: (props: any) => any
  onChangePosition: (newIndex: number) => { newIndex: number; oldIndex: number }
}

export const ConnectableContextMenu: React.FC<Props> = ({
  channel,
  connectable,
  onRemove,
  onChangePosition,
  ...rest
}) => {
  const findOriginalUrl =
    connectable.__typename === 'Image' && connectable.find_original_url
  const sourceUrl = connectable.source && connectable.source.url

  const isDisplayable =
    channel.can.remove_connections ||
    sourceUrl ||
    findOriginalUrl ||
    connectable.can.mute ||
    channel.can.reorder_connections

  if (!isDisplayable) return null

  return (
    <ContextMenu position="absolute" top={8} right={8} zIndex={1} {...rest}>
      {channel.can.remove_connections && (
        <ConnectableContextMenuRemoveConnection
          channelId={channel.id}
          connectableId={connectable.id}
          connectableType={connectable.__typename}
          onRemove={onRemove}
        />
      )}

      {sourceUrl && (
        <ContextMenu.Option iconName="Link" href={sourceUrl}>
          View source
        </ContextMenu.Option>
      )}

      {findOriginalUrl && (
        <ContextMenu.Option iconName="Globe" href={findOriginalUrl}>
          Find original
        </ContextMenu.Option>
      )}

      {connectable.can.mute && (
        <ConnectableContextMenuMuteBlock
          connectableId={connectable.id}
          connectableType={connectable.__typename}
        />
      )}

      {channel.can.reorder_connections && (
        <ConnectableContextMenuReorderConnections
          onChangePosition={onChangePosition}
        />
      )}
    </ContextMenu>
  )
}