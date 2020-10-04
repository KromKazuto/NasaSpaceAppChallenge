import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: '10px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    container: {
        display: 'flex'
    }
}))

export default function CardView() {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
        test()
    }

    const test = async () => {
        // var invocation = new XMLHttpRequest(),
        // url = 'http://queimadas.dgi.inpe.br/queimadas/dados-abertos/api/focos/?pais_id=33',
        // handler

        // invocation.open('GET', url, true)
        // invocation.onreadystatechange = handler
        // console.log('invocation', invocation)
        // console.log('onreadystatechange', invocation.onreadystatechange)
        // console.log('handler', handler)
        // invocation.send()


        // return handler

        // await fetch('http://queimadas.dgi.inpe.br/queimadas/dados-abertos/api/focos/?pais_id=33')
        //   .then(res => {
        //       console.log('res', res)
        //       return res.json()})
        //   .then((result) => {
        //         console.log('result', result)
        //         return result
        //     },
        //     (error) => {
        //       console.log('error', error)
        //     }
        //   )
      }

    // console.log('teste', test())

    return (
        <div className={classes.container}>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            N
                        </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Against Fire"
                    subheader="Ouctubre 04, 2020"
                />
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Wildfire's occurrence throughout the history of terrestrial life invites conjecture that fire must have had
                        pronounced evolutionary effects on most ecosystems' flora and fauna.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Most of the Earth's weather and air pollution resides in the troposphere, the part of the atmosphere
                        that extends from the surface of the planet to a height of about 10 kilometers (6 mi).
                    </Typography>
                    <Typography paragraph>
                        The European Forest Fire Information System (EFFIS) supports the services in charge of the protection of forests against 
                        fires in the EU countries and provides the European Commission services and the European Parliament with updated and reliable 
                        information on wildland fires in Europe. A number of specific applications are available through EFFIS:
                        Since 1998, EFFIS is supported by a network of experts from the countries in what is called the Expert Group on Forest Fires, which is registered 
                        under the Secretariat General of the European Commission.  Currently, this group consists on experts from 40 countries in European, 
                        Middle East and North African countries. In 2015, EFFIS became one of the components of the Emergency Management Services 
                        in the EU Copernicus program. The link to some of the most widely used applications is provided below. Additional applications 
                        such as the extension of EFFIS to the global level into a Global Wildfire Information System (GWIS) are available through the side "Applications" box.
                    </Typography>
                    <Typography paragraph>
                        The European Forest Fire Information System (EFFIS) supports the services in charge of the protection of forests against 
                        fires in the EU countries and provides the European Commission services and the European Parliament with updated and reliable 
                        information on wildland fires in Europe. A number of specific applications are available through EFFIS:
                        Since 1998, EFFIS is supported by a network of experts from the countries in what is called the Expert Group on Forest Fires, which is registered 
                        under the Secretariat General of the European Commission.  Currently, this group consists on experts from 40 countries in European, 
                        Middle East and North African countries. In 2015, EFFIS became one of the components of the Emergency Management Services 
                        in the EU Copernicus program. The link to some of the most widely used applications is provided below. Additional applications 
                        such as the extension of EFFIS to the global level into a Global Wildfire Information System (GWIS) are available through the side "Applications" box.
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}
