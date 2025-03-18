export interface PcRentalHistory {
    pcNumber: string,
    name: string,
    empNo: string,
    rentalDate: string,
    returnDate: string | null
}

export interface PcBreakHistory {
    pcNumber: string,
    issue: string,
    description: string,
    repairStartDate: string,
    repairEndDate: string | null,
    note: string
}
