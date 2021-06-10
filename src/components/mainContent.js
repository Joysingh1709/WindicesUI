import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { WindicesTheme as wTheme } from '../shared/WindicesTheme';
import AddIcon from '@material-ui/icons/Add';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import avatarimage from '../shared/avatar.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    navLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 'auto'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    inline: {
        display: 'inline',
        fontWeight: 'bold'
    },
    subText: {
        display: 'inline',
        fontWeight: wTheme.Body.fontWeight,
        color: '#00000070'
    },
    toolbar: {
        padding: theme.spacing(0)
    },
    wrapper: {
        flex: 1,
        width: '100%',
        margin: 'auto'
    },
    container: {
        width: 'unset',
        flexWrap: 'wrap',
        display: 'flex',
        gap: 20,
        flexDirection: 'row',
        padding: theme.spacing(2.5, 0)
    },
    cardListTeam: {
        flex: '1.4 1 0',
        flexDirection: 'column',
        padding: theme.spacing(1, 2),
        alignItems: 'center',
        borderRadius: 20,
        minWidth: 264,
        maxHeight: 264,
        cursor: 'pointer'
    },
    cardListChat: {
        flex: '1 1 0',
        flexDirection: 'column',
        padding: theme.spacing(1, 2),
        alignItems: 'center',
        borderRadius: 20,
        minWidth: 264,
        maxHeight: 264,
        cursor: 'pointer'
    },
    cardListEmail: {
        flex: '2 1 0',
        flexDirection: 'column',
        padding: theme.spacing(1, 2),
        alignItems: 'center',
        borderRadius: 20,
        minWidth: 264,
        height: 400,
        cursor: 'pointer'
    },
    cardListCompanyG: {
        flex: '2 1 0',
        flexDirection: 'column',
        padding: theme.spacing(1, 2),
        alignItems: 'center',
        borderRadius: 20,
        minWidth: 400,
        maxWidth: 680,
        height: 400,
        cursor: 'pointer'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%'
    }
}));

function Team() {
    return (
        <div>
            <div>Hello from Team component</div>
        </div>
    )
}

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Card
                style={{ boxShadow: '0px 0px 28px -6px rgba(35,41,196,0.24)' }}
                className={classes.cardListTeam}>
                <CardContent className={classes.card}>
                    <Typography variant="h5" component="h2">Add Teammates</Typography>
                    <IconButton size="medium" style={{
                        border: '#2329c4 2px solid',
                        borderStyle: 'dashed'
                    }}>
                        <AddIcon style={{ color: '#2329c4' }} fontSize='large' />
                    </IconButton>
                    <Typography className={classes.pos} color="textSecondary">
                        Give access through Email address and alot tasks</Typography>
                </CardContent>
            </Card>
            <Card
                style={{ boxShadow: '0px 0px 28px -6px rgba(35,41,196,0.24)' }}
                className={classes.cardListChat}>
                <CardContent className={classes.card}>
                    <Typography variant="h5" component="h2">Chat</Typography>
                    <ChatBubbleOutlineIcon style={{ color: '#2329c4' }} fontSize='large' />
                    <Typography className={classes.pos} color="textSecondary">
                        Chat with your teammates</Typography>
                </CardContent>
            </Card>
            <Card
                style={{ boxShadow: '0px 0px 28px -6px rgba(35,41,196,0.24)' }}
                className={classes.cardListEmail}>
                <CardContent className={classes.card}>
                    <Typography variant="h5" component="h2">E-Mails</Typography>
                    <MailOutlineIcon style={{ color: '#2329c4' }} fontSize='large' />
                    <Typography className={classes.pos} color="textSecondary">
                        See notifications infront of your eyes so that you do not miss any</Typography>
                </CardContent>
            </Card>
            {/* <Card
                style={{ boxShadow: '0px 0px 28px -6px rgba(35,41,196,0.24)' }}
                className={classes.cardListCompanyG}>
                <CardContent className={classes.card}>
                    <Typography variant="h5" component="h2">Company Growth</Typography>
                    <MailOutlineIcon style={{ color: '#2329c4' }} fontSize='large' />
                    <Typography className={classes.pos} color="textSecondary">
                        See notifications infront of your eyes so that you do not miss any</Typography>
                </CardContent>
            </Card> */}
        </div>
    );
}

export default function MainContent() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" elevation={0} style={{ backgroundColor: 'transparent', color: '#000' }}>
                <Toolbar className={classes.toolbar}>

                    <List className={clsx(classes.root, classes.navLeft)}>
                        <ListItem alignItems="flex-start">
                            {/* style={{ width: 'unset' }} */}
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={avatarimage} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >Hello, Lorem!</Typography>
                                    </React.Fragment>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.subText}
                                            color="textPrimary"
                                        >Founder, CEO</Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <Typography variant="body2" className={classes.title}>XX/MM/YYYY <ExpandMoreIcon /></Typography>
                        </ListItem>
                    </List>
                    <div>
                        <IconButton style={{ margin: '0 10px', boxShadow: '4px 4px 4px 0px rgba(0,0,0,0.30),-4px -4px 4px 0px rgba(255,255,255,0.40)' }}>
                            <ChatBubbleOutlineIcon style={{ color: '#2329c4' }} />
                        </IconButton>
                        <IconButton style={{ margin: '0 10px', boxShadow: '4px 4px 4px 0px rgba(0,0,0,0.30),-4px -4px 4px 0px rgba(255,255,255,0.40)' }}>
                            <NotificationsNoneIcon style={{ color: '#2329c4' }} />
                        </IconButton>
                        <IconButton style={{ margin: '0 10px', boxShadow: '4px 4px 4px 0px rgba(0,0,0,0.30),-4px -4px 4px 0px rgba(255,255,255,0.40)' }}>
                            <SearchIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>


            <div className={classes.wrapper}>
                <Switch>
                    <Route exact path="/home" component={Home}>
                        <Home />
                    </Route>
                    <Route path="/team">
                        <Team />
                    </Route>
                </Switch>
            </div>
        </div >
    );

}