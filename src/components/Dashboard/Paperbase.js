import React, { useState } from "react"
import PropTypes from "prop-types"
import { createMuiTheme, ThemeProvider, withStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Hidden from "@material-ui/core/Hidden"
import Typography from "@material-ui/core/Typography"
import {Link} from "react-router-dom"
import Navigator from "./Navigator"
import Content from "./Content"
import Header from "./Header"
import { useLocation } from "react-router-dom"

import { SERVER_BASE_URL } from "../../config"
import axios from "axios"

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" to="/">
               Eaze
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

let theme = createMuiTheme({
    palette: {
        primary: {
            light: "#63ccff",
            main: "#009be5",
            dark: "#006db3",
        },
    },
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
})

theme = {
    ...theme,
    overrides: {
        MuiDrawer: {
            paper: {
                backgroundColor: "#18202c",
            },
        },
        MuiButton: {
            label: {
                textTransform: "none",
            },
            contained: {
                boxShadow: "none",
                "&:active": {
                    boxShadow: "none",
                },
            },
        },
        MuiTabs: {
            root: {
                marginLeft: theme.spacing(1),
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: theme.palette.common.white,
            },
        },
        MuiTab: {
            root: {
                textTransform: "none",
                margin: "0 16px",
                minWidth: 0,
                padding: 0,
                [theme.breakpoints.up("md")]: {
                    padding: 0,
                    minWidth: 0,
                },
            },
        },
        MuiIconButton: {
            root: {
                padding: theme.spacing(1),
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 4,
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: "#404854",
            },
        },
        MuiListItemText: {
            primary: {
                fontWeight: theme.typography.fontWeightMedium,
            },
        },
        MuiListItemIcon: {
            root: {
                color: "inherit",
                marginRight: 0,
                "& svg": {
                    fontSize: 20,
                },
            },
        },
        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
    },
}

const drawerWidth = 256

const styles = {
    root: {
        display: "flex",
        minHeight: "100vh",
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    app: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
    },
    main: {
        flex: 1,
        padding: theme.spacing(6, 4),
        background: "#eaeff1",
    },
    footer: {
        padding: theme.spacing(2),
        background: "#eaeff1",
    },
}

function Paperbase(props) {
    const { classes } = props
    const [mobileOpen, setMobileOpen] = React.useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    console.log("Dashboard Rendered")

    const [data, setData] = useState({})
    const location = useLocation()
    React.useEffect(() => {
        if (location.pathname === "/dashboard") {
            axios
                .get(`${SERVER_BASE_URL}/dashboard`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                        "Content-Type": "application/json",
                    },
                })
                .then((result) => {
                    console.log(result)
                    
                    setData(result.data.success)
                })
                .catch(function (error) {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(error.response.data)
                        console.log(error.response.status)
                        console.log(error.response.headers)
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(error.request)
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log("Error", error.message)
                    }

                    console.log(error.config)
                    // alert(
                    //     "Somwthing went wrong with API\nCheck console log for details..."
                    // )
                })
        }
    }, [location])

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                <nav className={classes.drawer}>
                    <Hidden smUp implementation="js">
                        <Navigator
                            PaperProps={{ style: { width: drawerWidth } }}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                        />
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Navigator PaperProps={{ style: { width: drawerWidth } }} />
                    </Hidden>
                </nav>
                <div className={classes.app}>
                    <Header onDrawerToggle={handleDrawerToggle} />
                    <main className={classes.main}>
                        <Content />
                    </main>
                    <footer className={classes.footer}>
                        <Copyright />
                    </footer>
                </div>
            </div>
        </ThemeProvider>
    )
}

Paperbase.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Paperbase)
