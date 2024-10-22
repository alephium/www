import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { sortBy } from 'lodash'

import { deviceBreakPoints, deviceSizes } from '../styles/global-style'

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
            {sortMerge(entries, timelines[1]?.years[index]?.entries ?? []).map(([entryA, entryB], index) => (
              <Pair key={index}>
                <Entry right>
                  {entryA && (
                    <Data right hasBorder={entryA.isMajor && entryA.content}>
                      <Text isMajor={entryA?.isMajor}>{entryA.text}</Text>
                      <When>{entryA.when}</When>
                      {entryA.content && (
                        <DetailedContentList>
                          {entryA.content.map((item, index) => (
                            <ContentItem key={index}>{item}</ContentItem>
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
                    <Data hasBorder={entryB.isMajor && entryB.content}>
                      <Text isMajor={entryB.isMajor}>{entryB.text}</Text>
                      <When>{entryB.when}</When>
                      {entryB.content && (
                        <DetailedContentList>
                          {entryB.content.map((item, index) => (
                            <ContentItem key={index}>{item}</ContentItem>
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
  }, {})

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
                  <Track forHeading={[trackTitle]} entry={entry} />
                  <Data>
                    <Text isMajor={entry?.isMajor}>{entry.text}</Text>
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

const Year = ({ value, headings, isSingle }) =>
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

const LineStartsEnds = ({ headings, starts, ends, isSingle, height }) =>
  isSingle ? (
    headings.map((text, index) => (
      <Entry key={index}>
        <TrackContainer>
          <HeadingTextForWidthExpansion>{text}</HeadingTextForWidthExpansion>
          {(starts && <LineStart />) || (ends && <LineEnd />) || <LineExtra height={height} />}
        </TrackContainer>
      </Entry>
    ))
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

const Track = ({ forHeading, entry }) => (
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

const Text = styled.div`
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
  margin-top: var(--spacing-1);
`

const DetailedContentList = styled.ul`
  padding: 0 15px;
`

const ContentItem = styled.li`
  color: ${({ theme }) => theme.textSecondary};
  font-weight: var(--fontWeight-normal);
  margin-top: var(--spacing-1);
`

const Container = styled.div<{ detailed: boolean }>`
  width: 100vw;
  margin-bottom: var(--spacing-16);

  ${Text} {
    ${({ detailed }) =>
      !detailed &&
      css`
        background: linear-gradient(30deg, #1cc2ff 0%, #2a63ff 70%, #436cff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      `}
  }

  ${When} {
    ${({ detailed, theme }) =>
      !detailed &&
      css`
        color: ${theme.textPrimary};
      `}
  }
`

const Piece = styled.div`
  display: flex;
  align-items: center;
  width: 5px;
  height: 100%;
  background-color: ${({ theme }) => theme.textTertiary};
`

const Dot = styled.div`
  position: relative;
  left: -7px;
  top: calc((18px + 4px) / -2);

  ::after {
    width: 13px;
    height: 13px;
    transform: translateY(60%);
    border-radius: 100%;
    background: ${({ isMajor, theme }) => (isMajor ? '#2a8aff' : theme.textPrimary)};
    border: 3px solid black;
    position: absolute;
    content: '';
    display: block;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  }
`

const Data = styled.div<{ hasBorder?: boolean }>`
  display: flex;
  width: 300px;
  line-height: 22px;
  flex-direction: column;
  padding: var(--spacing-2);
  border-radius: 9px;
  margin: var(--spacing-2);
  background-color: ${({ theme }) => theme.bgSecondary};
  box-shadow: ${({ hasBorder }) => (hasBorder ? `0 0 10px 1px rgba(42, 138, 255, 0.5)` : 'none')};
  border: ${({ hasBorder }) => (hasBorder ? `1px solid rgb(42, 138, 255)` : 'none')};

  ${({ isSingle }) =>
    isSingle &&
    `
    position: relative;
    ${({ right }) => (right ? 'right: -3rem;' : 'left: -2rem')}
  `}

  @media ${deviceBreakPoints.smallMobile} {
    margin: var(--spacing-2) var(--spacing-2) 0 0;
  }
`

const LineExtra = styled.div`
  width: 5px;
  height: ${({ height }) => (height ? height : '8px')};
  background-color: ${({ theme }) => theme.textTertiary};
`

const LineEnd = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 0 0 50% 50%;
  background-color: ${({ theme }) => theme.textTertiary};
`

const LineStart = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50% 50% 0 0;
  background-color: ${({ theme }) => theme.textTertiary};
`

const HeadingTextForWidthExpansion = styled.div`
  visibility: hidden;
  height: 0;
  white-space: nowrap;
  font-weight: var(--fontWeight-semiBold);
  font-size: var(--fontSize-28);
`

const TrackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  width: ${trackWidth}px;
  min-width: ${trackWidth}px;
`

const Entry = styled.div`
  width: ${({ isSingle }) => (isSingle ? '100%' : '50%')};
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: ${({ right }) => (right ? 'right' : 'left')};
  font-weight: var(--fontWeight-semiBold);
  font-size: var(--fontSize-18);
`

const Pair = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Entries = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: center;
  flex-direction: column;
`

const yearSmallMobileBreakpoint = '(max-width: 510px)'
const yearRowPositionDesktop = '80px'
const yearRowPositionMobile = '70px'
const yearRowPositionSmallMobile = '110px'

const YearHeader = styled.div`
  position: sticky;
  display: flex;
  top: ${yearRowPositionDesktop};
  z-index: 3;
  height: ${headerHeight}px;
  background-color: ${({ theme }) => theme.bgTertiary};

  > * {
    flex: 1;
  }

  @media ${deviceBreakPoints.mobile} {
    top: ${yearRowPositionMobile};
  }

  @media ${yearSmallMobileBreakpoint} {
    top: ${yearRowPositionSmallMobile};
  }
`

const YearDate = styled.div`
  width: 100%;
  font-weight: var(--fontWeight-semiBold);
  font-size: var(--fontSize-28);
  padding: var(--spacing-3);

  @media ${deviceBreakPoints.ipad} {
    transform: translateX(calc(50vw - 50%));
    text-align: center;
  }

  @media ${deviceBreakPoints.smallMobile} {
    text-align: right;
    transform: none;
  }
`

const YearLine = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.separator};
  width: 100%;
  position: absolute;
  bottom: 0;
`

const Header = styled.div`
  display: flex;
  position: sticky;
  top: ${yearRowPositionDesktop};
  z-index: 4;

  @media ${deviceBreakPoints.mobile} {
    top: ${yearRowPositionMobile};
  }

  @media ${yearSmallMobileBreakpoint} {
    top: ${yearRowPositionSmallMobile};
  }
`

const Headings = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: calc(${trackWidth}px * 2);
  height: ${headerHeight}px;
`

const Heading = styled.div<{ right: boolean }>`
  text-align: ${({ right }) => (right ? 'right' : 'left')};
  font-weight: var(--fontWeight-semiBold);
  font-size: var(--fontSize-28);
  flex: 1;

  @media ${deviceBreakPoints.smallMobile} {
    padding-top: var(--spacing-8);
  }
`

const HeaderStickyBackground = styled.div`
  position: sticky;
  top: ${yearRowPositionDesktop};
  width: 100%;
  height: ${headerHeight}px;
  z-index: 1;
  backdrop-filter: blur(20px);

  @media ${deviceBreakPoints.mobile} {
    top: ${yearRowPositionMobile};
  }

  @media ${yearSmallMobileBreakpoint} {
    top: ${yearRowPositionSmallMobile};
  }
`

function sortMerge(as: TimelineEntry[], bs: TimelineEntry[]) {
  const numberOfRows = [...as, ...bs].reduce(
    (largestOrder, item) => (item.row > largestOrder ? item.row : largestOrder),
    0
  )

  const aSorted = sortBy(as, 'row')
  const bSorted = sortBy(bs, 'row')

  return Array.from({ length: numberOfRows }, (_, index) => {
    const row = index + 1
    const a = aSorted.find((a) => a.row === row)
    const b = bSorted.find((b) => b.row === row)

    return [a, b]
  })
}

export default DualTimeline
