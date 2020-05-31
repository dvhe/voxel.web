import { Rooms } from '../core/interfaces/rooms.interfaces';

const Rooms = (props: Rooms) => {
    const link = `/rooms/${props.id}`;
    return (
        <a className="box-border mx-4 mt-3" href={link}>
            <div className="room-wrapper room-no-icon rounded-full">V</div>
        </a>
    )
}

export default Rooms;