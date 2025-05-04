import { sortBy } from 'lodash'
import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import { deviceSizes } from '../styles/global-style'

type TimelineEntry = {
  row: number
  text: string
  content?: {
    text: string
  }[]
  when: string
  isMajor: boolean
}

export type Timeline = {
  title: string
  years: {
    year: string
    entries?: TimelineEntry[]
  }[]
}

type Props = {
  timelines: Timeline[]
  detailed: boolean
}

type LineStartsEndsProps = {
  headings: string[]
  starts?: boolean
  ends?: boolean
  isSingle?: boolean
  height?: number
}

type YearProps = {
  value: string
  headings: string[]
  isSingle?: boolean
}

type TrackProps = {
  forHeading: string
  entry?: TimelineEntry
}

type EntryProps = {
  right?: boolean
  isSingle?: boolean
}

type DataProps = {
  right?: boolean
  hasBorder?: boolean
}

type TextProps = {
  isMajor?: boolean
}

const DualTimeline = ({ timelines, detailed }: Props) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const event: [string, EventListenerOrEventListenerObject] = [
      'resize',
      () => setIsMobile(window.innerWidth <= deviceSizes.smallMobile)
    ]

    setIsMobile(window.innerWidth <= deviceSizes.smallMobile)
    window.addEventListener(...event)
    return () => window.removeEventListener(...event)
  }, [setIsMobile])

  const filteredTimelines = detailed ? timelines : filterMajorEvents(timelines)

  return isMobile ? (
    <DualTimelineMobile timelines={filteredTimelines} detailed={detailed} />
  ) : (
    <DualTimelineDesktop timelines={filteredTimelines} detailed={detailed} />
  )
}

const DualTimelineDesktop = ({ timelines, detailed }: Props) => {
  const headings = timelines.map((t) => t.title)

  return (
    <Container detailed={detailed}>
      <Header>
        <Headings>
          {headings.map((text, index) => (
            <Heading key={index} right={index % 2 == 0}>
              {text}
            </Heading>
          ))}
        </Headings>
      </Header>
      <HeaderStickyBackground />
      <LineStartsEnds starts headings={headings} />
      {timelines[0].years.map(({ year, entries }, index) => (
        <section key={year}>
          <Year value={year} headings={headings} />
          <Entries>
            {sortMerge(entries || [], timelines[1]?.years[index]?.entries || []).map(([entryA, entryB], index) => (
              <Pair key={index}>
                <Entry right>
                  {entryA && (
                    <Data right hasBorder={entryA.isMajor && !!entryA.content}>
                      <Text isMajor={entryA.isMajor}>{entryA.text}</Text>
                      <When>{entryA.when}</When>
                      {entryA.content && (
                        <DetailedContentList>
                          {entryA.content.map((item, index) => (
                            <ContentItem key={index}>{item.text}</ContentItem>
                          ))}
                        </DetailedContentList>
                      )}
                    </Data>
                  )}
                  <Track forHeading={headings[0]} entry={entryA} />
                </Entry>
                <Entry>
                  <Track forHeading={headings[1]} entry={entryB} />
                  {entryB && (
                    <Data hasBorder={entryB.isMajor && !!entryB.content}>
                      <Text isMajor={entryB.isMajor}>{entryB.text}</Text>
                      <When>{entryB.when}</When>
                      {entryB.content && (
                        <DetailedContentList>
                          {entryB.content.map((item, index) => (
                            <ContentItem key={index}>{item.text}</ContentItem>
                          ))}
                        </DetailedContentList>
                      )}
                    </Data>
                  )}
                </Entry>
              </Pair>
            ))}
          </Entries>
        </section>
      ))}
      <LineStartsEnds headings={headings} />
      <LineStartsEnds ends headings={headings} />
    </Container>
  )
}

const DualTimelineMobile = ({ timelines, detailed }: Props) => {
  const years = timelines.reduce((years, timeline, index) => {
    timeline.years.forEach(({ year, entries }) => {
      if (years[year] === undefined) {
        years[year] = []
      }
      years[year][index] = { title: timeline.title, entries }
    })
    return years
  }, {} as Record<string, { title: string; entries?: TimelineEntry[] }[]>)

  // The track will be 3 'm' length, exactly how "3em" works 🙂
  const trackTitle = 'mmm'

  return (
    <Container detailed={detailed}>
      <LineStartsEnds isSingle starts headings={[trackTitle]} />
      {Object.entries(years).map(([year, values]) => (
        <div key={year}>
          <Year value={year} headings={[trackTitle]} isSingle />
          {values.map(({ title, entries }) => (
            <div key={title}>
              {entries && (
                <>
                  <Entries>
                    <Entry>
                      <Track forHeading={trackTitle} />
                      <Heading isSingle>{title}</Heading>
                    </Entry>
                  </Entries>
                </>
              )}
              {entries?.map((entry, index) => (
                <Entry isSingle key={index}>
                  <Track forHeading={trackTitle} entry={entry} />
                  <Data>
                    <Text isMajor={entry.isMajor}>{entry.text}</Text>
                    <When>{entry.when}</When>
                  </Data>
                </Entry>
              ))}
            </div>
          ))}
        </div>
      ))}
      <LineStartsEnds isSingle headings={[trackTitle]} />
      <LineStartsEnds isSingle ends headings={[trackTitle]} />
    </Container>
  )
}

const Year = ({ value, headings, isSingle }: YearProps) =>
  !isSingle ? (
    <YearHeader>
      <Pair>
        <Entry right>
          <YearDate>{value}</YearDate>
          <Track forHeading={headings[0]} />
        </Entry>
        <Entry>
          <Track forHeading={headings[1]} />
        </Entry>
        <YearLine />
      </Pair>
    </YearHeader>
  ) : (
    <YearHeader>
      <Entry>
        <Track forHeading={headings[0]} />
        <YearDate>{value}</YearDate>
      </Entry>
      <YearLine />
    </YearHeader>
  )

const LineStartsEnds = ({ headings, starts, ends, isSingle, height }: LineStartsEndsProps) =>
  isSingle ? (
    <>
      {headings.map((text, index) => (
        <Entry key={index}>
          <TrackContainer>
            <HeadingTextForWidthExpansion>{text}</HeadingTextForWidthExpansion>
            {(starts && <LineStart />) || (ends && <LineEnd />) || <LineExtra height={height} />}
          </TrackContainer>
        </Entry>
      ))}
    </>
  ) : (
    <Entries>
      <Pair>
        {headings.map((text, index) => (
          <Entry right={index % 2 == 0} key={index}>
            <TrackContainer>
              <HeadingTextForWidthExpansion>{text}</HeadingTextForWidthExpansion>
              {(starts && <LineStart />) || (ends && <LineEnd />) || <LineExtra height={height} />}
            </TrackContainer>
          </Entry>
        ))}
      </Pair>
    </Entries>
  )

const Track = ({ forHeading, entry }: TrackProps) => (
  <TrackContainer>
    <HeadingTextForWidthExpansion>{forHeading}</HeadingTextForWidthExpansion>
    <Piece>{entry && <Dot isMajor={entry.isMajor} />}</Piece>
  </TrackContainer>
)

const filterMajorEvents = (timelines: Timeline[]): Timeline[] =>
  timelines.map((timeline) => ({
    ...timeline,
    years: timeline.years.map((year) => ({
      ...year,
      entries: year.entries?.filter((entry) => entry.isMajor)
    }))
  }))

const headerHeight = 60
const trackWidth = 90

const Text = styled.div<TextProps>`
  ${({ isMajor }) =>
    isMajor &&
    css`
      background: linear-gradient(30deg, #1cc2ff 0%, #2a63ff 70%, #436cff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `}
`

const When = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  font-weight: var(--fontWeight-normal);
`

const Container = styled.div<{ detailed: boolean }>`
  position: relative;
  padding: 0 var(--spacing-4);
  margin: 0 auto;
  max-width: var(--page-width);
  padding-bottom: var(--spacing-16);
`

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;
  height: ${headerHeight}px;
  background-color: ${({ theme }) => theme.background1};
`

const HeaderStickyBackground = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;
  height: ${headerHeight}px;
  background-color: ${({ theme }) => theme.background1};
`

const Headings = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 var(--spacing-4);
  height: 100%;
  align-items: center;
`

const Heading = styled.div<{ right?: boolean; isSingle?: boolean }>`
  color: ${({ theme }) => theme.textPrimary};
  font-weight: var(--fontWeight-medium);
  font-size: var(--fontSize-18);
  text-align: ${({ right }) => (right ? 'right' : 'left')};
  width: ${({ isSingle }) => (isSingle ? '100%' : '50%')};
`

const YearHeader = styled.div`
  margin: var(--spacing-8) 0;
`

const YearDate = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  font-weight: var(--fontWeight-medium);
  font-size: var(--fontSize-18);
  margin-bottom: var(--spacing-2);
`

const YearLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: ${({ theme }) => theme.borderPrimary};
`

const Entries = styled.div`
  position: relative;
  margin: var(--spacing-4) 0;
`

const Pair = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`

const Entry = styled.div<EntryProps>`
  position: relative;
  width: ${({ isSingle }) => (isSingle ? '100%' : '50%')};
  padding: ${({ isSingle }) => (isSingle ? '0' : '0 var(--spacing-4)')};
  text-align: ${({ right }) => (right ? 'right' : 'left')};
`

const Data = styled.div<DataProps>`
  position: relative;
  padding: var(--spacing-2);
  border-radius: 9px;
  margin: var(--spacing-2);
  background-color: ${({ theme }) => theme.surface2};
  box-shadow: ${({ hasBorder }) => (hasBorder ? `0 0 10px 1px rgba(42, 138, 255, 0.5)` : 'none')};
  border: ${({ hasBorder }) => (hasBorder ? `1px solid rgb(42, 138, 255)` : 'none')};
`

const TrackContainer = styled.div`
  position: relative;
  width: ${trackWidth}px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeadingTextForWidthExpansion = styled.div`
  position: absolute;
  visibility: hidden;
  white-space: nowrap;
`

const Piece = styled.div`
  position: relative;
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.borderPrimary};
`

const Dot = styled.div<{ isMajor: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme, isMajor }) => (isMajor ? theme.palette1 : theme.textPrimary)};
`

const LineStart = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 50%;
  background-color: ${({ theme }) => theme.borderPrimary};
`

const LineEnd = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 50%;
  background-color: ${({ theme }) => theme.borderPrimary};
`

const LineExtra = styled.div<{ height?: number }>`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  background-color: ${({ theme }) => theme.borderPrimary};
`

const DetailedContentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: var(--spacing-2) 0 0 0;
`

const ContentItem = styled.li`
  color: ${({ theme }) => theme.textSecondary};
  font-size: var(--fontSize-14);
  margin-bottom: var(--spacing-1);
`

function sortMerge(as: TimelineEntry[], bs: TimelineEntry[]) {
  const a = as.map((a) => ({ ...a, row: a.row || 0 }))
  const b = bs.map((b) => ({ ...b, row: b.row || 0 }))
  const sorted = sortBy([...a, ...b], ['row'])
  const pairs: [TimelineEntry | undefined, TimelineEntry | undefined][] = []
  for (let i = 0; i < sorted.length; i += 2) {
    pairs.push([sorted[i], sorted[i + 1]])
  }
  return pairs
}

export default DualTimeline
