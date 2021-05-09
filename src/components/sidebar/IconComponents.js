import React, {Component} from 'react';
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
import DevicesOutlinedIcon from '@material-ui/icons/DevicesOutlined';
import KitchenOutlinedIcon from '@material-ui/icons/KitchenOutlined';
import RoomServiceOutlinedIcon from '@material-ui/icons/RoomServiceOutlined';
import WatchOutlinedIcon from '@material-ui/icons/WatchOutlined';
import CasinoOutlinedIcon from '@material-ui/icons/CasinoOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';

class IconComponents extends Component {
    components = {
        1: HomeWorkOutlinedIcon,
        2: DirectionsCarOutlinedIcon,
        3: DevicesOutlinedIcon,
        4: KitchenOutlinedIcon,
        5: RoomServiceOutlinedIcon,
        6: WatchOutlinedIcon,
        7: CasinoOutlinedIcon,
        8: PeopleAltOutlinedIcon,
        9: BusinessCenterOutlinedIcon,
        10: WorkOutlineOutlinedIcon
    };
    render() {
        const IconName = this.components[this.props.tag || '1'];
        return <IconName />
    }
}

export default IconComponents;