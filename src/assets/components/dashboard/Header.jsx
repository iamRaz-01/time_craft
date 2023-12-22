import '../../css/dashboard/header.css';
import { Taskbutton } from './Taskbutton';

function Header() {
    return (<div className='header'>
        <Taskbutton icon="add" text="Add Task" />
        <div className='profile-div'>
            <Taskbutton icon="notifications" text="Notifications" />
        </div>
    </div>)
}
export { Header }