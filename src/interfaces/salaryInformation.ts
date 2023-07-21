export interface ISalaryInformation {
    Id: number;
    Employee_ID_Number: number;
    Monthly_Salary: number;
    Monthly_Money_Currency: string;
    monthly_Taxes: number;
    monthly_Deductions: number;
    monthly_Insurances: number;
    ms_From_Date_Day: number;
    ms_From_Date_Month: number;
    ms_From_Date_Year: number;
    ms_To_Date_Day: number;
    ms_To_Date_Month: number;
    ms_To_Date_Year: number;
    Weekly_Salary: number;
    Weekly_Money_Currency: string;
    weekly_Taxes: number;
    weekly_Deductions: number;
    weekly_Insurances: number;
    ws_From_Date_Day: number;
    ws_From_Date_Month: number;
    ws_From_Date_Year: number;
    ws_To_Date_Day: number;
    ws_To_Date_Month: number;
    ws_To_Date_Year: number;
}