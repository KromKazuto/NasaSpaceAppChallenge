import React, {useEffect, useState} from 'react'
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
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Link from '@material-ui/core/Link';
import Inpe from '../controllers/Inpe';

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
        border: '1px solid #111',
    },
    container: {
        display: 'flex'
    }
}))

export default function CardView() {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)
    const [locationList, setLocationList] = useState([]);

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    useEffect(() => {
        const loadAll = async () => {
            // Pegando localização
            let location = await Inpe.getLocation();
            setLocationList(location);
        }
        loadAll();
    },[]);

    function handleSelectChange(e, obj) {
        var textField = document.createElement('textarea');
        textField.innerText = `https://www.google.com/maps/@${locationList[0].latitude},${locationList[0].longitude}z`;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
    }

    return (
        locationList && locationList[0] ?
        <div className={classes.container}>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" src="icon.jpg" className={classes.avatar}>
                        </Avatar>
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
                    <Tooltip title="Copiar localização">
                        <IconButton aria-label="copy" onClick={handleSelectChange}>
                            <FileCopyIcon />
                        </IconButton>
                    </Tooltip>
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
                    <Typography>
                        <Link href={`https://www.google.com/maps/@${locationList[0].latitude},${locationList[0].longitude}z`}>
                            Local do incidente
                        </Link>
                    </Typography>
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
        :
        <div/>
    )
}
