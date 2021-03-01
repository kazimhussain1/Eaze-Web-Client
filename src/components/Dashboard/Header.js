import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import HelpIcon from "@material-ui/icons/Help"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import Link from "@material-ui/core/Link"
import MenuIcon from "@material-ui/icons/Menu"
import NotificationsIcon from "@material-ui/icons/Notifications"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import Toolbar from "@material-ui/core/Toolbar"
import Tooltip from "@material-ui/core/Tooltip"
import TextField from "@material-ui/core/TextField"
import InputAdornment from "@material-ui/core/InputAdornment"
import Typography from "@material-ui/core/Typography"
import { orange } from "@material-ui/core/colors"
import { withStyles } from "@material-ui/core/styles"
import SearchIcon from "@material-ui/icons/Search"

const lightColor = "rgba(255, 255, 255, 0.7)"

const styles = (theme) => ({
    secondaryBar: {
        zIndex: 0,
    },
    menuButton: {
        marginLeft: -theme.spacing(1),
    },
    iconButtonAvatar: {
        padding: 4,
    },
    link: {
        textDecoration: "none",
        color: lightColor,
        "&:hover": {
            color: theme.palette.common.white,
        },
    },
    button: {
        borderColor: lightColor,
    },

    searchInput: {
        fontSize: theme.typography.fontSize,
        color: "#FFF",
    },
})

function Header(props) {
    const { classes, onDrawerToggle } = props

    return (
        <React.Fragment>
            <AppBar
                style={{
                    backgroundColor: "#00000000",
                    background:
                        "linear-gradient(90deg, rgba(252,138,7,1) 44%, rgba(255,64,0,1) 100%)",
                }}
                position="sticky"
                elevation={0}
            >
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Hidden smUp>
                            <Grid item>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={onDrawerToggle}
                                    className={classes.menuButton}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                        </Hidden>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                placeholder="Search by email address, phone number, or user UID"
                                InputProps={{
                                    disableUnderline: true,
                                    className: classes.searchInput,

                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>

                        <Grid item>
                            <Tooltip title="Alerts • No alerts">
                                <IconButton color="inherit">
                                    <NotificationsIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <IconButton
                                color="inherit"
                                className={classes.iconButtonAvatar}
                            >
                                <Avatar
                                    src="/static/images/avatar/1.jpg"
                                    alt="My Avatar"
                                />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {/* <AppBar
                component="div"
                className={classes.secondaryBar}
                color="primary"
                position="static"
                elevation={0}
            >
                <Toolbar></Toolbar>
            </AppBar> */}
        </React.Fragment>
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    onDrawerToggle: PropTypes.func.isRequired,
}

export default withStyles(styles)(Header)
