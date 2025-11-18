import type { Icon } from '@phosphor-icons/react'
import {
  AsteriskIcon,
  BookOpenIcon,
  BridgeIcon,
  CalendarCheckIcon,
  ChartLineUpIcon,
  CodeIcon,
  CompassIcon,
  CpuIcon,
  GiftIcon,
  HandshakeIcon,
  NewspaperIcon,
  PuzzlePieceIcon,
  SunHorizonIcon,
  TreeIcon,
  WalletIcon,
  WavesIcon,
  WrenchIcon
} from '@phosphor-icons/react'

export type RoadmapStatus = 'done' | 'ongoing' | 'planned'
export type RoadmapCategoryKey = 'ecosystem' | 'marketing' | 'apps'
export type RoadmapItemType =
  | 'node'
  | 'wallet'
  | 'sdk'
  | 'tooling'
  | 'integration'
  | 'discovery'
  | 'guidance'
  | 'program'
  | 'initiative'
  | 'partnership'
  | 'event'
  | 'growth'
  | 'content'
  | 'coreDapp'
  | 'bridge'

export const DEFAULT_ROADMAP_ITEM_TYPE: RoadmapItemType = 'tooling'

export const ROADMAP_ITEM_TYPE_META: Record<RoadmapItemType, { label: string; Icon: Icon; color: string }> = {
  node: { label: 'Node', Icon: CpuIcon, color: '#8FD1FF' },
  wallet: { label: 'Wallet', Icon: WalletIcon, color: '#6EE6C8' },
  sdk: { label: 'SDK', Icon: CodeIcon, color: '#FFE073' },
  tooling: { label: 'Tooling', Icon: WrenchIcon, color: '#D2C0FF' },
  integration: { label: 'Integration', Icon: PuzzlePieceIcon, color: '#FF8FB6' },
  discovery: { label: 'Discovery', Icon: CompassIcon, color: '#7DDCFF' },
  guidance: { label: 'Guidance', Icon: BookOpenIcon, color: '#FFB685' },
  program: { label: 'Program', Icon: GiftIcon, color: '#B0F06A' },
  initiative: { label: 'Initiative', Icon: SunHorizonIcon, color: '#F6A2FF' },
  partnership: { label: 'Partnership', Icon: HandshakeIcon, color: '#6FA3FF' },
  event: { label: 'Event', Icon: CalendarCheckIcon, color: '#FF9E9E' },
  growth: { label: 'Growth', Icon: ChartLineUpIcon, color: '#63E0F2' },
  content: { label: 'Content', Icon: NewspaperIcon, color: '#FFC975' },
  coreDapp: { label: 'Core dApp', Icon: AsteriskIcon, color: '#F99E70' },
  bridge: { label: 'Bridge', Icon: BridgeIcon, color: '#7595FF' }
}

export const ROADMAP_STATUSES: ReadonlyArray<{
  key: RoadmapStatus
  label: string
  Icon: Icon
}> = [
  { key: 'done', label: 'Done', Icon: TreeIcon },
  { key: 'ongoing', label: 'Ongoing', Icon: WavesIcon },
  { key: 'planned', label: 'Planned', Icon: SunHorizonIcon }
]

export interface RoadmapButton {
  label?: string
  url?: string
}

export interface RoadmapItem {
  title: string
  status: RoadmapStatus
  type: RoadmapItemType
  description: string
  button?: RoadmapButton
}
