import '../../css/dashboard/dashboard.css';
import { Header } from './Header';
import { TaskStatus } from './TaskStatus';

function Dashboard() {

    return (<div className="dashboard">
        <Header />
        <TaskStatus />




    </div>)
}

export { Dashboard }