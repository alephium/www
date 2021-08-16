import React, {FC} from 'react';
import styled from 'styled-components';

import TextTeaser from './TextTeaser'

interface FeedItemProps {
  IconComponent: FC
  title: string
  subtitle?: string
  link: string,
  className?: string
}


let FeedItem: FC<FeedItemProps> = ({ IconComponent, title, subtitle, link, children, className }) => (
  <div className={className}>
    <IconComponent />
    <TextTeaser title={title} subtitle={subtitle} link={link}>
      {children}
    </TextTeaser>
  </div>
)

FeedItem = styled(FeedItem)`
  display: flex;

  &:not(:last-child) {
    padding-bottom: var(--spacing-8);
    border-bottom: 1px solid var(--color-grey-dark-2);
  }

  &:not(:first-child) {
    padding-top: var(--spacing-8);
  }

  svg {
    width: var(--width-120);
    margin-right: var(--spacing-8);
  }
`

export default FeedItem;
