import styled from 'styled-components'

import SubheaderContent from '../../customPageComponents/SubheaderContent'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'

type PaletteKey = 'palette1' | 'palette2' | 'palette3' | 'palette4' | 'palette5' | 'palette6'

type Phase2Group = {
  label: string
  palette: PaletteKey
  items: {
    component: string
    role: string
  }[]
}

const phase2Groups: Phase2Group[] = [
  {
    label: 'Infra',
    palette: 'palette1',
    items: [
      {
        component: 'Scalable Layer 1',
        role: 'Speed, security, decentralisation and usability without tradeoffs'
      },
      {
        component: 'Blocks transaction fees burning',
        role: 'Deflationary pressure via usage'
      },
      {
        component: 'PoLW',
        role: 'Deflationary pressure via adoption'
      }
    ]
  },
  {
    label: 'Align',
    palette: 'palette5',
    items: [
      {
        component: 'Core dApp',
        role: 'Generate fees for LPs & ALPH stakers, also used for ALPH buybacks & burns.'
      },
      {
        component: 'Staked ALPH',
        role: 'Aligns participants around growth and governance'
      }
    ]
  },
  {
    label: 'Growth',
    palette: 'palette2',
    items: [
      {
        component: 'Composability',
        role: 'Improves capital efficiency and yields via cross dApps strategies'
      },
      {
        component: 'DAO Framework',
        role: 'Decentralizes ecosystem governance & growth'
      }
    ]
  }
]

const Phase2Section = () => (
  <SubpageSection>
    <TextElement>
      <h2>Phase Two: Activating Aligned Economics</h2>
      <p>
        With the infrastructure in place, Alephium enters its next chapter. This is where aligned economics, Core dApp,
        staking, composability and decentralization begin to connect, creating a self-sustaining ecosystem designed for
        long-term growth.
      </p>
    </TextElement>

    <SubheaderContent>
      <Phase2TableWrapper>
        <Phase2Table>
          <thead>
            <tr>
              <Phase2EmptyHeader aria-hidden="true" />
              <Phase2HeadCell scope="col">Component</Phase2HeadCell>
              <Phase2HeadCell scope="col">Role</Phase2HeadCell>
            </tr>
          </thead>
          <tbody>
            {phase2Groups.map((group, groupIndex) =>
              group.items.map((item, itemIndex) => (
                <Phase2Row key={`${group.label}-${item.component}`}>
                  {itemIndex === 0 && (
                    <Phase2GroupCell
                      rowSpan={group.items.length}
                      $palette={group.palette}
                      $isLastGroup={groupIndex === phase2Groups.length - 1}
                    >
                      <span>{group.label}</span>
                    </Phase2GroupCell>
                  )}
                  <Phase2ComponentCell $palette={group.palette}>{item.component}</Phase2ComponentCell>
                  <Phase2RoleCell>{item.role}</Phase2RoleCell>
                </Phase2Row>
              ))
            )}
          </tbody>
        </Phase2Table>
      </Phase2TableWrapper>
    </SubheaderContent>
  </SubpageSection>
)

export default Phase2Section

const Phase2TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`

const Phase2Table = styled.table`
  width: 100%;
  border-spacing: 0;
  min-width: 640px;
  background: transparent;
`

const Phase2HeadCell = styled.th`
  text-align: left;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textTertiary};
  padding: var(--spacing-2) var(--spacing-3);
  border-bottom: 1px solid ${({ theme }) => theme.borderPrimary};
`

const Phase2EmptyHeader = styled.th`
  width: 52px;
  padding: 0;
  border-bottom: 1px solid ${({ theme }) => theme.borderPrimary};
`

const Phase2ComponentCell = styled.td<{ $palette: PaletteKey }>`
  width: 30%;
  font-weight: 500;
  color: ${({ theme, $palette }) => theme[$palette]};
  padding: var(--spacing-3);
  vertical-align: top;
`

const Phase2RoleCell = styled.td`
  width: 70%;
  color: ${({ theme }) => theme.textPrimary};
  padding: var(--spacing-3);
  vertical-align: top;
`

const Phase2GroupCell = styled.th<{ $palette: PaletteKey; $isLastGroup?: boolean }>`
  position: relative;
  min-width: 42px;
  padding: var(--spacing-2) var(--spacing-1);
  vertical-align: middle;
  text-align: center;
  border-right: 1px solid ${({ theme }) => theme.borderPrimary};
  border-bottom: ${({ theme, $isLastGroup }) => ($isLastGroup ? 'none' : `1px solid ${theme.borderSecondary}`)};
  overflow: hidden;

  span {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-size: 0.75rem;
    font-weight: 500;
    color: ${({ theme }) => theme.background3};
    position: relative;
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme, $palette }) => `linear-gradient(180deg, ${theme[$palette]} 80%, transparent)`};
  }
`

const Phase2Row = styled.tr`
  td {
    border-bottom: 1px solid ${({ theme }) => theme.borderSecondary};
  }

  &:last-child td {
    border-bottom: none;
  }
`
