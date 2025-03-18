export interface Cpu {
    manufacturer: string,
    model: string,
    core: string
}

export interface Ram {
    size: string,
    type: string
}

export interface Display {
    size: string,
    type: string
}

export interface Storage {
    size: string,
    type: string
}

export interface Spec {
    cpu: Cpu,
    ram: Ram,
    display: Display,
    storage: Storage,
    os: string
}

export interface Pc {
    pcNumber: string,
    modelNumber: string,
    manufacturer: string,
    dateOfPurchase: string,
    status: string,
    rentalStatus: string,
    empId: string,
    spec: Spec,
}