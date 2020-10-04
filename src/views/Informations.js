import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardView from './CardView'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex'
    }
}))

export default function RecipeReviewCard() {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false)

    return (
        <div className={classes.container}>
            <CardView />
            <CardView />
            <CardView />
            <CardView />
            <CardView />
        </div>
    )
}
