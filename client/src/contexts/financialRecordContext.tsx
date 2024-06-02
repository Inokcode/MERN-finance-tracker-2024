import { createContext, useContext, useState } from "react";

interface FinanceRecord {
  id?: string;
  userId: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  paymentMethod: string;
}

interface FinanceRecordContextType {
  records: FinanceRecord[];
  addRecord: (record: FinanceRecord) => void;
  // updateRecord: (id:string,newRecord:FinanceRecord)=> void;
  // deleteRecord:(id:string)=>void;
}

export const FinanceRecordContext = createContext<
  FinanceRecordContextType | undefined
>(undefined);

export const FinanceRecordsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [records, setRecords] = useState<FinanceRecord[]>([]);

  const addRecord = async (record: FinanceRecord) => {
    const response = await fetch("http://localhost:3001/financialrecords", {
      method: "POST",
      body: JSON.stringify(record),
      headers: {
        "Content-Type": "application/json",
      },
    });

    try {
      if (response.ok) {
        const newRecord = await response.json();
        setRecords((prev) => [...prev, newRecord]);
      }
    } catch (error) {
      return error; //need modification
    }
  };

  return (
    <FinanceRecordContext.Provider value={{ records, addRecord }}>
      {children}
    </FinanceRecordContext.Provider>
  );
};

export const useFinancialRecords = () => {
  const context = useContext<FinanceRecordContextType | undefined>(
    FinanceRecordContext
  );

  if (!context) {
    throw new Error(
      "UseFinancialRecords must be used within a FinanacialRecordsProvider"
    );
  }

  return context;
};
