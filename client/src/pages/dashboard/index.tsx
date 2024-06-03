import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./FinancialRecordForm";
import "./financialRecord.css";
import { FnancialRecordList } from "./FnancialRecordList";
export default function Dashboard() {
  const { user } = useUser();
  return (
    <div className="dashboard-container">
      <h1>Welcome {user?.firstName} Here Are Your Finance:</h1>
      <FinancialRecordForm />
      <FnancialRecordList />
    </div>
  );
}
