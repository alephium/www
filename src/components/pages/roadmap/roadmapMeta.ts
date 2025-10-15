import type { Icon } from '@phosphor-icons/react'
import {
  ArrowsLeftRightIcon,
  BookOpenIcon,
  CalendarCheckIcon,
  ChartLineUpIcon,
  CodeIcon,
  CompassIcon,
  CpuIcon,
  GiftIcon,
  GlobeHemisphereWestIcon,
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
export type RoadmapCategoryKey = 'core-platform' | 'ecosystem' | 'marketing' | 'liquidity'
export type RoadmapItemType =
  | 'node'
  | 'wallets'
  | 'sdk'
  | 'tooling'
  | 'integration'
  | 'discovery'
  | 'guidance'
  | 'partnership'
  | 'events'
  | 'growth'
  | 'content'
  | 'dex'
  | 'bridging'
  | 'incentives'

export const DEFAULT_ROADMAP_ITEM_TYPE: RoadmapItemType = 'tooling'

export const ROADMAP_ITEM_TYPE_META: Record<RoadmapItemType, { label: string; Icon: Icon }> = {
  node: { label: 'Node', Icon: CpuIcon },
  wallets: { label: 'Wallets', Icon: WalletIcon },
  sdk: { label: 'SDK', Icon: CodeIcon },
  tooling: { label: 'Tooling', Icon: WrenchIcon },
  integration: { label: 'Integration', Icon: PuzzlePieceIcon },
  discovery: { label: 'Discovery', Icon: CompassIcon },
  guidance: { label: 'Guidance', Icon: BookOpenIcon },
  partnership: { label: 'Partnership', Icon: HandshakeIcon },
  events: { label: 'Events', Icon: CalendarCheckIcon },
  growth: { label: 'Growth', Icon: ChartLineUpIcon },
  content: { label: 'Content', Icon: NewspaperIcon },
  dex: { label: 'DEX', Icon: ArrowsLeftRightIcon },
  bridging: { label: 'Bridging', Icon: GlobeHemisphereWestIcon },
  incentives: { label: 'Incentives', Icon: GiftIcon }
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
  label: string
  url: string
}

export interface RoadmapItem {
  title: string
  status: RoadmapStatus
  type: RoadmapItemType
  description: string
  button?: RoadmapButton
}
