import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import styled, { keyframes } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'
import GatsbyImageWrapper from './GatsbyImageWrapper'

const COLUMN_SIZE = '280px'
const ROW_SIZE = '240px'
const COLUMN_SIZE_MOBILE = '120px'
const ROW_SIZE_MOBILE = '120px'
const GRID_GAP = '1.5rem'

interface ImageData {
  image: any
  name: string
  aspect: 'vertical' | 'horizontal' | 'square'
}

const CommunityMosaic = () => {
  const data = useStaticQuery(graphql`
    query CommunityImages {
      allFile(filter: { relativeDirectory: { eq: "pictures" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
          name
        }
      }
    }
  `)

  // Prepare images with aspect
  const images = data.allFile.nodes.map((node: any) => {
    const image = getImage(node.childImageSharp)
    const gatsbyData = node.childImageSharp.gatsbyImageData
    const width = gatsbyData.width
    const height = gatsbyData.height
    let aspect: 'vertical' | 'horizontal' | 'square' = 'square'
    if (height > width * 1.2) aspect = 'vertical'
    else if (width > height * 1.2) aspect = 'horizontal'
    return {
      image,
      name: node.name,
      aspect
    }
  })

  // Select tall images (portrait)
  const tallImages = images.filter((img: ImageData) => img.aspect === 'vertical').slice(0, 2)
  // Select big images (not portrait)
  const nonPortrait = images.filter((img: ImageData) => img.aspect !== 'vertical')
  const shuffled = [...nonPortrait].sort(() => Math.random() - 0.5)
  const bigImages = [shuffled[0], shuffled[1]]
  // Remaining images
  const usedNames = new Set([...tallImages, ...bigImages].map((img: ImageData) => img && img.name))
  const normalImages = images.filter((img: ImageData) => !usedNames.has(img.name))

  // Static grid positions for 2x10 grid
  const gridLayout = [
    // Big images (2x2)
    { row: 1, col: 1, rowSpan: 2, colSpan: 2, img: bigImages[0] },
    { row: 1, col: 7, rowSpan: 2, colSpan: 2, img: bigImages[1] },
    // Tall images (1x2)
    { row: 1, col: 3, rowSpan: 2, colSpan: 1, img: tallImages[0] },
    { row: 1, col: 9, rowSpan: 2, colSpan: 1, img: tallImages[1] },
    // Normal images (1x1)
    { row: 1, col: 4, rowSpan: 1, colSpan: 1, img: normalImages[0] },
    { row: 2, col: 4, rowSpan: 1, colSpan: 1, img: normalImages[1] },
    { row: 1, col: 5, rowSpan: 1, colSpan: 1, img: normalImages[2] },
    { row: 2, col: 5, rowSpan: 1, colSpan: 1, img: normalImages[3] },
    { row: 1, col: 6, rowSpan: 1, colSpan: 1, img: normalImages[4] },
    { row: 2, col: 6, rowSpan: 1, colSpan: 1, img: normalImages[5] },
    { row: 1, col: 10, rowSpan: 1, colSpan: 1, img: normalImages[6] },
    { row: 2, col: 10, rowSpan: 1, colSpan: 1, img: normalImages[7] },
    { row: 1, col: 11, rowSpan: 1, colSpan: 1, img: normalImages[8] },
    { row: 2, col: 11, rowSpan: 1, colSpan: 1, img: normalImages[9] }
  ]

  // Compute number of columns and rows from gridLayout
  const NUM_COLS = Math.max(...gridLayout.map((item) => item.col + item.colSpan - 1))
  const NUM_ROWS = Math.max(...gridLayout.map((item) => item.row + item.rowSpan - 1))

  // If not enough images, repeat normal images to fill the grid
  for (let i = 0; i < gridLayout.length; i++) {
    if (!gridLayout[i].img) {
      gridLayout[i].img = normalImages[i % normalImages.length]
    }
  }

  // Duplicate the grid for seamless scroll
  const renderGrid = (keyPrefix = '') =>
    gridLayout.map((item, idx) =>
      item.img ? (
        <ImageWrapper
          key={keyPrefix + item.img.name + idx}
          style={{
            gridColumn: `${item.col} / span ${item.colSpan}`,
            gridRow: `${item.row} / span ${item.rowSpan}`,
            width: '100%'
          }}
        >
          <GatsbyImageWrapper
            image={item.img.image}
            alt={`Community image ${idx + 1}`}
            style={{ height: '100%' }}
            objectFit="cover"
          />
        </ImageWrapper>
      ) : null
    )

  return (
    <MosaicScrollWrapper>
      <MosaicScrollTrack numCols={NUM_COLS} columnSize={COLUMN_SIZE}>
        <MosaicGrid columnSize={COLUMN_SIZE} rowSize={ROW_SIZE} numCols={NUM_COLS} numRows={NUM_ROWS}>
          {renderGrid('a-')}
        </MosaicGrid>
        <MosaicSpacer />
        <MosaicGrid columnSize={COLUMN_SIZE} rowSize={ROW_SIZE} numCols={NUM_COLS} numRows={NUM_ROWS}>
          {renderGrid('b-')}
        </MosaicGrid>
      </MosaicScrollTrack>
    </MosaicScrollWrapper>
  )
}

const MosaicScrollWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  padding: 2rem 0;

  -webkit-mask-image: linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent);
  mask-image: linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent);

  @media ${deviceBreakPoints.mobile} {
    -webkit-mask-image: linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent);
    mask-image: linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent);
  }
`

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`

const MosaicScrollTrack = styled.div<{ numCols: number; columnSize: string }>`
  display: flex;
  width: calc(
    2 *
      (
        (${(props) => props.numCols} * ${({ columnSize }) => columnSize}) + (${(props) => props.numCols} - 1) *
          ${GRID_GAP}
      )
  );
  animation: ${scroll} 100s linear infinite;
  @media ${deviceBreakPoints.mobile} {
    width: calc(
      2 * ((${(props) => props.numCols} * ${COLUMN_SIZE_MOBILE}) + (${(props) => props.numCols} - 1) * ${GRID_GAP})
    );
  }
`

const MosaicGrid = styled.div<{ columnSize: string; rowSize: string; numCols: number; numRows: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.numCols}, ${({ columnSize }) => columnSize});
  grid-template-rows: repeat(${(props) => props.numRows}, ${({ rowSize }) => rowSize});
  gap: ${GRID_GAP};
  align-items: stretch;
  min-width: calc(
    ${(props) => props.numCols} * ${({ columnSize }) => columnSize} + (${(props) => props.numCols} - 1) * ${GRID_GAP}
  );

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: repeat(${(props) => props.numCols}, ${COLUMN_SIZE_MOBILE});
    grid-template-rows: repeat(${(props) => props.numRows}, ${ROW_SIZE_MOBILE});
    min-width: calc(
      ${(props) => props.numCols} * ${COLUMN_SIZE_MOBILE} + (${(props) => props.numCols} - 1) * ${GRID_GAP}
    );
  }
`

const ImageWrapper = styled.div`
  border-radius: var(--radius-small);
  overflow: hidden;
  background: #222;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
`

const MosaicSpacer = styled.div`
  width: ${GRID_GAP};
  min-width: ${GRID_GAP};
  flex-shrink: 0;
`

export default CommunityMosaic
