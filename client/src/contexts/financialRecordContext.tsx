import { Children, createContext, useState } from "react";

interface FinanceRecord {
    id?:string
    userId: string;
    date: Date;
    description: string;
    amount: number;
    category:string;
    paymentMethod:string;
}

interface FinanceRecordContextType {
    records: FinanceRecord[];
    addRecord:(record:FinanceRecord) => void;
    // updateRecord: (id:string,newRecord:FinanceRecord)=> void;
    // deleteRecord:(id:string)=>void;
}

export const FinanceRecordContext =createContext<FinanceRecordContextType | undefined>(undefined);


export const FinanceRecordsProvider =({children}:{children:React.ReactNode}) => {

    const [records, setRecords] = useState<FinanceRecord[]>([]);

    const addRecord = () => {}
    
    return <FinanceRecordContext.Provider value={{records,addRecord}}>
        {children}
    </FinanceRecordContext.Provider>
}