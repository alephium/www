import styled, { useTheme } from 'styled-components'
import Card from '../../components/Card'

interface TrackCardProp {
  title: string
  description: string
  className?: string
}

const TrackCard = ({ title, description, className }: TrackCardProp) => {
  const theme = useTheme()
  return (
    <Card className={className} borderColor={theme.bgPrimary} thickBorders bgColor={theme.bgSecondary}>
      <h2>{title}</h2>
      <p>{description}</p>
    </Card>
  )
}

export default styled(TrackCard)`
  padding: var(--spacing-4);
`
