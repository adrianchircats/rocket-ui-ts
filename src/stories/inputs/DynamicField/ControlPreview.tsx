// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { DynamicField, Typography } from 'components'
import { ControlType } from 'components/inputs/DynamicField/types'
import LinkTo from '@storybook/addon-links/react'
import { options } from '../Autocomplete/_mocks'
import { useContainerSizing, useDynamicProps } from './_hooks'
import { ControlData } from './_mocks'

type ControlPreviewProps = {
  controlType: ControlType
  [key: string]: any
}

const ControlPreview = ({ controlType, ...rest }: ControlPreviewProps) => {
  const [value, setValue] = useState<unknown>()

  const { controlValues, props, currentControlData, handlePropsChange } = useDynamicProps(controlType)
  const width = useContainerSizing()

  return (
    <Grid container alignItems={'center'} spacing={5} sx={{ width }}>
      <Grid item container justifyContent={'center'} xs={12} sm={currentControlData.props.length > 0 ? 6 : 12}>
        <DynamicField
          controlType={controlType}
          value={value}
          options={options}
          {...rest}
          {...props}
          onChange={newValue => setValue(newValue)}
        />
      </Grid>
      {currentControlData.props.length > 0 && (
        <Grid item container xs={12} sm={6} sx={{ gap: '.75rem', flexDirection: 'column' }}>
          <Typography fontWeight={700}>
            Options{' '}
            {currentControlData.link && (
              <>
                (for more, see <InfoLink link={currentControlData.link} />){' '}
              </>
            )}
            :
          </Typography>
          {currentControlData.props.map(({ name, type, label, options }) => (
            <DynamicField
              id={name}
              key={name}
              controlType={type}
              onChange={value => handlePropsChange(name, value)}
              label={label}
              options={options}
              value={controlValues[name]}
            />
          ))}
        </Grid>
      )}
    </Grid>
  )
}

export default ControlPreview

export const InfoLink = ({ link }: { link: ControlData['link'] }) => {
  const { label, kind, story, url } = link

  if (url)
    return (
      <a href={url} target="_blank">
        {label}
      </a>
    )
  if (kind && story)
    return (
      <LinkTo kind={kind} story={story}>
        {label}
      </LinkTo>
    )
  return <></>
}
