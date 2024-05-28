import mongoose from 'mongoose';

interface FinanceRecord {
    userId: string;
    date: Date;
    description: string;
    amount: number;
    category:string;
    paymentMethod:string;
}

const financialRecordSchema = new mongoose.Schema<FinanceRecord>({
    userId:{type:String, required:true},
    date:{type:Date,required:true},
    description:{type:String,required:true},
    amount:{type:Number,required:true},
    category:{type:String,required:true},
    paymentMethod:{type:String,required:true},
});

const FinanceRecordModel = mongoose.model<FinanceRecord>("FinanceRecord",financialRecordSchema);

export default FinanceRecordModel;