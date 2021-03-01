import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { withStyles } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import HomeIcon from "@material-ui/icons/Home"
import PeopleIcon from "@material-ui/icons/People"
import DnsRoundedIcon from "@material-ui/icons/DnsRounded"
import PermMediaOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActual"
import PublicIcon from "@material-ui/icons/Public"
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet"
import SettingsInputComponentIcon from "@material-ui/icons/SettingsInputComponent"
import TimerIcon from "@material-ui/icons/Timer"
import SettingsIcon from "@material-ui/icons/Settings"
import PhonelinkSetupIcon from "@material-ui/icons/PhonelinkSetup"

import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import EazeIcon from "../../assets/eaze_white_2x.png"

const categories = [
    {
        id: "WorkSpaces",
        children: [
            { id: "InnovaTap Pvt. Ltd.", icon: <PeopleIcon />, active: true },
            { id: "Eaze", icon: <DnsRoundedIcon /> },
            { id: "Ubitians Batch 2k17", icon: <PermMediaOutlinedIcon /> },
            { id: "Burger Restuarant", icon: <PublicIcon /> },
            { id: "Google Devs", icon: <SettingsEthernetIcon /> },
            { id: "PIAIC", icon: <SettingsInputComponentIcon /> },
        ],
    },
    {
        id: "Quality",
        children: [
            { id: "Analytics", icon: <SettingsIcon /> },
            { id: "Performance", icon: <TimerIcon /> },
            { id: "Test Lab", icon: <PhonelinkSetupIcon /> },
        ],
    },
]

const styles = (theme) => ({
    categoryHeader: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
        color: theme.palette.common.white,
    },
    item: {
        paddingTop: 1,
        paddingBottom: 1,
        color: "rgba(255, 255, 255, 0.7)",
        "&:hover,&:focus": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
        },
    },
    itemCategory: {
        backgroundColor: "#232f3e",
        boxShadow: "0 -1px 0 #404854 inset",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    firebase: {
        fontSize: 24,
        color: theme.palette.common.white,
    },
    itemActiveItem: {
        color: "#4fc3f7",
    },
    itemPrimary: {
        fontSize: "inherit",
    },
    itemIcon: {
        minWidth: "auto",
        marginRight: theme.spacing(2),
    },
    divider: {
        marginTop: theme.spacing(2),
    },
    eazeLogo: {
        // color: grey[300],
        width: "80px",
    },
})

function Navigator(props) {
    const { classes, ...other } = props

    function renderChildList(children) {
        return children.map(({ id: childId, icon, active }) => (
            <ListItem
                key={childId}
                button
                className={clsx(
                    classes.item,
                    active && classes.itemActiveItem,
                    classes.block
                )}
            >
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                <ListItemText
                    classes={{
                        primary: classes.itemPrimary,
                    }}
                >
                    {childId}
                </ListItemText>
            </ListItem>
        ))
    }

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem
                    className={clsx(
                        classes.firebase,
                        classes.item,
                        classes.itemCategory
                    )}
                >
                    <img src={EazeIcon} className={classes.eazeLogo} />
                </ListItem>

                {categories.map(({ id, children }) => (
                    <React.Fragment key={id}>
                        <Accordion style={{ backgroundColor: "#00000000" }}>
                            <AccordionSummary
                                style={{ color: "white" }}
                                expandIcon={
                                    <ExpandMoreIcon
                                        color="inherit"
                                        style={{ color: "white" }}
                                    />
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography color="inherit">{id}</Typography>
                            </AccordionSummary>

                            <AccordionDetails className={classes.categoryHeader}>
                                <List disablePadding>
                                    {renderChildList(children)}
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    </React.Fragment>
                ))}
            </List>
        </Drawer>
    )
}

Navigator.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navigator)
