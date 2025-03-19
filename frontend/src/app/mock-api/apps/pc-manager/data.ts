import { Pc } from "./pc.model"
import { PcRentalHistory, PcBreakHistory } from "./pc-history.model"

export const pcs: Pc[] = [
    {
        pcNumber: "tomato001",
        modelNumber: "20Q8S0CC00",
        manufacturer: "LENOVO",
        dateOfPurchase: "2024/01/01",
        status: "正常",
        rentalStatus: "使用中",
        empId: "emp#e0000001-1111-1111-1111-111111111111",
        spec: {
            cpu: {
                manufacturer: "intel",
                model: "Core i7-13700k",
                core: "8"
            },
            ram: {
                size: "16GB",
                type: "DDR4"
            },
            display: {
                size: "15.6inch",
                type: "OLED"
            },
            storage: {
                size: "256GB",
                type: "SSD"
            },
            os: "windows 11"
        }
    },
    {
        pcNumber: "tomato002",
        modelNumber: "20Q8S0CC00",
        manufacturer: "LENOVO",
        dateOfPurchase: "2024/01/01",
        status: "正常",
        rentalStatus: "使用中",
        empId: "emp#e0000001-1111-1111-1111-111111111111",
        spec: {
            cpu: {
                manufacturer: "intel",
                model: "Core i7-13700k",
                core: "8"
            },
            ram: {
                size: "16GB",
                type: "DDR4"
            },
            display: {
                size: "15.6inch",
                type: "OLED"
            },
            storage: {
                size: "256GB",
                type: "SSD"
            },
            os: "windows 11"
        }
    },
    {
        pcNumber: "tomato003",
        modelNumber: "20Q8S0CC00",
        manufacturer: "LENOVO",
        dateOfPurchase: "2024/01/01",
        status: "正常",
        rentalStatus: "可能",
        empId: "",
        spec: {
            cpu: {
                manufacturer: "intel",
                model: "Core i7-13700k",
                core: "8"
            },
            ram: {
                size: "16GB",
                type: "DDR4"
            },
            display: {
                size: "15.6inch",
                type: "OLED"
            },
            storage: {
                size: "256GB",
                type: "SSD"
            },
            os: "windows 11"
        }
    },
    {
        pcNumber: "tomato004",
        modelNumber: "20Q8S0CC00",
        manufacturer: "LENOVO",
        dateOfPurchase: "2024/01/01",
        status: "正常",
        rentalStatus: "使用中",
        empId: "emp#e0000001-1111-1111-1111-111111111111",
        spec: {
            cpu: {
                manufacturer: "intel",
                model: "Core i7-13700k",
                core: "8"
            },
            ram: {
                size: "16GB",
                type: "DDR4"
            },
            display: {
                size: "15.6inch",
                type: "OLED"
            },
            storage: {
                size: "256GB",
                type: "SSD"
            },
            os: "windows 11"
        }
    },
    {
        pcNumber: "tomato005",
        modelNumber: "20Q8S0CC00",
        manufacturer: "LENOVO",
        dateOfPurchase: "2024/01/01",
        status: "故障",
        rentalStatus: "不可",
        empId: "emp#e0000001-1111-1111-1111-111111111111",
        spec: {
            cpu: {
                manufacturer: "intel",
                model: "Core i7-13700k",
                core: "8"
            },
            ram: {
                size: "16GB",
                type: "DDR4"
            },
            display: {
                size: "15.6inch",
                type: "OLED"
            },
            storage: {
                size: "256GB",
                type: "SSD"
            },
            os: "windows 11"
        }
    },
    {
        pcNumber: "tomato006",
        modelNumber: "20Q8S0CC00",
        manufacturer: "LENOVO",
        dateOfPurchase: "2024/01/01",
        status: "正常",
        rentalStatus: "使用中",
        empId: "emp#e0000001-1111-1111-1111-111111111111",
        spec: {
            cpu: {
                manufacturer: "intel",
                model: "Core i7-13700k",
                core: "8"
            },
            ram: {
                size: "16GB",
                type: "DDR4"
            },
            display: {
                size: "15.6inch",
                type: "OLED"
            },
            storage: {
                size: "256GB",
                type: "SSD"
            },
            os: "windows 11"
        }
    },
    {
        pcNumber: "tomato007",
        modelNumber: "20Q8S0CC00",
        manufacturer: "LENOVO",
        dateOfPurchase: "2024/01/01",
        status: "正常",
        rentalStatus: "使用中",
        empId: "emp#e0000001-1111-1111-1111-111111111111",
        spec: {
            cpu: {
                manufacturer: "intel",
                model: "Core i7-13700k",
                core: "8"
            },
            ram: {
                size: "16GB",
                type: "DDR4"
            },
            display: {
                size: "15.6inch",
                type: "OLED"
            },
            storage: {
                size: "256GB",
                type: "SSD"
            },
            os: "windows 11"
        }
    }
]

export const pcRentalHistorys: PcRentalHistory[] = [
    {
        pcNumber: "tomato001",
        name: "全浩辰",
        empNo: "826",
        rentalDate: "2024/11/20",
        returnDate: "2024/12/31"
    }
]

export const pcBreakHistorys: PcBreakHistory[] = [
    {
        pcNumber: "tomato005",
        issue: "ディスプレイ問題",
        description: "画面の色がおかしい",
        repairStartDate: "2024/05/04",
        repairEndDate: null,
        note: "修理中"
    }
]
