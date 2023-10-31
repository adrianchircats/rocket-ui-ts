import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '../../../components'
import { ListFilterButtonsProps } from './types'
import { Grid, useMediaQuery, useTheme } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import PostAddIcon from '@mui/icons-material/PostAdd'

const ListFilterButtons = ({
   localizedStrings,
   visibleUserPreferences,
   downloadButtonVisible,
   downloadEnabled,
   hasVisibleFields,
   mdLengthButtons,
   onShowUserPreferencesModal,
   openExportMenu,
   openVisibleFieldsMenu
} : ListFilterButtonsProps) => {
  const theme = useTheme()
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
  
  return (
    <Grid container item xs={6} md={mdLengthButtons} spacing={1} wrap='nowrap' justifyContent={smallScreen ? 'flex-start' : 'flex-end'}>
    {visibleUserPreferences && (
      <Grid item xs={4}>
        <IconButton fontSize='medium' color="primary" aria-label='User Preferences' aria-description={localizedStrings.EditUserPreferences} tooltip={localizedStrings.EditUserPreferences} onClick={onShowUserPreferencesModal} >
          <PostAddIcon />
        </IconButton>
      </Grid>
    )}
    {downloadButtonVisible && (
      <Grid item xs={4}>
        <IconButton type='download' fontSize='medium' color='primary' aria-label={localizedStrings.Download} aria-disabled={!downloadEnabled} tooltip={localizedStrings.Download} onClick={openExportMenu} disabled={!downloadEnabled} />
      </Grid>
    )}
    {hasVisibleFields && (
      <Grid item xs={4}>
        <IconButton fontSize='medium' color='primary' aria-label='Visible Fields' aria-description={localizedStrings.ChooseFields} tooltip={localizedStrings.ChooseFields} onClick={openVisibleFieldsMenu} >
          <FilterListIcon />
        </IconButton>
      </Grid>
    )}
    </Grid>
  )
}

ListFilterButtons.propTypes = {
  localizedStrings: PropTypes.object.isRequired,
  visibleUserPreferences: PropTypes.bool,
  downloadButtonVisible: PropTypes.bool,
  downloadEnabled: PropTypes.bool,
  hasVisibleFields: PropTypes.bool,
  mdLengthButtons: PropTypes.number,
  onShowUserPreferencesModal: PropTypes.func,
  openExportMenu: PropTypes.func,
  openVisibleFieldsMenu: PropTypes.func
}

export default ListFilterButtons
