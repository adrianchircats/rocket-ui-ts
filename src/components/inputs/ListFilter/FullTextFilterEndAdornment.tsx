import React from 'react'
import PropTypes from 'prop-types'
import { FullTextFilterEndAdornmentProps } from './types'
import FilterListIcon from '@mui/icons-material/FilterList'
import { IconButton } from '../../../components'

const FullTextFilterEndAdornment = ({
  localizedStrings,
  resetTextFilter,
  expandFilters,
  expanded,
  openVisibleFiltersMenu,
  hasChildren,
  hasVisibleFilters
}: FullTextFilterEndAdornmentProps) => {
  return (
    <>
      <IconButton
        size="small"
        type="cancel"
        color="transparent"
        aria-label="Reset Filters"
        aria-description={localizedStrings.ResetFilters}
        tooltip={localizedStrings.ResetFilters}
        onClick={resetTextFilter}
      />
      {hasChildren && (
        <IconButton
          size="small"
          type={expanded ? 'expandLess' : 'expandMore'}
          color="transparent"
          aria-label="Show Filters"
          aria-description={localizedStrings.ShowFilters}
          tooltip={localizedStrings.ShowFilters}
          onClick={expandFilters}
        />
      )}
      {hasChildren && expanded && hasVisibleFilters && (
        <IconButton
          size="small"
          color="transparent"
          aria-label="Visible Filters"
          aria-description={localizedStrings.ChooseFilters}
          tooltip={localizedStrings.ChooseFilters}
          onClick={openVisibleFiltersMenu}
        >
          <FilterListIcon />
        </IconButton>
      )}
    </>
  )
}

FullTextFilterEndAdornment.propTypes = {
  localizedStrings: PropTypes.object.isRequired,
  resetTextFilter: PropTypes.func.isRequired,
  expandFilters: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  openVisibleFiltersMenu: PropTypes.func.isRequired,
  hasChildren: PropTypes.bool.isRequired,
  hasVisibleFilters: PropTypes.bool.isRequired
}

export default FullTextFilterEndAdornment
