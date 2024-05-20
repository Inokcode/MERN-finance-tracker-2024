import {useUser} from '@clerk/clerk-react'
import { FinancialRecordForm } from './FinancialRecordForm';
export default function Dashboard() {
    const {user} = useUser();
  return (
    <div className="dashboard-container">
        <h1>Welcome {user?.firstName} Here Are Your Finance:</h1>
        <FinancialRecordForm/>
    </div>
  )
}
