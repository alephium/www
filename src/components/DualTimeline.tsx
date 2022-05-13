import styled from 'styled-components'
import { uniqBy } from 'lodash'

type Timeline = {
  title: string
  years: {
    year: string
    entries: {
      order: number
      text: string
      when: string
      isMajor: boolean
    }[]
  }[]
}

type Props = {
  timelines: Timeline[]
}

function sortMerge(as, bs) {
  const diff = (c, d) => c.order - d.order
  const aSorted = as.sort(diff)
  const bSorted = bs.sort(diff)

  const aNewList = aSorted.reduce((list, a) => bSorted.some((b) => b.order === a.order)
    ? [...list, [a, a]]
    : [...list, [a, undefined]]
  , [])
  const bNewList = bSorted.reduce((list, b) => aSorted.some((a) => a.order === b.order)
    ? [...list, [b, b]]
    : [...list, [undefined, b]]
  , [])
  const newList = aNewList.concat(bNewList).sort((a, b) => {
    if (a[0] !== undefined && b[0] !== undefined) return a[0].order - b[0].order
    if (a[1] !== undefined && b[1] !== undefined) return a[1].order - b[1].order
    if (a[0] !== undefined && b[1] !== undefined) return a[0].order - b[1].order
    return a[1].order - b[0].order
  })

  return uniqBy(newList, el => el[0] && el[0].order || el[1] && el[1].order)
}

const DualTimeline = ({ timelines }: Props) => {
  const headings = timelines.map((t) => t.title)

  return <Container>
    <Headings>
      { headings.map((text, index) => <Heading right={index % 2 == 0}>{ text }</Heading>) }
    </Headings>
    <LineStartsEnds starts headings={headings} />
    { timelines[0].years.map(({ year, entries }, index) => <>
      <Year value={year} headings={headings} />
      <Entries>
        { sortMerge(entries, timelines[1].years[index].entries).map(([entryA, entryB], index) =>
          <Pair>
            <Entry right>
              { entryA &&
                <Data right>
                  <Text>{ entryA.text }</Text>
                  <When>{ entryA.when }</When>
                </Data>
              }
              <Track>
                <HeadingTextForWidthExpansion>{ headings[0] }</HeadingTextForWidthExpansion>
                <Piece>{ entryA && <Dot /> }</Piece>
              </Track>
            </Entry>
            <Entry>
              <Track>
                <HeadingTextForWidthExpansion>{ headings[1] }</HeadingTextForWidthExpansion>
                <Piece>{ entryB && <Dot /> }</Piece>
              </Track>
              { entryB &&
                <Data>
                  <Text>{ entryB.text }</Text>
                  <When>{ entryB.when }</When>
                </Data>
              }
            </Entry>
          </Pair>
        )}
      </Entries>
    </>)}
    <LineStartsEnds ends headings={headings} />
  </Container>
}

const Container = styled.div`
  width: 100%;
`

const Text = styled.div``
const When = styled.div``

const Dot = styled.div`
  position: relative;
  left: -4px;
  top: -8px;

  ::after {
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: red;
    position: absolute;
    content: '';
    display: block;
  }
`

const YearLine = styled.div`
  height: 1px;
  background-color: grey;
  width: 100%;
  position: absolute;
  z-index: -1;
`

const Data = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${({ right }) => right ? 'right' : 'left'};
`

const Piece = styled.div`
  display: flex;
  align-items: center;
  width: 8px;
  height: 100%;
  background-color: blue;
`

const YearData = styled.div`
  width: 100%;
  padding-bottom: 2rem;
`

let Year = ({ value, headings }) =>
<Entries>
  <Pair>
    <Entry right>
      <YearData>{ value }</YearData>
      <Track>
        <HeadingTextForWidthExpansion>{ headings[0] }</HeadingTextForWidthExpansion>
        <Piece />
      </Track>
    </Entry>
    <Entry>
      <Track>
        <HeadingTextForWidthExpansion>{ headings[1] }</HeadingTextForWidthExpansion>
        <Piece />
      </Track>
    </Entry>
    <YearLine />
  </Pair>
</Entries>

Year = styled(Year)`
  position: sticky;
  top: 0;
  background: white;
  z-index: -1;
`

const LineStartsEnds = ({ headings, starts, ends }) =>
<Entries>
  <Pair>
    { headings.map((text, index) =>
      <Entry right={index % 2 == 0}>
        <Track>
          <HeadingTextForWidthExpansion>{ text }</HeadingTextForWidthExpansion>
          { (starts && <LineStart />) || (ends && <LineEnd />) || <LineEnd /> }
        </Track>
      </Entry>
    )}
  </Pair>
</Entries>

const LineEnd = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 0 0 50% 50%;
  background-color: green;
`

const LineStart = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50% 50% 0 0;
  background-color: green;
`

const HeadingTextForWidthExpansion = styled.div`
  visibility: hidden;
  height: 0;
  white-space: nowrap;
`

const Track = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`

const Entry = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: ${({ right }) => right ? 'right' : 'left'};
`

const Pair = styled.div`
  display: flex;
  gap: 36px;
  justify-content: center;
  align-items: center;
`

const Entries = styled.div`
  display: flex;
  width: 60%;
  margin: auto;
  justify-content: center;
  flex-direction: column;
`

const Headings = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  gap: 36px;
  justify-content: center;
`

const Heading = styled.div`
  width: 50%;
  margin-bottom: 1rem;
  text-align: ${({ right }) => right ? 'right' : 'left'};
`

export default DualTimeline
